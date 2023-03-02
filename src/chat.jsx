import React from "react";

export const MyChat = (props) => {
  const chatStyle = {
    div: {
      padding: "10px",
      color: "black",
      fontFamily: "sans-serif",
      textAlign: "center",
      margin: "5px",
      overflow: "auto",
    },
    p: {
      backgroundColor: "aquamarine",
      color: "black",
      padding: "10px",
      borderRadius: "10px",
      float: "left",
      textAlign: "left",
      maxWidth: "40%",
    },
    ul: {
      float: "right",
      listStyle: "none",
    },
    li: {
      padding: "10px",
      borderRadius: "10px",
      margin: "10px",
      width: "150px",
      backgroundColor: "white",
      color: "darkBlue",
      wordWrap: "break-word",
    },
  };
  return (
    <div id="chat" style={chatStyle.div}>
      <p style={chatStyle.p}>Hey! How is that React course going? Are you running as fast as I am? 🤣🤣</p>
      <ul style={chatStyle.ul}>
        {props.messages.map((message) => (
          <li style={chatStyle.li}>{message}</li>
        ))}
        ;
      </ul>
    </div>
  );
};