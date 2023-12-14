import React, { useEffect, useState } from 'react';
import '../scss/App.scss';
function Loader() {

  const [lettersVisible, setLettersVisible] = useState([false, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLettersVisible((prev) => {
        const newState = [...prev];
        const nextIndex = newState.findIndex((visible) => !visible);
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
    <>
    <div className="loader-container">
      <div className="writing-animation">
        <span className={lettersVisible[0] ? 'visible' : ''}>M</span>
        <span className={lettersVisible[1] ? 'visible' : ''}>T</span>
        <span className={lettersVisible[2] ? 'visible' : ''}>M</span>
      </div>
    </div>

    </>
  )
}

export default Loader
