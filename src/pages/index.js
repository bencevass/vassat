import React from "react"
import HtmlHeader from "../components/htmlHeader"
import Jumbotron from "../components/jumbotron"
import RandomImage from "../components/randomImage"
import Footer from "../components/footer"
import IconMail from "../components/iconMail"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <HtmlHeader title="vass.at" />
      <main>
        <Jumbotron title="Bence Vass">
          <p>software engineer</p>
          <p>
            <a href="mailto:bence@vass.at">
              <IconMail />
              <span className="sr-only">E-Mail</span>
            </a>
          </p>
        </Jumbotron>

        <RandomImage></RandomImage>
      </main>
      
      <Footer></Footer>
    </>
  );
}
