import React from "react"
import Jumbotron from "../components/jumbotron"
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby"

export default function Top3MoviesPage() {
  return (
    <>
        <main>
            <Jumbotron title="Top 3 movies of the year">
                <p>
                    <Link to="/" className="link-dark">Home</Link>
                </p>
            </Jumbotron>

            <div className="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                      <h2>2023</h2>
                      <ul className="list-group">
                        <li className="list-group-item">The Promised Land (Bastarden)</li>
                        <li className="list-group-item">The Eight Mountains (Le otto montagne)</li>
                        <li className="list-group-item">Perfect Days</li>
                        <li className="list-group-item">Honorable Mention: Poor Things</li>
                      </ul>
                      <h2 className="mt-3">2022</h2>
                      <ul className="list-group">
                        <li className="list-group-item">Top Gun: Maverick</li>
                        <li className="list-group-item">The Banshees of Inisherin</li>
                        <li className="list-group-item">The Menu</li>
                      </ul>
                      <h2 className="mt-3">2021</h2>
                      <ul className="list-group">
                        <li className="list-group-item">Dune</li>
                        <li className="list-group-item">All My Friends Hate Me</li>
                        <li className="list-group-item">The Green Knight</li>
                        <li className="list-group-item">Honorable Mention: The Alpinist</li>
                      </ul>
                      <h2 className="mt-3">2020</h2>
                      <ul className="list-group">
                        <li className="list-group-item">Another Round</li>
                        <li className="list-group-item">First Cow</li>
                        <li className="list-group-item">Tenet</li>
                      </ul>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </main>

        <Footer />
    </>
  );
}

export function Head(props) {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Top 3 movies - vass.at</title>
      <meta name="description" content="Top 3 movies of the year" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </>
  )
}
