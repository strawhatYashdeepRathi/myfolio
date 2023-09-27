import React from 'react'
import './details.css'

const Card = () => {
  return (
    <div className="port-details">
      <div className="port-details-container projects">
        <div className="port-details-card">
          <h3>--Photo Sharing App--</h3>
          <span className="bar"></span>
          <p>Made a basic Instagram clone</p>
          <p>
          Engineered the backend infrastructure using Node.js to serve the APIs.
          </p>
          <p>
            Used JWT for user authentication
          </p>
        </div>

        <div className="port-details-card">
          <h3>--Laundry Service App--</h3>
          <span className="bar"></span>
          <p>An app to create, cancel and track Laundry Service</p>
          <p>
            Established frontend routes using React Router.
          </p>
          <p>
            Ensured that the UI conforms to the design provided as part of the requirements.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Card