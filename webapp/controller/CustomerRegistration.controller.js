sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel"

], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("com.swcc.it.SSP_IT.controller.CustomerRegistration", {
		onInit: function () {

			this.oRouter = this.getRouter();

		},
		onback: function () {
			//this.getOwnerComponent().getTargets().display("LandingView");

		},
		onSubmit: function () {

			this.getOwnerComponent().getRouter().navTo("SlaCreation");

		}
	})
})