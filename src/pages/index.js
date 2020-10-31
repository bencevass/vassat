import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.3/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      />
      
      <main>
        <div class="jumbotron text-center">
          <h1>Bence Vass</h1>
          <p>software engineer</p>
          <p>
          <a href="mailto:bence@vass.at">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
            </svg>
            <span class="sr-only">E-Mail</span>
          </a>
          </p>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <p class="text-center">Look at this random image:</p>
              <img class="img-fluid center-block d-block mx-auto" src="https://source.unsplash.com/random/800x600" alt="Random" />
            </div>
          </div>
        </div>
      </main>
      
      <footer class="page-footer font-small blue pt-4">
      <div class="footer-copyright text-center py-3">© 2020</div>
      </footer>
    </div>
  );
}
