/**
 * Converts RGB color values to HSV color model.
 *
 * @param {number} r - The red color value (0-255).
 * @param {number} g - The green color value (0-255).
 * @param {number} b - The blue color value (0-255).
 * @returns {number[]} - An array containing the hue (0, 360), saturation(0, 255), and value(0, 255) of the color.
 * @see {@link https://tomari.org/main/java/color/ccal.html}
 */
function Rgb2Hsv(r, g, b) {
	//https://tomari.org/main/java/color/ccal.html

	//hue
	let h = 0
	let _max = Math.max(r, g, b)
	let _min = Math.min(r, g, b)
	if (r == g && g == b) {
		h = 0
	} else if (r == _max) {
		h = (60 * (g - b)) / (_max - _min)
	} else if (g == _max) {
		h = (60 * (b - r)) / (_max - _min) + 120
	} else if (b == _max) {
		h = (60 * (r - g)) / (_max - _min) + 240
	}

	//saturation
	let s = 0
	if (_max != 0) {
		s = (_max - _min) / _max
	} else {
		s = 0
	}

	//brightness
	let v = _max

	return [h, s, v]
}

/**
 * Converts HSV color values to RGB color model.
 *
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-255).
 * @param {number} v - The value/brightness value (0-255).
 * @returns {number[]} - An array containing the red (0-255), green (0-255), and blue (0-255) color values.
 * @see {@link https://tomari.org/main/java/color/ccal.html}
 */
function Hsv2Rgb(h, s, v) {
	//https://tomari.org/main/java/color/ccal.html

	let _max = v
	let _min = _max - (s / 255.0) * max

	if (0 <= h && h <= 60) {
		r = _max
		g = ((_max - _min) * h) / 60 + _min
		b = _min
	} else if (60 <= h && h <= 120) {
		r = ((_max - _min) * (120 - h)) / 60 + _min
		g = _max
		b = _min
	} else if (120 <= h && h <= 180) {
		r = _min
		g = _max
		b = ((_max - _min) * (h - 120)) / 60 + _min
	} else if (180 <= h && h <= 240) {
		r = _min
		g = ((_max - _min) * (240 - h)) / 60 + _min
		b = _max
	} else if (240 <= h && h <= 300) {
		r = ((_max - _min) * (h - 240)) / 60 + _min
		g = _min
		b = _max
	} else if (300 <= h && h <= 360) {
		r = _max
		g = _min
		b = ((_max - _min) * (360 - h)) / 60 + _min
	}

	return [r, g, b]
}
