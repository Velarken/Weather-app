const WeatherCard = ({
    cardType,
    cardData
}) => {
    const listData = cardData.map(data => {
        return (
            <>
                <li>{data}</li>
            </>
        )
    })
    return (
        <>
            <h2>{cardType}</h2>
            <ul>
                {listData}
            </ul>
        </>
    )
}
export default WeatherCard;