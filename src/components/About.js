import React from "react";

const About = () => {
  return (
    <div className="container my-3">
      <h1>About NoteHeaven</h1>
      <p className="lead">
        Note Heaven is a web application designed to help you manage your notes
        efficiently and effectively. Whether you are a student, a professional,
        or just someone who loves to keep things organized, Note Heaven is here
        to make your life easier.
      </p>
      <h2>Features</h2>
      <ul>
        <li>
          <strong>Create Notes:</strong> Quickly and easily create notes to
          capture your thoughts, ideas, and to-dos.
        </li>
        <li>
          <strong>Edit Notes:</strong> Modify your existing notes with just a
          few clicks.
        </li>
        <li>
          <strong>Delete Notes:</strong> Remove notes that you no longer need.
        </li>
        <li>
          <strong>Organize by Tags:</strong> Use tags to categorize and find
          your notes quickly.
        </li>
        <li>
          <strong>User Authentication:</strong> Securely access your notes from
          any device with user authentication.
        </li>
      </ul>
      <h2>Our Mission</h2>
      <p>
        Our mission is to provide a simple and effective tool for managing
        notes, making it easier for people to stay organized and productive. We
        believe that a well-organized life is a happier and more productive
        life.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or feedback, feel free to reach out to us at
        <a href="mailto:support@noteheaven.com"> support@noteheaven.com</a>. We
        would love to hear from you!
      </p>
    </div>
  );
};

export default About;
