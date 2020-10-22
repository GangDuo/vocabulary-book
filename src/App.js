import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import PlainList from './PlainList';
import './App.css';

const validation = Yup.object().shape({
  word: Yup.string().required("必須項目です"),
});

function App() {
  const [source, setSource] = useState();
  const [results, setResults] = useState();
  console.log('App.render')

  useEffect(() => {
    console.log('App.useEffect')
    /**
     * {
     *   "A": [{"en": "","ja": ""}],
     *   ...
     * }
     */
    axios.get('http://127.0.0.1:8080/DataSource.json')
        .then(response => {
          const json = Object.values(response.data).flat()
          setSource(json)
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
  }, []); 

  const handleSubmit = (values, { setSubmitting }) => {
    setImmediate(() => {
      console.log(JSON.stringify(values, null, 2));      
      const ret = source.filter(x => x.ja.indexOf(values.word) !== -1)
      setResults(ret)
      setSubmitting(false);
    });
  }

  return (
    <div className="App">
      <Formik initialValues={{ word: "" }}
       validationSchema={validation}
       onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="word">検索ワード</label>
          <Field name="word" type="text"/>
          <ErrorMessage name="word" component="span" style={{color: "red"}} />
          <button type="submit">送信</button>
        </Form>
      </Formik>
      <PlainList values={results} />
    </div>
  );
}

export default App;
