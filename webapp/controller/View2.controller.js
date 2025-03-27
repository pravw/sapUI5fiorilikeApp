sap.ui.define([
    
    "oft/fiori/nov/controller/BaseController",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "oft/fiori/nov/formatter/formatter"

], function(BaseController,MessageBox,MessageToast,Formatter) {
    "use strict";

    return BaseController.extend("oft.fiori.nov.controller.View2", {
        onInit: function() {
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.attachRoutePatternMatched(this.herculis,this);
        },
        herculis: function(oEvent){
            // debugger;

            // while select the back button it will take to back selected stage
            //   get me the route of index which item was selected
            var selectedIndex = oEvent.getParameter("arguments").jump;
           
           // get the path
             var sPath = "/fruits/"+selectedIndex;

             // bind element
             this.getView().bindElements(sPath);
               
        },


formatter: Formatter,

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
},

onValueHelp: function(){


var oFragment =  new sap.ui.xmlfragment("oft.fiori.nov.fragments.spiderman");
this.getView().addDependent(oFragment);
oFragment.bindAggregation("items",{
    path:"/cities",
    template: new sap.m.StandardListItem( {
        description:"{cityName}",
        title:"{famous}"
 })



});





    oFragment.open();
}






    });
});