import React from "react"
import { Helmet } from "react-helmet"

export default function HtmlHeader(props) {
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <html lang="en" amp />
    </Helmet>
  )
}


