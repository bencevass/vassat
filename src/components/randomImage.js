import React from "react"

export default function RandomImage() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <p className="text-center">Look at this random image:</p>
                <img className="img-fluid center-block d-block mx-auto" src="https://source.unsplash.com/random/800x600" alt="random image" />
            </div>
        </div>
    </div>
  )
}
