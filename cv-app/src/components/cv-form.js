import React, {Component} from "react";
import CvPersonal from './cv-personal.js';
import CvEducation from "./cv-education.js";
import CvExperience from "./cv-experience.js";

class CvForm extends Component{

    constructor(){
        super();
        this.state = {fname:'',
                    lname:'',
                    number:'',
                    email:'',

                    sname:'',
                    tname:'',
                    sdate:'',

                    cname:'',
                    pname:'',
                    tasks:'',
                    edate:''

    };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){

        const target = event.target
        const name = target.name
        const value = target.value


        if(name =='fname'){
            this.setState({
                fname:value
            })
        } else if(name =='lname'){
            this.setState({
                lname:value
            })
        } else if(name =='number'){
            this.setState({
                number:value
            })
        } else if(name =='email'){
            this.setState({
                email:value
            })
        } else if(name=='sname'){
            this.setState({
                sname:value
            })
        } else if(name=='tname'){
            this.setState({
                tname:value
            })
        } else if(name=='sdate'){
            this.setState({
                sdate:value
            })
        } else if(name=='cname'){
            this.setState({
                cname:value
            })
        } else if(name=='pname'){
            this.setState({
                pname:value
            })
        } else if(name=='tasks'){
            this.setState({
                tasks:value
            })
        } else if(name=='edate'){
            this.setState({
                edate:value
            })
        }

    }


    handleSubmit(event){
        event.preventDefault();
  
        // console.log(event.target.children[0].className)
        for (let i=0;i<event.target.children.length;i++) {
            if (event.target.children[i].className=="vis"){
                event.target.children[i].className='hid'
      
            } else if(event.target.children[i].className=="hid"){
                event.target.children[i].className='vis'
            }

        }
    }

    render(){
        const {fname,lname,number,email,sname,tname,sdate,cname,pname,tasks,edate} = this.state;
        return(

            <div className="main">
                <form className="form" id="personal" onSubmit={this.handleSubmit}>
                    <label className="vis" htmlFor='fname'>First Name:</label>
                    <input className="vis" name='fname' type="text"  onChange={this.handleChange}></input>

                    <label className="vis" htmlFor='lname' >Last Name:</label>
                    <input className="vis" name='lname'onChange={this.handleChange}></input>

                    <label className="vis" htmlFor='number'>Phone Number:</label>
                    <input className="vis" name='number'onChange={this.handleChange}></input>

                    <label className="vis" htmlFor='email'>Email Address:</label>
                    <input className="vis" name='email'onChange={this.handleChange}></input>


                    <input  type='submit' value='Add'></input>
                </form>


                <form  className="form" id="education" onSubmit={this.handleSubmit}>
                    <label className="vis" htmlFor="sname">School Name:</label>
                    <input className="vis" name="sname" type="text" onChange={this.handleChange}></input>


                    <label className="vis" htmlFor="tname">Title of Study:</label>
                    <input className="vis" name="tname" type='text' onChange={this.handleChange}></input>

                    <label className="vis" htmlFor="sdate" >Date of Study:</label>
                    <input className="vis" name="sdate" type='date' onChange={this.handleChange}></input>

                    <input  type='submit' value='Add'></input>
                </form>

                <form className="form" id="experience"  onSubmit={this.handleSubmit}>
                    <label className="vis" htmlFor="cname">Company Name:</label>
                    <input className="vis" name="cname" type="text" onChange={this.handleChange}></input>

                    <label className="vis" htmlFor="pname">Position Title:</label>
                    <input className="vis" name="pname" type='text' onChange={this.handleChange}></input>

                    <label className="vis" htmlFor="tasks" >Tasks:</label>
                    <input className="vis" name="tasks" type='text' onChange={this.handleChange}></input>
                    
                    <label className="vis" htmlFor="edate" >End Date:</label>
                    <input className="vis" name="edate" type='date' onChange={this.handleChange}></input>

                    <input  type='submit' value='Add'></input>
                </form>

                
                <CvPersonal fname={this.state.fname}
                            lname={this.state.lname} 
                            number={this.state.number}
                            email={this.state.email} />

                <CvEducation sname={this.state.sname}
                            tname={this.state.tname}
                            sdate={this.state.sdate} />

                <CvExperience cname={this.state.cname}
                            pname={this.state.pname}
                            tasks={this.state.tasks}
                            edate={this.state.edate}/>
            </div>
        )
    }

}

export default CvForm 