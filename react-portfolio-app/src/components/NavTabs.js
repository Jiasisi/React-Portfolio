import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    
    <nav class="navbar navbar-light bg-dark p-4" >
      <a class="navbar-brand text-white h1" href="#">Jiasi's  Portfolio</a>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a 
            href="#about"
            onClick={() => handlePageChange('About')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#project"
            onClick={() => handlePageChange('Project')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
          >
            Project
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
