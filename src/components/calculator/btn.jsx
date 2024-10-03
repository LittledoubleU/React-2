

export default function Btn(props) {
    return (
        <button className={`btn ${props.className}`}
        onClick={ () => 
            props.handleClick(props.value)
        }>
            <p>
                {props.value}
            </p>
        </button>
    )
}