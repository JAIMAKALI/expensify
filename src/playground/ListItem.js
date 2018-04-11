import React from "react";


var ListItem =(props)=>(
    <div>
    <p>hii buddy {props.match.params.id}</p>
    </div>
);

export default ListItem;