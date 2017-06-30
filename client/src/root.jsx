import ReactDOM from "react-dom";
import router from "./router"

$(document).on('ready', function() {
  $.ajaxSetup({
    headers: {
      "X-CSRF-TOKEN": $("meta[name='csrf-token']").attr("content")
    },
  });

  //ReactDOM.render(, document.getElementById('react-helper'));
  ReactDOM.render(router, document.getElementById('react-wrapper'));
});

