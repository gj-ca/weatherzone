function City({name, weather, now, min, max}) {
    const generateImage = () => {
        let icon = undefined
        switch (weather) {
           case "Clear":
                icon = "sunny.png"
                break;
            case "Clouds":
                icon = "rainy.png"
                break;
           default:
               break;
       }
       return icon 
    }
    return (
        <tr>
            <td>
                {name}
                <br/>
                {weather}
            </td>
            <td>
                <img src={generateImage()} alt={weather} />
            </td>
            <td>
                {now}
            </td>
            <td>
                {min}
            </td>
            <td>
                {max}
            </td>
        </tr>
    )
}

export default City