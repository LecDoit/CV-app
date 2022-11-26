import React,{Component} from "react";
import CvPersonal from "./cv-personal";

class CvReceiver extends Component{

    render(){
        return(
            <div id='cv-layout'>
               <CvPersonal/>
            </div>
        )
    }
}

export default CvReceiver