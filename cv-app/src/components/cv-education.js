import React, {Component} from "react";

class CvEducation extends Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div id='cv--education'>
                <p>School Name:{this.props.sname}</p>
                <p>Title of Study:{this.props.tname}</p>
                <p>Date of Study:{this.props.sdate}</p>
            </div>
        )
    }

}
export default CvEducation 