import React from 'react'
import "./Process.css"
const Procede = ({index,content}) => {
  return (
    <div className="process">
        <div className="index">{index+1}</div>
        <div className="content">{content}</div>
    </div>
  )
}

export default Procede