async function LoadImage(event) {
	const file = event.target.files[0]
	const imageUrl = URL.createObjectURL(file)

	const img = (await LoadImages([imageUrl]))[0]

	DrawImage(img, 0, 0, 800, 600)
}

async function main() {}
