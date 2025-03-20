sap.ui.define([
    "sap/ui/core/UIComponent"
   
], function (UIComponent) {
    "use strict";

    return UIComponent.extend("oft.fiori.nov.Component", {
        metadata: {
            manifest: "json",
    
        },

        init: function() {
            // call the base component's init function
          sap.ui.core.UIComponent.prototype.init.apply(this);
          var oRouter = this.getRouter();
          oRouter.initialize();

         
        },

//         createContent: function(){
            
// var oPraveen = new sap.ui.view("idMyXml",{
//     viewName:"oft.fiori.nov.view.App",
//     type:sap.ui.core.mvc.ViewType.XML
// });


// var oView1 = new sap.ui.view("idView1",{
// viewName:"oft.fiori.nov.view.View1",
// type:sap.ui.core.mvc.ViewType.XML

// });

// var oView2 = new sap.ui.view("idView2",{
// viewName:"oft.fiori.nov.view.View2",
// type:sap.ui.core.mvc.ViewType.XML

// });

// var oApp = oPraveen.byId("idApp");
// oApp.addMasterPage(oView1).addDetailPage(oView2);
// // oPraveen.placeAt("content");
// return oPraveen;

//         },

        destroyContent:function(){



        }


    });
});