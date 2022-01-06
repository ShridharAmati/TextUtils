import React, { useState } from 'react'

export default function About(props) {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })
    const [btnText, setbtnText] = useState("Enable Dark Mode")
    const toggleOnClick = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
            })
            setbtnText("Enable Light Mode");
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
            })
            setbtnText("Enable Dark Mode");
        }
    }
    return (
        <div className={`container py-3 `}>
            <div className={` accordion bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} id="accordionExample">
                <div className= " accordion-item " >
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse show bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body ">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className={`accordion-collapse collapse show bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className={`accordion-collapse collapse show bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button className='btn btn-primary my-5' onClick={toggleOnClick}>{btnText}</button>
            </div>
        </div>
    )
}
