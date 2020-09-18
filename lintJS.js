const addToFavoritesButton = document
	.querySelector('.addToFavorites')
	.addEventListener('click', addToFavorites);
const apodId = document.querySelector('.apod-id').value;

async function addToFavorites() {
	const url = '/?handler=addToFavorites';
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			RequestVerificationToken: document.querySelector(
				'input[name="__RequestVerificationToken"]'
			).value,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(apodId)
	});

	response.json().then((numberOfChanges) => {
		console.log(numberOfChanges);
		if (numberOfChanges === 1) {
			addToFavoritesButton.style.display = 'none';
			const alert = document.querySelector('.alert');
			alert.style.display = 'block';
			setTimeout(() => {
				alert.style.display = 'none';
			}, 3000);
		}
	});
}

const showHdImageButton = document
	.querySelector('.showHdImage')
	.addEventListener('click', showHdImage);

async function showHdImage() {
	const url = '/?handler=showHdImage';

	const response = await fetch(url, {
		method: 'GET'
	});
}
