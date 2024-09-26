document.addEventListener('DOMContentLoaded', () => {
	const urlParams = new URLSearchParams(window.location.search)
	const encodedText = urlParams.get('fileContent')

	if (encodedText) {
		// Корректное декодирование Base64 с поддержкой кириллицы
		const decodedText = decodeURIComponent(escape(atob(encodedText)))
		console.log('Декодированное содержимое файла: ', decodedText)
		let textInput = document.getElementById('noteText')
		read(decodedText)
		backFromCreate.style.display = 'none'
	}
})
