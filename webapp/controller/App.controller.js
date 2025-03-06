sap.ui.define([
  // "sap/ui/core/mvc/Controller"
  "oft/fiori/nov/controller/BaseController"
], function(Controller)  { 
  "use strict";

  return Controller.extend("oft.fiori.nov.controller.App", {
      onInit: function() {
       this.initiateModels();
      }
  });
});