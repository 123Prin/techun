import './Box.css';



function Firstbox (props){
    return(
        
        <div className='allbox'>
        <div className="box">
            
        <h3>{props.head}</h3>
        <p className="Firstline">{props.lines}</p>
        <div className="hello"><h1>${props.Rs}<span>/mo</span></h1></div>
        <button>{props.newbutton}</button>
        <div class="down">
        <article>{props.Question}</article>
        <p>{props.newline}</p>
        <p>{props.secondline}</p>
        </div>
        </div>
        </div>


    );


}
export default Firstbox;