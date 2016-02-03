/**
 * Created by Agustin on 2/3/16.
 */
sap.ui.controller("ui5Test01", {

        onInit: function () {

            var oModel = new sap.ui.model.json.JSONModel();
            oModel.bindList();

        }
    }
);