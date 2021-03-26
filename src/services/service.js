import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/tutorials");
  }
}
export default new DataService();