sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "oft/fiori/nov/model/models"],
    function (Controller, models) {
        return Controller.extend("oft.fiori.nov.BaseController", {

            initiateModels: function () {


                var oAppView = sap.ui.getCore().byId("idMyXml");
                var oModel = models.createFruitModel();
                oAppView.setModel(oModel);
                // act like setting model at entire app level


            }


        });


    }
);