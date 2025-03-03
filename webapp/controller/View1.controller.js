sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("oft.fiori.nov.controller.View1", {
        // onInit() {
        // },


        onShowMe: function(){
            //  get object of parent for the both view:container control
            var oApp =  this.getView().getParent();
            //  call the method to navigate to another view by passing id
            oApp.to("idView2");



        }
    });
});