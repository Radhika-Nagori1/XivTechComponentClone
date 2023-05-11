import React from 'react'
import "./collaborate.css"
function Collaborate(props) {
  return (
    <div class="main">
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2>{props.heading}</h2>
                <h3>{props.para}</h3>
            </div>
            <a href='#' className='link'>{props.link}<span>&#8594;</span></a>
        </div>
        <div className='i-right'>
            <img src={props.img}></img>
        </div>
    </div>
    </div>
  )
}

export default Collaborate;