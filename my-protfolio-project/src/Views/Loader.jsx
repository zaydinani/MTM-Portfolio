import React, { useEffect, useState } from 'react';
import firstP from '../assets/images/1.png'
import secP from '../assets/images/2.png'
import thP from '../assets/images/3.png'
import '../scss/App.scss';

function Loader() {
  const [imagesVisible, setImagesVisible] = useState([false, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagesVisible(prev => {
        const newState = [...prev];
        const nextIndex = newState.findIndex(visible => !visible);
        if (nextIndex !== -1) {
          newState[nextIndex] = true;
        } else {
          clearInterval(interval);
        }
        return newState;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="wrapper-animation">
        <img src={firstP}   id='one' alt="Image One" className={imagesVisible[2] ? 'visible' : ''} />
        <img src={secP} id='two' alt="Image Two" className={imagesVisible[1] ? 'visible' : ''} />
        <img src={thP} id='three' alt="Image Three" className={imagesVisible[0] ? 'visible' : ''} />
      </div>
    </div>
  );
}

export default Loader;
