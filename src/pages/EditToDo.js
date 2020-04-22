import React, { Component } from 'react'
import service from "../api/service";
import axios from "axios";

// import axios from "axios";
class EditToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
      
    handleSubmit = async (e) => {
      e.preventDefault();
      
   await service.toDoUpdate(this.state)
      const toDo = this.state
        this.setState({toDo})
        console.log("Edited!");
    };
    componentDidMount = () => {
        this.getToDo();
    }
      handleChange = (e) => {
    const { name, value } = e.target;
    console.log(this.state, "loooog")
    this.setState( {[name]: value })
      };
    render() {
        console.log(this.state, "stateeeeee")
        return (
      <div className="createEvent pb-5 mb-5 m-3">
        
        <h2 className ="text-center ">Edit ToDo</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="idName">Title</label>
            <input
            required
              className="form-control"
              id="idtitle"
              aria-describedby="title"
              placeholder={this.state.title}
              type="text"
              name="title"
              value={this.state.title || ''}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div classtitle="form-group">
            <label htmlFor="idName">Body</label>
            <input
            required
              className="form-control"
              id="idbody"
              aria-describedby="body"
              placeholder={this.state.body}
              type="text"
              name="body"
              value={this.state.body || ''}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="text-center pt-3">
             
          <button  className="btn btn-primary" type="submit">
            Save ToDo
          </button>
          </div>
          
        </form>
        
            </div>
        )
    }
}
export default EditToDo;