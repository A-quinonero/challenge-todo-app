import React, { Component } from "react";
import service from "../api/service";
import { Link } from "react-router-dom";

class CreateToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body:""
      
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(this.state.body)
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    service
      .saveNewThing(this.state)
      .then((res) => {
          
        console.log("Added", res);
      })
      .catch((err) => {
        console.log("Error while adding the thing:", err);
      });
  };

  render() {
    return (
      <div className="container-pages p-3">
        <div className="createEvent pb-5 mb-5">
          <h2>Create ToDo</h2>
          <form onSubmit={(e) => this.handleSubmit(e)}>
           
            <div className="form-group">
              <label htmlFor="idName">Title</label>
              <input
              required
                className="form-control formadd"
                id="idName"
                aria-describedby="Name"
                placeholder="Event Name"
                type="text"
                name="title"
                value={this.state.title || ""}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="idbody">Problem</label>
              <textarea
              required
                className="form-control formadd"
                id="idbody"
                aria-describedby="Description"
                placeholder="What is the problem?"
                type="text"
                name="body"
                value={this.state.body || ""}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="text-center pt-3">
               
              <button
                className="text-center btn btn-primary formadd"
                type="submit"
              >
                Create ToDo
              </button>
            </div>
          </form>
          <div className="text-center pt-3">
          <Link to="/"><button className="btn btn-primary">Back to To Do's</button></Link>
          </div>  
        </div>
      </div>
    );
  }
}
export default CreateToDo;
