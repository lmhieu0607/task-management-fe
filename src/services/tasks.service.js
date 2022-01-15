import BaseHttpService from "./base-http.service";
import queryString from "query-string";

export default class TasksService extends BaseHttpService {
  fetchTasks({ status, search }) {
    const queryObj = {};

    if (status.length) {
      queryObj.status = status;
    }

    if (search.length) {
      queryObj.search = search;
    }

    const queryStr = queryString.stringify(queryObj);
    return this.get("task" + (queryStr ? `?${queryStr}` : ""));
  }

  async deleteTask(id) {
    await this.delete(`task/${id}`);
  }

  updateTaskStatus(id, status) {
    return this.patch(`task/${id}/status`, { status });
  }

  createTask(title, description) {
    return this.post(`task`, { title, description });
  }
}
