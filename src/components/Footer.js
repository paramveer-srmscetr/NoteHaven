import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-4  mb-0">
      <div className="container py-4 ">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              NoteHeaven is a web application that helps you manage your notes efficiently and effectively.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled ">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/about" className="text-white">About</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li><a href="https://github.com/paramveer-srmscetr" className="text-white me-3" target='_blank'><i className="fab fa-github-square"></i></a></li>
              <li><a href="https://www.linkedin.com/in/paramveer-singh-a61764224/" className="text-white me-3" target='_blank'><i className="fab fa-linkedin"></i></a></li>
              <li><a href="https://twitter.com" className="text-white me-3" target='_blank'><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://instagram.com/_paramveer_rajput" className="text-white me-3" target='_blank'><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://youtube.com/@paramveerchauhan1436" className="text-white me-3" target='_blank'><i className="fab fa-youtube-square"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="text-center py-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} NoteHeaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
