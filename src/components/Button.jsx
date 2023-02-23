const Button = (props)=> {
    console.log(props)
    const{texto }= props
    
    return (
        <button className="ButtonYellow"> { texto }</button>
    )
}


export default Button