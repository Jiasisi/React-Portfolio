import React from 'react';
import applicationList from '../applicationList';



export default function Portfolio() {
  const githubUrl = 'Github Repo';
  const deployedLink = 'Deployed Link';
  return (
    <div class="p-4 ">
      <h3>Portfolio</h3>
      {applicationList.map(application => (
        <div class='p-4'>
          <div class='card'>
            <img class='card-img-top' src={application.image} alt={application.alt}></img>
            <div class='card-body'>
              <h5 class="card-title">{application.name}</h5>
              <a href={application.link} class="card-link">Deployed Link</a>
              <a href={application.repo} class="card-link">Github Repo</a>



            </div>


          </div>
          
            


        </div>



          






      ))}
      
    </div>
  )
}

 


