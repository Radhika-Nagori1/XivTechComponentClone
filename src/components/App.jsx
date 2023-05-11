import React from 'react'
import Collaborate from './collaborate/Collaborate'
import info  from '../dummyData'
function createCollaborate(data){
    return (
    <Collaborate
    key={data.id}
    heading={data.heading}
    para={data.para}
    link={data.link}
    img={data.img}
    />
    )
}
function App() {
  return (
    <div>
        <h4 style={{paddingLeft:'18%',fontSize:'1.5rem'}}>Let's Collaborate</h4>
        {info.map(createCollaborate)}
    </div>
  )
}

export default App