import React from 'react'

function TeamCard(props) {
    const{name, title, about,email,photo} = props
    console.log(photo);
  return (
            <div className="card row">
                <img className='card-image' src={photo} alt="pic" />
                <div className="container"></div>
                <h2>{name}</h2>
                <p className='title'>{title}</p>
                <p>{about}</p>
                <p>{email}</p>
                <p>
                    <button className='Button'>Contact</button>
                </p>
            </div>
  )
}

export default TeamCard
