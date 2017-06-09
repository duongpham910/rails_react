import ReactDOM from "react-dom";
import Main from './Main'

$(document).on('ready', function() {
  $.ajaxSetup({
    headers: {
      "X-CSRF-TOKEN": $("meta[name='csrf-token']").attr("content")
    },
  });

  //ReactDOM.render(, document.getElementById('react-helper'));
  ReactDOM.render(<Main />, document.getElementById('react-wrapper'));
});

