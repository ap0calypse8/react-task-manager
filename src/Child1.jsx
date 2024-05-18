import { Update } from "./Update";

function Child1(props){
    return(
        
        <div style={{background:"red"}}>
        <h1>good {props.greed} </h1>
        <Update/>
        </div>
    )
    
    
}

export default Child1;