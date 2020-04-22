import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class AllToDo extends Component {
  constructor() {
    super();
    this.state = { listOfToDo: []};
  }
  
  getAllToDos = () => {
    axios.get("http://localhost:4000/api/v1/todos").then((responseFromApi) => {
      this.setState({
          
        listOfToDo: responseFromApi.data,
      });
    });
  };
   
  componentDidMount() {
    this.getAllToDos();
  }
  
  
  render() {
    
    return (
      <div className="pt-4 ">
        <h3 className ="text-center mb-4">To do's</h3>
        
        <div>
          {this.state.listOfToDo.map((toDo) => {
            return (
              <div className="">
                <Link to={`/${toDo._id}`}>
                  <div className="text-noticeboard">
                    <h4 className="text-dark ml-2">{toDo.title}</h4>
                    <h4 className="text-dark ml-2">{toDo.body}</h4>
                   
                    <div className="pt-3">
                    <Link to={`/edit/todo/${toDo._id}`}>
                <button  className="btn btn-primary ">
                  Edit
                </button>
              </Link></div>
                  </div>
                 
                </Link>
                {/* <p style={{maxWidth: '400px'}} >{event.description} </p> */}
              </div>
            );
          })}
        </div>
        <div className="text-center pt-3">
          <Link to="/todos"><button className="btn btn-primary">Add To Do</button></Link>
          </div>  
      </div>
    );
  }
}
export default AllToDo;
