import BaseAPI from './BaseAPI';

export default class Task extends BaseAPI {
  static getListTask(callback) {
    this.sendAjax(callback, {
      url: 'tasks'
    });
  }

  static createTask(callback, object, options = {}) {
    let objectName = "task";
    let data = update(options, {$merge: {[objectName]: object}})
    this.sendAjax(callback, {
      url: 'tasks',
      method: 'POST',
      data: data
    });
  }
}
