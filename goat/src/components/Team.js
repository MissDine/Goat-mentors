import React from 'react'
import TeamCard from './TeamCard'

function Team() {
  return (
    <div className='serv' id='team'>
        <h1 id = "topics">Our Team</h1>
        <div className="column">
          <TeamCard
            name = "Alio"
            title = "C.E.O & Founder"
            about = "Lorem Ipsum"
            email = "alio@example.com"
            photo = "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGhvdG9zJTIwb2YlMjBwZW9wbGUlMjBtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <TeamCard
            name = "Enid"
            title = "Developer"
            about = "Lorem Ipsum"
            email = "enid@example.com"
            photo = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGljdHVyZXMlMjBvZiUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <TeamCard
            name = "David"
            title = "Developer"
            about = "Lorem Ipsum"
            email = "david@example.com"
            photo = "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGhvdG9zJTIwb2YlMjBwZW9wbGUlMjBtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <TeamCard
            name = "Kevin"
            title = "Developer"
            about = "Lorem Ipsum"
            email = "kevin@example.com"
            photo = "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGhvdG9zJTIwb2YlMjBwZW9wbGUlMjBtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <TeamCard
            name = "Ashira"
            title = "Developer"
            about = "Lorem Ipsum"
            email = "ashira@example.com"
            photo = "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGhvdG9zJTIwb2YlMjBwZW9wbGUlMjBtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <TeamCard
            name = "Michael"
            title = "Developer"
            about = "Lorem Ipsum"
            email = "ashira@example.com"
            photo = "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGhvdG9zJTIwb2YlMjBwZW9wbGUlMjBtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </div>
    </div>
  )
}

export default Team