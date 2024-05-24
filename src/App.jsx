import Loader from './Views/loader';
import Index from './Views/Index';
import './scss/App.scss';

import { useEffect, useState } from 'react';




function App() {
  const [isLoaded, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1500);
  }, [])
  return (

      <div className="ReactApp">

        {isLoaded ? (
          <Index />
        ) : (
          <Loader />
        )}

      </div>
  )
}

export default App
