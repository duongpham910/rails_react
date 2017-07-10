var pluralize = require("pluralize")

export default class BaseAPI {

  static sendAjax(callback, options) {
    BaseAPI.requestNumber = BaseAPI.requestNumber || 0;
    BaseAPI.requestNumber++;

    options.success = (response) => {
      if (response.error) {
        if (!response.data) {
          // Helper.showMessage(t("common.message.connection_error"), "error");
          console.log("connection_error");
        }
      }

      if (callback) {
        callback(response.status, response.data);
      }
    }

    options.error = (xhr) => {
      if (xhr.status == 422 || xhr.status == 401) {
        // Helper.showAlert(t("login.not_login"),
        //   t("common.message.request_login"),
        //   BaseAPI.handleRequestLogin);
        console.log("something wrong with login");
          return false;
      }

      //Helper.showMessage(t("common.message.connection_error"), "error");
      console.log("connection_error");

      if (callback) {
        callback(false);
      }
    }

    options.beforeSend = () => {
      $(".ajax-loading").css({
        visibility: "visible",
        zIndex: "99999",
        opacity: "100"
      });
    }

    options.complete = () => {
      BaseAPI.requestNumber--;

      if (BaseAPI.requestNumber == 0) {
        $(".ajax-loading").css({
          visibility: "hidden",
          zIndex: "-99999",
          opacity: "0"
        });
      }
    }

    options.url = "/api/" + options.url;
    $.ajax(options);
  }

}
