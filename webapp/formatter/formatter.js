sap.ui.define(
    [],
    function(){
        return{
         setStatus:function(status){
         switch (status){
            case "Registered":
            return "Success";
            case "out of Market":
            return "Warning";
            case "Not Registered":
            return "Error";
           default:
         }

         }
        };

     });