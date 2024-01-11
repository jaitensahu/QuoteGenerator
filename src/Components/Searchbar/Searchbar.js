import './Searchbar.css'
const Searchbar=(props)=>{

    let inpValue="";
//    Function to Pass Data to App.js on clicking on button

    function getInputTag(){
        props.getInput(inpValue);
    }

 // Function to get Input data Value
    function inputValue(e){
        inpValue=e.target.value;
    }

    return( 
        <div className="searchbar">
            <div>
           <span>Tag:- </span> <input type="text" className='input' onChange={inputValue} placeholder='Inspirational, History'/>
           </div>
            <button onClick={getInputTag} className="button">Generate</button>
        </div>
    )
}
export default Searchbar