import './Showquote.css'
const Showquote=(props)=>{
    console.log(props);
    return (
        <div className="inputBox">
            <h3 className="quote">{props.content}</h3>
            <p className="authorName">-{props.author}</p>        
        </div>
    )
}
export default Showquote;