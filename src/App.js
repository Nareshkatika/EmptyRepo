import {useState} from 'react'

import "./App.css"

const RandomNumber=()=>{
  const[text,setText]=useState(0)
  const randomNumber=Math.ceil(Math.random()*100)

  const solution=()=>{
    setText(randomNumber)
  }
  return(
    <div className='BgImg'>
        <div className='WhitePage'>
            <h1 className='headingEl1'>Random Number</h1>
            <p className='paragraphEl1'>Generate a number in the range of 0 to 100</p>
              <div>
                <button onClick={solution} type='button' >Generated Number</button>
              </div>
              <p>{text}</p>
        </div>
    </div>
  )
}

export default RandomNumber