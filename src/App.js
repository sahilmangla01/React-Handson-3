
import './App.css';
import { Component } from 'react';
import DisplayData from './Component/DisplayData';


class App extends Component{
  constructor(){
    super();
    this.state={
      Name :'',
      Department :'',
      Rating : "",
      clicked: true,
      EmpData : []
    }
  }

   changeHandle =e=>{
    this.setState({[e.target.name] : e.target.value})
   }
   toggleFunction =()=>{
    this.setState({clicked : !this.state.clicked})
   }
   

   clickHandler =(e)=>{
      e.preventDefault();
      const empObj = {
        Name : this.state.Name,
        Department : this.state.Department,
        Rating : this.state.Rating
      }

      this.state.EmpData.push(empObj);
      this.setState({
        Name:"",
        Department: "",
        Rating : '',
        clicked: false,
        EmpData : this.state.EmpData
      })
   }



  render(){
    return(
      <>
        {this.state.clicked
        ?
        <div>
          <h1>EMPLOYEE FEEDBACK FORM</h1>

        
        <form>
            <label htmlFor='name'>Name : </label>
            <input type='text' id='name' placeholder='Enter Name' name='Name' value={this.state.Name} onChange={this.changeHandle} required></input>
            <br/>
            <label htmlFor='dept'>Department : </label>
            <input type='text' id='dept' placeholder='Enter Department' name='Department' value={this.state.Department} onChange={this.changeHandle}></input>
            <br/>

            <label htmlFor='rating' >Rating : </label>
            <input type='number' id='rating' max="10" placeholder='Enter Rating' name='Rating' value={this.state.Rating} onChange={this.changeHandle}></input>
            <br/>
            <button type='button' onClick={this.clickHandler}>Submit</button>
        </form>
        </div>

        :
        <DisplayData value={this.state.EmpData} toggle ={this.toggleFunction}></DisplayData>
      }
        


        
      </>

      
    )
  }
}

export default App;
