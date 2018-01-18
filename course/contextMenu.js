(function() {
 
  "use strict";
 
  var taskItems = document.querySelectorAll("cl");

  for ( var i = 0, len = taskItems.length; i < len; i++ ) {
    var taskItem = taskItems[i];
    contextMenuListener(taskItem);
  }
 
  function contextMenuListener(el) {
    el.addEventListener( "contextmenu", function(e) {
      console.log(e, el);
    });
  }
 
})();