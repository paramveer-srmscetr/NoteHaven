import React, { useEffect } from "react";

function Alert(props) {

  const capitalize = (word) => {
if(word==="danger"){
  word="error";
}
    if (!word) return "";
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  useEffect(() => {
    if (props.alert) {
      const timer = setTimeout(() => {
        props.setAlert(null); // Assuming you have a method to clear the alert
      }, 3000); // Change the timeout duration as needed
      return () => clearTimeout(timer);
    }
  }, [props.alert]);

  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
