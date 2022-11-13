import './Hello.css';

import React from 'react'

export default function Hello(props) {
  return (
    <div>
        <h1>Hello react hello component</h1>
        <h1>{props.hello}</h1>
    </div>
  )
}
