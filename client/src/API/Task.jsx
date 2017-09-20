import BaseAPI from './BaseAPI';

export default class Task extends BaseAPI {

  static getListTask(callback) {
    this.sendAjax(callback, {
      url: 'tasks'
    });
  }

  static createTask(callback, object, options = {}) {
    let data = update(options, {$merge: {[`task`]: object}})
    this.sendAjax(callback, {
      url: 'tasks',
      method: 'POST',
      data: data
    });
  }

  static loadTask(callback, id, options = {}) {
    this.sendAjax(callback, {
      url: `tasks/${id}`,
      data: options
    });
  }

  static updateTask(callback, object, options = {}) {
    let data = update(options, {$merge: {[`task`]: object}})
    this.sendAjax(callback, {
      url: `tasks/${object.id}`,
      method: 'PATCH',
      data: data
    });
  }

  static deleteTask(callback, id) {
    this.sendAjax(callback, {
      url: `tasks/${id}`,
      method: 'DELETE',
    });
  }
}
