import React from 'react';
import ReactDOM from 'react-dom';

var Info=(props)=>(
    <div>
        <p>this is Info page</p>
        <h1>this is{props.info}</h1>
    </div>
);
//hoc component

var Admin=(Wrraper)=>{
    return(props)=>(
        <div> 
        <Wrraper {...props}/>
        </div>
    )
}

var User=(Wrraper)=>{
    return(props)=>(
        <div>
            {props.authenticate && <p>please login first</p>}
            <Wrraper {...props}/>
        </div>
    )
}
var AdminInfo=Admin(Info);
var CheckAuthentication=User(Info);

ReactDOM.render(<CheckAuthentication authenticate={true} info="this is me"/>,document.getElementById('app'));