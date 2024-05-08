/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0); // State to hold the word count

  const handelUpclick = () => {
    console.log("Uppercase button is clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Uppercase", "success");
  };

  const handellowclick = () => {
    console.log("Lowercase button is clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lowercase", "success");
  };

  const handelClearclick = () => {
    console.log("Clear button is clicked.");
    setText('');
    setWordCount(0); // Reset word count when clearing text
    props.showAlert(" Text is cleared", "success");
  };

  const handelUpchange = (event) => {
    console.log("on change");
    setText(event.target.value);
    // Update word count when text changes
    setWordCount(event.target.value.trim().split(/\s+/).filter(Boolean).length);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Text copied", "success");
  };

  const handelextraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces removed", "success");
  };

  const { mode } = props;

  return (
    <>
      <div className={`container`} style={{ backgroundColor: mode === 'dark' ? 'black' : 'white', color: mode === 'dark' ? 'white' : 'black' }}>
        <h1 style={{ textAlign: 'left', color: mode === 'dark' ? 'white' : 'black',fontSize: '35px',marginTop:"40px", marginBottom: '35px' }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control`}
            id="myBox"
            rows="9"
            value={text}
            onChange={handelUpchange}
            style={{ borderColor: props.mode === 'light' ? 'black' : 'white', borderWidth: '3px', borderStyle: "solid",marginBottom: '35px', borderRadius: "15px", color: mode === 'dark' ? 'white' : 'black', backgroundColor: mode === 'dark' ? '#282828' : 'white' }}
          ></textarea>
        </div>
        <div style={{ textAlign: "left" ,marginBottom: '35px' }}>
          <button className="btn btn-primary mx-2 my-2" style={{ backgroundColor: "#0d66db" }} onClick={handelUpclick}>Convert to uppercase</button>
          <button className="btn btn-primary mx-2 my-2" style={{ backgroundColor: "#0d66db" }} onClick={handellowclick}>Convert to lowercase</button>
          <button className="btn btn-primary mx-2 my-2" style={{ backgroundColor: "#0d66db" }} onClick={handelextraspace}>Remove extra space</button>
          <button className="btn btn-primary mx-2 my-2" style={{ backgroundColor: "#0d66db" }} onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2 my-2" style={{ backgroundColor: "#0d66db" }} onClick={handelClearclick}>Clear</button>
        </div>
        <div className="container my-3" style={{ textAlign: "left", color: mode === 'dark' ? 'white' : 'black' }} >
          <h2>Summary:</h2>
          <p>
            <b>No of words :</b> {wordCount}
            <br />
            <b>No of characters :</b> {text.length}
            <br />
            <b>Average time to read :</b> {((0.008 * text.length) || 0).toFixed(2)} minutes {/* Ensure text length is not 0 before calculating */}
          </p>
        </div>
      </div>
    </>
  );
}


