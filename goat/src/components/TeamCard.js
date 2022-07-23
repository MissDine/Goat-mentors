import React from 'react'

function TeamCard(props) {
    const{name, title, about,email,photo} = props
  return (
        <div className="column">
            <div className="card">
                <img className='image' src={photo} alt="Enid" />
                <div className="container"></div>
                <h2>{name}</h2>
                <p className='title'>{title}</p>
                <p>{about}</p>
                <p>{email}</p>
                <p>
                    <button className='Button'>Contact</button>
                </p>
            </div>
        </div>
  )
}

export default TeamCard
