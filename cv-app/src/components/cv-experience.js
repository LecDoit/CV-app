import React from "react";


const CvExperience = (props)=>{
    return(
        <div id='cv--experience'>
            <p>Company Name:{props.cname}</p>
            <p>Position Title:{props.pname}</p>
            <p>Main Tasks:{props.tasks}</p>
            <p>End Date:{props.edate}</p>
        </div>
    )
}


export default CvExperience