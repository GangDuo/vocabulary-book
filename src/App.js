import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './App.css';

const validation = Yup.object().shape({
  word: Yup.string().required("必須項目です"),
});

function App() {
  return (
    <div className="App">
      <Formik initialValues={{ word: "" }}
       validationSchema={validation}
       onSubmit={values => console.log(values)}
      >
        <Form>
          <label htmlFor="word">word</label>
          <Field name="word" type="text"/>
          <ErrorMessage name="word" component="span" style={{color: "red"}} />
          <button type="submit">送信</button>
        </Form>
     </Formik>
    </div>
  );
}

export default App;
