// Create a Vue instance

var demo = new Vue({

	// A DOM element to mount our initial view model
	el: '#main',

	// Define some data and properties
	data: {
		show_tooltip: true,
		text_content: 'Hello world!'
	},

	// Define some functions (functions go in methods)
	methods: {
		toggleTooltip: function() {
			this.show_tooltip = !this.show_tooltip;
		}
	}


});