module.exports = function(eleventyConfig) {
	
	eleventyConfig.addPassthroughCopy({ "src/public": "/"})
	return {
		passthroughFileCopy: true,
		dir: {
			input: "src",
			output: "_site",
		}
	}
	// this tells eleventy to look for folder named css and copy it through to output folder
	// aka _site
};
