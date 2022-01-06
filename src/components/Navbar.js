import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// import '/components.css';

export default function Navbar(props) {
  // const [color, setcolor] = useState('light')
  //  let  toggleColor =(color)=>{
  // //   setcolor(event.target.value);
  //      props.toggleMode(color);
  //  }
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutApp}</Link>
            </li>
          </ul>
          {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
          {/* <div className="colorPalete">
          <div className="color-green"></div>
          <div className="color-green"></div>
          <div className="color-green"></div>
          <div className="color-green" style={{backgroundColor:'green',width:'20px'}}></div>
        </div> */}
        {/* <div className="colorPallete">hi my name is anish</div>
          <div className="row">
           
            <button className="col-1 p-2 mb-1  bg-white" onClick={toggleColor('light')}></button>
            <button className="col-1 p-2 mb-1  bg-primary" onClick={toggleColor('primary')} ></button>
            <button className="col-1 p-2 mb-1  bg-secondary" onClick={toggleColor('secondary')} ></button>
            <button className="col-1 p-2 mb-1  bg-success" onClick={toggleColor('success')}></button>
            <button className="col-1 p-2 mb-1  bg-danger" onClick={toggleColor('danger')}></button>
            <button className="col-1 p-2 mb-1  bg-warning" onClick={toggleColor('warning')} value={'warning'}></button>
            <button className="col-1 p-2 mb-1  bg-info" onClick={toggleColor('info')}></button>
            <button className="col-1 p-2 mb-1  bg-dark" onClick={toggleColor('dark')}></button>
            
          </div> */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} >
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
            <label className="form-check-label " htmlFor='flexSwitchCheckDefault'>Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutApp: PropTypes.string,
}
Navbar.defaultProps = {
  title: "Set Title Here",
  aboutApp: "About"
};