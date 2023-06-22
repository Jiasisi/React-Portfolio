import React from 'react';

export default function Resume() {
  return (
    <div class="p-4 ">
      <h3>Resume</h3>
      <p>
        Download my resume:
      </p>
      <button class='btn btn-outline-primary' ><a href="JiasiLiResume.pdf" download="JiasiLiResume.pdf">Resume</a></button>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>javaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>bootstrap</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>

    </div>
  );
}
