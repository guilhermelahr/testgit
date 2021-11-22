/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test/test_git_parallel/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});