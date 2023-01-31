const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('food');
const mealDetailsContent = document.querySelector('.food-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const options = {
	headers: {
		'X-RapidAPI-Key': 'dec28b4a39mshed5fa293c9ae449p1c92e0jsn62280ed3ee7a',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};
//`````````````````````````````````````````````````````````````````Event Listener
searchBtn.addEventListener('click', getMealList);

//*get meal list that matches the ingredient
function getMealList() {
	let searchInputTxt = document.getElementById('search-input').value.trim();
	fetch('https://themealdb.p.rapidapi.com/filter.php?i=chicken_breast', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
	
}


//```````````````````````````````````````````````````````````````````` Drink API
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