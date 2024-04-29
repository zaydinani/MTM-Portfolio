import Loader from './Views/loader';
import Index from './Views/Index';
import './scss/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';




function App() {
  const [isLoaded, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1500);
  }, [])
  return (
    <Router>

      <div className="ReactApp">

        {isLoaded ? (
          <Index />
        ) : (
          <Loader />
        )}

      </div>
    </Router>
  )
}

export default App
