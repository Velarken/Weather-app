import { useEffect, useRef } from "react"


const SearchBar = ({
    setIsSearchComplete,
    setUserCity,
    setUserState,
    userCity,
    userState,
    handleTransition,
    fetchedData,
    setFetchedData
}) => {
    // data fetch should probably go inside of useEffect with userCity & userState as dependencies
    const fetchData = async () => {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userCity}%2C%20${userState}?unitGroup=us&key=7AY5JHS42ZZMML6FHJ6N7YSJU`)
            if (!response.ok) {
                throw new Error(`HTTP error! status ${response.status}`)
            }
            const result = await response.json();
            setFetchedData(result)
            console.table(result)
        } catch (error) {
            alert(error)
        }
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
    async function handleTransition() {
        await fetchData();
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

/* 
const timeoutId = useRef(null)
    useEffect(() => {
        if (fetchedData === null) {
            timeoutId.current = setTimeout(() => {
                console.log('data still null...')
                setFetchedData()
            })
        }
    })
*/