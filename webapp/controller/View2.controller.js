sap.ui.define([
    
    "oft/fiori/nov/controller/BaseController",
    "sap/m/MessageBox",
    "sap/m/MessageToast"

], function(BaseController,MessageBox,MessageToast) {
    "use strict";

    return BaseController.extend("oft.fiori.nov.controller.View2", {
        onInit() {
        },

  onBack: function(){
            //  get object of parent for the both view:container control
            var oApp =  this.getView().getParent();
            //  call the method to navigate to another view by passing id
            oApp.to("idView1");
        },

onApprove: function(){
    MessageBox.confirm("did you really like this fruit",{
         onClose: function(status){
        if(status==="OK"){
            MessageToast.show("GOOD")


        }


         }

    })
}





    });
});