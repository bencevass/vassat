import React from "react"

export default function Jumbotron(props) {
  return (
    <div className="jumbotron text-center">
        <h1>{props.title}</h1>
        {props.children}
    </div>
  )
}
