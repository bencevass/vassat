import React from "react"
import Jumbotron from "../components/jumbotron"
import RandomImage from "../components/randomImage"
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ErrorPage() {
  return (
    <>
        <main>
            <Jumbotron title="404" />

            <RandomImage />
        </main>
        
        <Footer />
    </>
  );
}

export function Head(props) {
  return (
    <>
      <meta charSet="utf-8" />
      <title>404 - vass.at</title>
      <meta name="description" content="404 - what else do you want to know?" />
      <html lang="en" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </>
  )
}