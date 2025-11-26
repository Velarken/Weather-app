import { useEffect, useRef } from "react"


const SearchBar = ({
    setIsSearchComplete,
    setUserCity,
    setUserState,
    userCity,
    userState,
    setFetchedData,
    isSearchComplete,
    setHourlyData
}) => {
   
    // data fetch should probably go inside of useEffect with userCity & userState as dependencies
    const fetchData = async () => {
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userCity}%2C%20${userState}?unitGroup=us&key=7AY5JHS42ZZMML6FHJ6N7YSJU`)
            .then(function(response) {
                return response.json()
            })
            .then(function(response) {
                setFetchedData(response.days); // array of data for the next 15 days
                let arr = [];
                for (let day in response.days) {
                    arr.push(day.hours)
                };
                setHourlyData(arr); // array of hour data for the above data set
            })
            .catch(function(err) {
                console.log('Something went wrong while fetching data!')
                alert(err)
            })
    }
    const handleUserCity = (event) => {
        let input = sanitizeInput(event.target.value)
        setUserCity(input);
    }
    const handleUserState = (event) => {
        let input = sanitizeInput(event.target.value)
        setUserState(input);
    }
    const sanitizeInput = (input) => {
        return input.toLowerCase().replace(/\s/g, "%2C")
    }
    const handleTransition = async () => {
        // const data = await fetchData();
        console.log('...fetching data')
        // setFetchedData(data)
        console.log('...data fetched and saved')
        setIsSearchComplete(true);
    }
    return (
        <form className='weatherPanel'>
            <input type="text" placeholder='New York' onChange={handleUserCity} />
            <input type="text" placeholder='New York' onChange={handleUserState} />
            <button onClick={handleTransition}>Get Weather!</button>
        </form>
    )
}
export default SearchBar;