sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, ) {
    "use strict";

    return {
      
        createFruitModel: function () {
            var oModel = new JSONModel();
            oModel.loadData("model/mockData/fruits.json");
            return oModel;
        }
    };

});

