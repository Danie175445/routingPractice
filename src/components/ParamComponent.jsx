import { useParams } from "react-router-dom"

const ParamComponent =(props) => {
    const {param,textColor,bgcolor} = useParams();
    const style = {
        backgroundColor: bgcolor,
        color: textColor
    }
    return(
        <div>
            {
                isNaN(param)?
                <h1 style={
                    textColor && bgcolor?
                    {color: textColor, backgroundColor: bgcolor}
                    :null
                }>
                    The word is: {param}
                </h1>
                :
                <h1 style={style}>The number is: {param}</h1>
            }
        </div>
    )
}
export default ParamComponent