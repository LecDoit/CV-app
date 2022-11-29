import React from "react";


const Cvpersonal = (props) =>{


    return(             
        <div id='cv--personal'>
            <p>First Name:{props.fname}</p>
            <p>Last Name:{props.lname}</p>
            <p>Phone Number:{props.number}</p>
            <p>Email Address:{props.email}</p>
        </div>

    )
}




export default Cvpersonal