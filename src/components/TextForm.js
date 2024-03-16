import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=> {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=> {
        console.log("Clear Text was clicked");
        let newText = " ";
        setText(newText);
    }


    const handleOnChange = (event)=> {
        console.log("On Change");
        setText(event.target.value);
    }

    const[text, setText] = useState("Enter text here");


  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8" />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container my-3">
        <h1> Your Text Summary </h1>
        <p> { text.split(" ").length } words, {text.length} characters </p>
        <p> {0.008 * text.split(" ").length} Minutes to read </p>
        <h2> Preview </h2>
        <p> {text} </p>
    </div>
    </>
  )
}
