import axios from "axios";
import { serverConfig } from "../../config";
const apiUrl = serverConfig.api;

const exampleService = {
  find: () => {
    axios.get(`${apiUrl}/resource`);
  },
  get: id => {
    axios.get(`${apiUrl}/resource/${id}`);
  },
  create: payload => {
    axios.post(`${apiUrl}/resource`, payload);
  },
  update: (id, payload) => {
    axios.patch(`${apiUrl}/resource/${id}`, payload);
  },
  delete: id => {
    axios.delete(`${apiUrl}/resource/${id}`);
  }
};

export default exampleService;
