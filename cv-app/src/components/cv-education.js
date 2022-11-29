import React from "react";



const CvEducation = (props)=>{

    return(
        <div id='cv--education'>
            <p>School Name:{props.sname}</p>
            <p>Title of Study:{props.tname}</p>
            <p>Date of Study:{props.sdate}</p>
        </div>
    )
}


export default CvEducation 