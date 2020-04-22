import axios from "axios";
const service = axios.create({
  baseURL: "http://localhost:4000/api/v1",
    withCredentials: true
});
const errorHandler = (err) => {
  console.error(err);
  throw err;
};
export default {
  service,
  saveNewThing(newThing){
      return service.post("/todos", newThing)
      .then(console.log(res => res.data))
      .catch(errorHandler)
  },
  toDoUpdate(toDoUpdate){
    return service.put("/todos", toDoUpdate)
    .then(res => res.data)
    .catch(errorHandler)
},



};