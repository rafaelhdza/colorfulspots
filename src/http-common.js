import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api", //baseURL depends on REST APIs url that our Server configures
  headers: {
    "Content-type": "application/json"
  }
});