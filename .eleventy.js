module.exports = function(eleventyConfig) {
	eleventyConfig.setBrowserSyncConfig('../../css')
	eleventyConfig.addPassthroughCopy('app.js')
	return {
		passthroughFileCopy: true
	}
	// this tells eleventy to look for folder named css and copy it through to output folder
	// aka _site
};
