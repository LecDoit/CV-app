import React, {useState} from "react";
import Cvpersonal from './cv-personal.js';
import CvEducation from "./cv-education.js";
import CvExperience from "./cv-experience.js";


const CvForm =()=>{

    let [fname,setFname] = useState('')
    let [lname,setLname] = useState('')
    let [number,setNumber] = useState('')
    let [email,setEmail] = useState('')
    
    let [sname,setSname] = useState('')
    let [tname,setTname] = useState('')
    let [sdate,setSdate] = useState('')

    let [cname,setCname] = useState('')
    let [pname,setPname] = useState('')
    let [tasks,setTasks] = useState('')
    let [edate,setEdate] = useState('')


    function handleChange(event){

        const target = event.target
        const name = target.name
        const value = target.value

        if(name =='fname'){
            setFname(value)
        } else if(name =='lname'){
            setLname(value)
        }else if(name =='number'){
            setNumber(value)            
        } else if(name =='email'){
            setEmail(value)            
        } else if(name=='sname'){
            setSname(value)
        } else if(name=='tname'){
            setTname(value)
        } else if(name=='sdate'){
            setSdate(value)
        } else if(name=='cname'){
            setCname(value)
        } else if(name=='pname'){
            setPname(value)
        } else if(name=='tasks'){
            setTasks(value)
        } else if(name=='edate'){
            setEdate(value)
        }

    }


    function handleSubmit(event){
        event.preventDefault();
  
        for (let i=0;i<event.target.children.length;i++) {
            if (event.target.children[i].className=="vis"){
                event.target.children[i].className='hid'
      
            } else if(event.target.children[i].className=="hid"){
                event.target.children[i].className='vis'
            }

        }
    }

        return(

            <div className="main">
                <form className="form" id="personal" onSubmit={handleSubmit} >
                    <label className="vis" htmlFor='fname'>First Name:</label>
                    <input className="vis" name='fname' type="text" onChange={handleChange} ></input>

                    <label className="vis" htmlFor='lname' >Last Name:</label>
                    <input className="vis" name='lname'onChange={handleChange}></input>

                    <label className="vis" htmlFor='number'>Phone Number:</label>
                    <input className="vis" name='number' onChange={handleChange}></input>

                    <label className="vis" htmlFor='email' >Email Address:</label>
                    <input className="vis" name='email'onChange={handleChange}></input>


                    <input  type='submit' value='Add'></input>
                </form>


                <form  className="form" id="education"onSubmit={handleSubmit} >
                    <label className="vis" htmlFor="sname" >School Name:</label>
                    <input className="vis" name="sname" type="text" onChange={handleChange}></input>


                    <label className="vis" htmlFor="tname">Title of Study:</label>
                    <input className="vis" name="tname" type='text' onChange={handleChange}></input>

                    <label className="vis" htmlFor="sdate" >Date of Study:</label>
                    <input className="vis" name="sdate" type='date' onChange={handleChange}></input>

                    <input  type='submit' value='Add'></input>
                </form>

                <form className="form" id="experience" onSubmit={handleSubmit} >
                    <label className="vis" htmlFor="cname">Company Name:</label>
                    <input className="vis" name="cname" type="text"onChange={handleChange} ></input>

                    <label className="vis" htmlFor="pname">Position Title:</label>
                    <input className="vis" name="pname" type='text'onChange={handleChange} ></input>

                    <label className="vis" htmlFor="tasks" >Tasks:</label>
                    <input className="vis" name="tasks" type='text'onChange={handleChange} ></input>
                    
                    <label className="vis" htmlFor="edate" >End Date:</label>
                    <input className="vis" name="edate" type='date' onChange={handleChange}></input>

                    <input  type='submit' value='Add'></input>
                </form>

            
                
                <Cvpersonal fname={fname}
                            lname={lname} 
                            number={number}
                            email={email} />

                <CvEducation sname={sname}
                            tname={tname}
                            sdate={sdate} />

                <CvExperience cname={cname}
                            pname={pname}
                            tasks={tasks}
                            edate={edate}/>
            </div>
        )
    }



export default CvForm 