import React from 'react';

function PlainList({values}) {
  if(!values) return <></>

  if(values.length === 0) {
    return <div>見つかりませんでした。</div>
  }

  if(values.length > 0) {
    return (
      <div>
        <ul>
          {values.map((x, i) => <li key={i}>{`${x.en} ${x.ja}`}</li>)}
        </ul>
      </div>
    )
  }
}

export default PlainList;