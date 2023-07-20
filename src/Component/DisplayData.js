import React, { Component } from "react";
import "./DisplayData.css"

class DisplayData extends Component{
    constructor(props){
        super(props);
        console.log(this.props.value)
    }

    render(){
        return(
            <>
            <h1>EMPLOYEE FEEDBACK DATA</h1>
            <div className="Output">
                {
                    this.props.value.map((item,index)=>{
                        return(
                        <div className="DataBox" key={index}>
                             Name : {item.Name} || Department : {item.Department} || Rating : {item.Rating}
                        </div>
                        ) 
                    })
                }

            </div>
                <button onClick={this.props.toggle}>Go Back</button>
            </>
        )
    }
}

export default DisplayData