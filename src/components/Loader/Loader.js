import React from 'react';
import './Loader.css';

 function Loader({ width, height, color }) {
  const styleLoader = {
    "--loader-width": `${width}vw`,
    "--loader-height": `${height}vw`,
    "--loader-color": color
  }

  return (
    <div className="loader" style={styleLoader}></div>
  )
}
export default Loader;