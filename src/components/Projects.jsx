import React from 'react'

export default function Projects() {
  return (
    <div className='projects'>
        {/* <h1 className='heading-project'>My Projects</h1> */}
        <div>
            <h2 className='heading'>Bloom Stationery</h2>
            <iframe className='video' src="https://drive.google.com/file/d/1iQKKO8Pb9nGS8fMEqiBOJjizxZze_YRz/preview" width="640" height="480" allow="autoplay"></iframe>
            <p className='description'>Welcome to Bloom Stationery, an online stationery website where users are able to add planners, journals, and notepads to their cart. Users are able to log in to the website and also click on the logo to return back to the homepage.</p>
        </div>
        <div>
            <h2 className='heading'>Socially Book'd</h2>
            <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/bGrg6aByf9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p className='description'>Welcome to Socially Book'd- a website where users can post updates about the books they're currently reading and also add reviews of the books they've read in the past.</p>
        </div>
    </div>
  )
}
