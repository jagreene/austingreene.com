module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			react: {
				files: ['react_components/*/*.jsx'],
				tasks: ['browserify']
			}
		},

		browserify: {
			options: {
				transform: [ require('grunt-react').browserify  ]

			},
			home: {
				src: ['react_components/home/*.jsx'],
				dest: 'public/javascripts/home.js'
			},
			gallery: {
				src: ['react_components/gallery/*.jsx'],
				dest: 'public/javascripts/gallery.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
	'browserify'
	]);
};
