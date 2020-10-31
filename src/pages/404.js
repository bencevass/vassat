import React from "react"
import HtmlHeader from "../components/htmlHeader"
import Jumbotron from "../components/jumbotron"
import RandomImage from "../components/randomImage"
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function() {
  return (
    <>
        <HtmlHeader title="404 - vass.at" description="404 - what else do you want to know?" />
        <main>
            <Jumbotron title="404" />

            <RandomImage />
        </main>
        
        <Footer />
    </>
  );
}
