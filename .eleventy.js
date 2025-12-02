module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('app.js')
	eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});
	// this tells eleventy to look for folder named css and copy it through to output folder
	// aka _site
};
