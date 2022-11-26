import  React, {Component} from 'react'
import CvForm from "./components/cv-form.js";
import "./style.css"


class App extends Component {
    constructor(){
      super()

    }
    render(){
      return (
        <div className="App">
          
          <CvForm />
          

        </div>
      );
    }
}

export default App;
