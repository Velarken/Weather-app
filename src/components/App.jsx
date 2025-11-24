import { useState } from 'react'

import './App.css'
import SearchBar from './components/SearchBar.jsx'
import WeatherPanel from './components/WeatherPanel.jsx';

function App() {
  const [isSearchComplete,setIsSearchComplete] = useState(false);
  const [userCity,setUserCity] = useState('New York');
  const [userState,setUserState] = useState('New York');
  const [fetchedData,setFetchedData] = useState(null);

    return (
        <div className='page'>
          <h1>Weather App</h1>
            {!isSearchComplete 
                ? <SearchBar 
                    setIsSearchComplete={setIsSearchComplete}
                    setUserCity={setUserCity}
                    setUserState={setUserState}
                    userCity={userCity}
                    userState={userState}
                    setFetchedData={setFetchedData}
                  />
                : <WeatherPanel 
                    displayData={fetchedData}
                />
            }
            
        </div>
    )
}

export default App
