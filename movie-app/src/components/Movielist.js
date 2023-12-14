import React from 'react'
import Moviecard2 from './Moviecards'

function Movielist2({movies}) {
    console.log (movies)
  return (
    <div>
     {movies.map(element=><Moviecard2 movie={element}/>)}
    </div>
  )
}

export default Movielist2