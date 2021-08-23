module.exports = {
	mode: 'jit',
	purge: [
		'header.php',
		'footer.php',
		'index.php',
		'single.php',
		'page.php'
	],
	darkMode: false, // or 'media' or 'class'
	theme: {},
	variants: {
	    extend: {},
	}
};