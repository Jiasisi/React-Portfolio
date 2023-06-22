import React from 'react';
import photo from '../images/photo.jpg';

export default function About() {
  return (
    <div class="p-4 ">
      <h3 class="m-3">About Me</h3>
      <img src={photo} alt="jiasi's photo" class="m-3 rounded-circle" height='350'></img>
      <p class="m-3">
      My name is Jiasi. I come from China, and I came to Canada almost four years ago. I have graduated from the MBA program at UNB and have worked for one year. I have a great interest in building webpages, and I would like to have more opportunities, so I joined the Coding Boot Camp to learn coding skills.
      </p>
      

      

    </div>
  );
}
