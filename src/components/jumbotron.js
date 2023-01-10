import React from "react"

export default function Jumbotron(props) {
  return (
    <div className="pt-5 pb-4 mb-4 bg-light rounded-3 text-center">
        <h1>{props.title}</h1>
        {props.children}
    </div>
  )
}
