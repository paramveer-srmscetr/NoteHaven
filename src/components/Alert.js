import React from "react";

function Alert(props) {
  // settime out

  return (
    <div>
      <div class="alert alert-primary" role="alert">
        {props.message}
      </div>
    </div>
  );
}

export default Alert;
