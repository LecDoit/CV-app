import React, {Component} from "react";

class CvExperience extends Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div id='cv--experience'>
                <p>Company Name:{this.props.cname}</p>
                <p>Position Title:{this.props.pname}</p>
                <p>Main Tasks:{this.props.tasks}</p>
                <p>End Date:{this.props.edate}</p>
            </div>
        )

    }
}
export default CvExperience