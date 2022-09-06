import React from "react"

export default function Head(props) {
  return (
    <>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
      <meta name="description" content="{props.description}"/>
      <html lang="en" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </>
  )
}
