var img

async function LoadImage(event) {
	const file = event.target.files[0]
	const imageUrl = URL.createObjectURL(file)

	img = (await LoadImages([imageUrl]))[0]

	DrawOriginal()
}

function DrawOriginal() {
	DrawImage(img, 0, 0, 800, 600)
}

function GetValue() {
	return document.getElementById("ValueInput").value
}

function RidBrightness() {
	let v = GetValue()

	let colors = PickAllColor()

	//per pixel
	for (let cnt = 0; cnt < colors.length; cnt++) {
		//get color
		let rgb = [colors[cnt][0], colors[cnt][1], colors[cnt][2]]

		//convert to hsv
		let hsv = Rgb2Hsv(rgb[0], rgb[1], rgb[2])

		//adjust brightness
		hsv[2] = v

		//re-convert to rgb
		let rgb_altered = Hsv2Rgb(hsv[0], hsv[1], hsv[2])

		//set color
		colors[cnt][0] = rgb_altered[0]
		colors[cnt][1] = rgb_altered[1]
		colors[cnt][2] = rgb_altered[2]
	}

	//deploy
	SetAllColor(colors)
}

function RidSaturation() {
	let s = GetValue()

	let colors = PickAllColor()

	//per pixel
	for (let cnt = 0; cnt < colors.length; cnt++) {
		//get color
		let rgb = [colors[cnt][0], colors[cnt][1], colors[cnt][2]]

		//convert to hsv
		let hsv = Rgb2Hsv(rgb[0], rgb[1], rgb[2])

		//adjust saturation
		hsv[1] = s

		//re-convert to rgb
		let rgb_altered = Hsv2Rgb(hsv[0], hsv[1], hsv[2])

		//set color
		colors[cnt][0] = rgb_altered[0]
		colors[cnt][1] = rgb_altered[1]
		colors[cnt][2] = rgb_altered[2]
	}

	//deploy
	SetAllColor(colors)
}
