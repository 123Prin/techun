import Firstbox from "./Component/Box";
import sdata from "./Component/Sadata";
import Monty from "./Component/monty";    

function Prince(){
return(
        <div>
            <Monty/>
            
        <Firstbox 
        head={sdata[0].heading}
         lines={sdata[0].firstline}
          Rs={sdata[0].price}
        newbutton={sdata[0].button}
        Question={sdata[0].ques}
       newline  ={sdata[0].line1}
       secondline  ={sdata[0].line2}/>
        
        <Firstbox 
     head={sdata[1].heading}
    lines={sdata[1].firstline}
     Rs={sdata[1].price}
   newbutton={sdata[1].button}
   Question={sdata[1].ques}
  newline  ={sdata[1].line1}
  secondline  ={sdata[1].line2}></Firstbox>

<Firstbox

head={sdata[2].heading}
lines={sdata[2].firstline}
Rs={sdata[2].price}
newbutton={sdata[2].button}
Question={sdata[2].ques}
newline  ={sdata[2].line1}
secondline  ={sdata[2].line2}/>

<Firstbox

head={sdata[3].heading}
lines={sdata[3].firstline}
Rs={sdata[3].price}
newbutton={sdata[3].button}
Question={sdata[3].ques}
newline  ={sdata[3].line1}
secondline  ={sdata[3].line2}/>
         
 </div>

    );
}
export default Prince;