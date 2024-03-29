var APP = APP || {};

APP = {
  common: {
    init: function() {

    }
  },
  users: {
    init: function() {

    },
    "new": function() {
      APP.home.create();
    },
    create: function() {

    }
  }
}
UTIL = {
  exec : function(controller, action){
    var ns = APP,
    action = (action === undefined) ? "init" : action;

    if (controller !== "" &&
      ns[controller] &&
      typeof ns[controller][action] === "function" ) {
      ns[controller][action]();
    }
  },
  init: function() {
    var body = document.body,
    controller = body.getAttribute("data-controller"),
    action = body.getAttribute("data-action");
    UTIL.exec("common");
    UTIL.exec(controller);
    UTIL.exec(controller, action);
  }
};

//document.observe("dom:loaded", UTIL.init); //prototype
$(document).ready(UTIL.init); //jquery

