import BaseAPI from "./BaseAPI";

export default class Task extends BaseAPI {
  static getListTask(callback) {
    this.sendAjax(callback, {
      url: "tasks"
    });
  }
}
