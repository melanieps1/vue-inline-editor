// Create a Vue instance

var demo = new Vue({

	// A DOM element to mount our initial view model
	el: '#main',

	// Define some data and properties
	data: {
		show_tooltip: false,
		text_content: 'Click me to edit my text'
	},

// // Example: Puts together different parts of a form (first/middle/last name that were separate input boxes)
// 	computed: {
// 		text_with_smilies: function() {
// 			return ":) " + this.text_content + " :)";
// 		}
// 	},

	// Define some functions (functions go in methods)
	methods: {
		
		toggleTooltip: function() {
			this.show_tooltip = !this.show_tooltip;
		},

		hideTooltip: function() {
			this.show_tooltip = false;
		}

	}


});