import React from 'react'
import Project from './Project'
import {projectsData} from './data/porjectsData'

function Projects() {
 
return (
  <div className='flex flex-wrap justify-around  mt-28' >
    {
      projectsData.map((item, id) => (<Project key={id} {...item} />))
    }

  </div>
)
}

export default Projects