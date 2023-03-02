import React from "react";

export const MyInput = (props) => {
  const inputStyle = {
    div: {
      fontFamily: "sans-serif",
      backgroundColor: "white",
      color: "darkGray",
      position: "fixed",
      bottom: "0",
      padding: "10px",
      width: "100%",
      marginLeft: "-8px",
    },
    input: {
      padding: "10px",
      margin: "5px",
      width: "50%",
      borderRadius: "10px",
      borderWidth: "1px",
    },
    button: {
      padding: "10px",
      backgroundColor: "darkGreen",
      color: "white",
      borderWidth: "1px",
      borderRadius: "10px",
    },
  };

  return (
    <div style={inputStyle.div}>
      <input
        style={inputStyle.input}
        type="text"
        placeholder="Write a message & click send"
        id="message"
      ></input>
      <button style={inputStyle.button} id="btn" onClick={props.input}>
        Send
      </button>
    </div>
  );
};



