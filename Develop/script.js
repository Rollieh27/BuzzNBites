//* Food API
const options = {
	headers: {
		'X-RapidAPI-Key': 'dec28b4a39mshed5fa293c9ae449p1c92e0jsn62280ed3ee7a',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=chicken', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//* Drink API
const option = {
	headers: {
		'X-RapidAPI-Key': 'dec28b4a39mshed5fa293c9ae449p1c92e0jsn62280ed3ee7a',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

fetch('https://the-cocktail-db.p.rapidapi.com/filter.php', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));