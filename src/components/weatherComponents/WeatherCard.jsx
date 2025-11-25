const WeatherCard = ({
    cardType,
    cardData
}) => {
    const listData = cardData.map(data => {
        return (
            <div className="detailsCard">
                <h4>{data.title}</h4>
                <h3>{data.data}</h3>
            </div>
        )
    })
    return (
        <>
            <h2>{cardType}</h2>
            <div className="dayDetails flex-col">
                {listData}
            </div>
        </>
    )
}
export default WeatherCard;