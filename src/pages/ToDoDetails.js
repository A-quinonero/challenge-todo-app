import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import service from "../api/service";
class ToDoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      body:"",
      
      
    };
  }

  getToDo = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:4000/api/v1/todos/${params.id}`)
      .then((responseFromApi) => {
        console.log(responseFromApi.data, "responseeeeee")
         const toDo = responseFromApi.data;
        this.setState(toDo);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  deleteToDo = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:4000/api/v1/todos/${params.id}`)
    .then( () =>{
        this.props.history.push('/');

    })
    .catch((err)=>{
        console.log(err)
    })
  }
  
  
  componentDidMount() {
    this.getToDo();
  }

  render() {
    console.log(this.state)
    return (
      <div className="p-3">
        <form onSubmit={(e) => this.handleSubmit(e)}>
    
          <h1 className="titleDetails">{this.state.title}</h1>
          <p className="fechayhora">
            <i>
              {this.state.date} - {this.state.duration}h
            </i>
          </p>
          
          
          </form> 
          <div className="text-center">
          <Link to="/"><button className="btn btn-primary">Back to To Do's</button></Link>
          </div> 
          <div className="pt-3">
          <button className ="btn btn-primary" onClick={() => this.deleteToDo()}>Delete ToDo</button>
</div>
      </div>
    );
  }
}

export default ToDoDetails;
