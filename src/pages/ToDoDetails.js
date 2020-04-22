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
  handleDelete = async (e) => {
    e.preventDefault();
    
 await service.toDoDelete(this.state._id)
      console.log("deleted");
  };
  
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
          
          <div className="pt-3">
                    <button onSubmit={(e) => this.handleDelete(e)} className="btn btn-primary ">
                      delete
                    </button>
                  </div>
          </form> 
          <div className="text-center">
          <Link to="/"><button className="btn btn-primary">Back to To Do's</button></Link>
          </div> 

      </div>
    );
  }
}

export default ToDoDetails;
