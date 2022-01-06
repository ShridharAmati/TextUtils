import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase is clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to Uppercase","success")
    }
    const handleLoClick = ()=>{
        console.log("Uppercase is clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted to Lowercase ","success")
    }
    const handleOnChange = (event)=>{
        console.log("Onchange is clicked");
        setText(event.target.value);
    }
    const handleClear = ()=>{
        console.log("Clear is clicked");
        setText("");
        
    }
    const handleCopy = ()=>{
        console.log("copy to clipboard is clicked");
        var text= document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied","success")
    }
    const handleExtraSpaces = ()=>{
        console.log(" Remove ExtraSpaces is clicked");
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed","success")
    }
    const handletextlength = (textinbox) =>{
      let newtext=textinbox.split(" ");
      let wordCount=0;
        for(let i=0;i<newtext.length;i++)
        {
            if(newtext[i].length>0)
            {
                wordCount++;
            }
        }
        return wordCount;
    }
    const [text, setText] = useState('');
    // text="anish"   //  wrong way to change the state
    //  setText="Anish"; //  Right way to change the state

    return (
        <>
        <div className={`container text-${props.mode==='light'?'dark':'light'}`} >
            <h1 className='my-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control container bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'light':'dark'}} value={text} onChange={handleOnChange} placeholder='Enter your text'></textarea>
            </div>
            <button className='btn btn-primary my-3 mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary my-3 mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary my-3 mx-1' onClick={handleCopy}>Copy text</button>
            <button className='btn btn-primary my-3 mx-1' onClick={handleClear}>Clear text</button>
            <button className='btn btn-primary my-3 mx-1' onClick={handleExtraSpaces}>Clear Extra spaces</button>
        </div>
        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <h2>Your text summary : </h2>
            <p>{handletextlength(text)} words and {text.length} characters</p>          
            <p>Approximate reading time for above text is {(text.split(" ").length)*0.008} minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
        </div>
        </>
    )
}
// {text.split(" ").length}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
TextForm.defaultProps = {
    heading: "Enter your text"
};