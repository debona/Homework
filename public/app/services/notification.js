'use strict';

angular.module('homework').factory('notificationCenter', function() {
	var allowedTypes = ['success', 'info', 'warning', 'danger'];
	var defaultType = 'info';

	this.type = '';
	this.message = '';
	this.show = false; // FIXME refactor that, should avoid to set the state with a boolean

	this.display = function display(message, type) {
		this.type = type || defaultType;
		this.message = message;
		this.show = true;
	};
	this.dismiss = function dismiss() {
		this.show = false;
	};

	return this;
});
