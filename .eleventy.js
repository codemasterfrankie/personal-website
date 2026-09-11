const { eleventyImgTransformPlugIn } =
	require('@11ty/eleventy-img');

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

	// image optimization plugin
	eleventyConfig.addPlug(eleventyImageTransformPlugin, {
		formats: ["webp", "svg"],
		widths: ["1280", null],
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
		svgShortCircuit: true,
		
	});
};
