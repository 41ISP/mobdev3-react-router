import places from "../../data/data.json"

const Destinations = () => {
    return (
        <>
            <h1>Доступные туры</h1>
            {places.map((place) => (
                <div className="card">
                    <h4 className="card__title">
                        {place.name}
                    </h4>
                </div>
            ))}
        </>
    )
}

export default Destinations