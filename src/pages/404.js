import React from "react"
import HtmlHeader from "../components/htmlHeader"
import Jumbotron from "../components/jumbotron"
import RandomImage from "../components/randomImage"
import Footer from "../components/footer"

export default function() {
  return (
    <>
        <HtmlHeader title="404 - vass.at" />
        <main>
            <Jumbotron title="404" />

            <RandomImage />
        </main>
        
        <Footer />
    </>
  );
}
