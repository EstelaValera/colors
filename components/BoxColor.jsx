function BoxColor ({color, value}) {
    const boxStyle = (color) => {
        return color === value ? color : ""
    }

    const changeText = (color) => {
    const text = color === value ? `Yes, I´m a ${value} color` : `I´m not a ${value} color`
    return <span style={{color: color === value ? "black" : color}}>{text}</span>
    }
    return (
    <>
        <li style={{borderColor: color, backgroundColor: boxStyle(color)}} className="box">
        {changeText(color)}
        </li>
    </> 
    )
}
export default BoxColor;  
