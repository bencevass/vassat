import React from "react"
import Jumbotron from "../components/jumbotron"
import RandomImage from "../components/randomImage"
import Footer from "../components/footer"
import IconMail from "../components/iconMail"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      <main>
        <Jumbotron title="Bence Vass">
          <p>
            software engineer<br/>
            <a href="mailto:bence@vass.at">
              <IconMail />
              <span className="visually-hidden">E-Mail</span>
            </a>
          </p>
          <p>
            <Link to="/top3movies/" className="link-dark">Top 3 movies of the year</Link>
          </p>
        </Jumbotron>

        <RandomImage></RandomImage>
      </main>
      
      <Footer></Footer>
    </>
  );
}

export function Head(props) {
  return (
    <>
      <meta charSet="utf-8" />
      <title>vass.at</title>
      <meta name="description" content="Bence Vass, software engineer"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </>
  )
}
