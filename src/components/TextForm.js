import React, { useState} from 'react'

export default function TextForm(props) {
  const [Text,setText] = useState('Enter text here');
  const handleUpClick = ()=>{
    // console.log('Uppercase was clicked'+ Text);
    let newText = Text.toUpperCase();
    setText(newText)
    props.showAlert("Converted Into UpperCase","Success");
    
  }
  const handleLoClick = ()=>{
    console.log('Uppercase was clicked'+ Text);
    let newText = Text.toLowerCase();
    setText(newText)
    props.showAlert("Converted Into LowerCase","Success");
    
  }
  const handleOnChange = (event)=>{
    console.log('On Change');
    setText(event.target.value)//write in textarea
  }

  const handleClearClick = ()=>{
    let newText ="";
    setText(newText) 
  }
    
    // text ="new text" // Wrong way to change the state
    // setText("new text"); //correct way to change the state
    
   
  return (
   
    <>
     
        <div className="container" style={{color:props.mode==='dark'? 'white':'black'}}>
          <h1>{props.heading}</h1>
          
          <div>
            <textarea onChange={handleOnChange} rows="8"  value={Text}  className="form-control" id="mybox" ></textarea>
          </div>
          <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert To Upercase</button>
          <button className="btn btn-primary mt-3 ml-3" onClick={handleLoClick}>Convert To Lowercase</button>
          <button className="btn btn-warning mt-3 ml-3" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className='container my-3' style={{color:props.mode==='dark'? 'white':'black'}}>
          <h1>Your text summary</h1>
          <p>{Text.split(" ").length} words and {Text.length} characters</p>
          <p>{0.008 * Text.split(" ").length} Minutes Read</p>
          <h3>Preview</h3>
          <p>{Text}</p>
        </div>
    
        </>
  )
}
