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
