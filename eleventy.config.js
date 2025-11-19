module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('css')
	return {
		passthroughFileCopy: true
	}
	// this tells eleventy to look for folder named css and copy it through to output folder
	// aka _site
};
