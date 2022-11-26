import React,{Component} from "react";

class CvPersonal extends Component{
    constructor(props){
        super();
    }

    render(){

        return(
            <div id='cv--personal'>

                <p>First Name:{this.props.fname}</p>
                <p>Last Name:{this.props.lname}</p>
                <p>Phone Number:{this.props.number}</p>
                <p>Email Address:{this.props.email}</p>


            </div>
        )
    }
}

export default CvPersonal