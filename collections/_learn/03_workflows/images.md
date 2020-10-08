---
topic: Images
category: Workflows
level: [ intro ]
permalink: /:collection/workflows/:name
code_example: false
quiz: false
issues: true
---

# {{ page.topic }}

This page will provide important context for using images in your web projects.

## Choosing the right image format
The first choice you must make when selecting an image is if a <b>raster image</b> or <b>vector image</b> is best for your purposes.

### Raster image types
These formats are best for photographs and artwork, but do not scale well and, when scaled up, will result in jagged edges and blurry results. Since there are many raster formats, here's a brief list of them and their attributes:

- **JPG** or **JPEG** -- common choice for photos that can be optimized easily for the web
- **PNG** -- also valid for photos _and_ supports transparency
- **GIF** -- limited color palette, optimizes well, supports transparency _and_ animation
- **WebP** -- newer image format that aims to replace all of the above, but isn't fully supported by all browsers...yet

### Vector images
This format is best for simple geometric shapes, icons and charts and scales easily without any loss of quality. To use vector images in the browser, you must use the **SVG** format.

## Optimizing your images
In [this example](https://image-optimization-demo.glitch.me/){:target="_blank"}, both versions of the photo are being displayed at 600 pixels wide, but only the bottom image has been resized to that width and optimized. The first image, while appearing the same in the browser, is actually several times larger -- both in dimensions and, as a result, in file size.

The size of the images you include in your project can greatly affect the performance of your web pages, especially for users who are on mobile devices. You can take two steps to improve this aspect of your web pages for all users:

### 1. Resize your raster images
Before adding raster images to your web project, it is important to consider the largest size they will actually be displayed in the browser. Once you have identified the largest dimensions the image will be used at, you can resize the image using photo editing software to match those dimensions.

### 2. Optimize/compress your images
If your photo editing software has special options to save an image for the web, you can attempt to use those settings to optimize your raster images.

Alternately, you can use a browser-based optimizer like [TinyPNG](https://tinypng.com/), which optimizes PNGs and JPGs (despite the name).

SVGs can also be optimized and, for this, I recommend [SVGOMG](https://jakearchibald.github.io/svgomg/).
