import React from 'react'
import TeamCard from './TeamCard'

function Team() {
  return (
    <div>
        <h1>Our Team</h1>
        <div className="row">
          <TeamCard
            name = "Alio"
            title = "C.E.O & Founder"
            about = "Lorem Ipsum"
            email = "alio@example.com"
            photo = "https://source.unsplash.com/random/400*200"
          />
          <TeamCard
            name = "Enid"
            title = "Developer"
            about = "Lorem Ipsum"
            email = "enid@example.com"
            photo = "https://source.unsplash.com/random/400*200"
          />
          <TeamCard
            name = "David"
            title = "Developer"
            about = "Lorem Ipsum"
            email = "david@example.com"
            photo = "https://source.unsplash.com/random/400*200"
          />
          <TeamCard
            name = "Kevin"
            title = "Developer"
            about = "Lorem Ipsum"
            email = "kevin@example.com"
            photo = "https://source.unsplash.com/random/400*200"
          />
          <TeamCard
            name = "Ashira"
            title = "Developer"
            about = "Lorem Ipsum"
            email = "ashira@example.com"
            photo = "https://source.unsplash.com/random/400*200"
          />
        </div>
    </div>
  )
}

export default Team