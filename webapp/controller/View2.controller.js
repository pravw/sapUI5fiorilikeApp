sap.ui.define([
    
    "oft/fiori/nov/controller/BaseController"
], function(BaseController) {
    "use strict";

    return BaseController.extend("oft.fiori.nov.controller.View2", {
        onInit() {
        },




        onBack: function(){
            //  get object of parent for the both view:container control
            var oApp =  this.getView().getParent();
            //  call the method to navigate to another view by passing id
            oApp.to("idView1");
        }



    });
});