//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- Food API
const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('food');
const mealModal = document.getElementsByClassName('.food-details');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

//*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*Event Listener
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});

//*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ API Key
const options = {
	headers: {
		'X-RapidAPI-Key': 'dec28b4a39mshed5fa293c9ae449p1c92e0jsn62280ed3ee7a',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};

//*`-`-`-`-`-`-`-`-`-`-`-`-`-`-`-`-`-`-`-`-`- Results for list
function getMealList() {
	let searchInputTxt = document.getElementById('search-input').value.trim();
	fetch(`https://themealdb.p.rapidapi.com/filter.php?i=${searchInputTxt}`, options)
	.then(response => response.json())
	.then(data => {
		let html = "";
		if(data.meals){
			data.meals.forEach(food => {
				html += `
				<div class="food-item data-id="${food.idMeal}">
                    <div class="food-img">
                        <img src="${food.strMealThumb}" alt="food">
                    </div>
                    <div class="food-name">
                        <h3>${food.strMeal}</h3>
                        <a href="#" class="recipe-btn">Get Recipe</a>
                    </div>
                </div>
			    `;
			});
			mealList.classList.remove('notFound');
		} else{
			html="Sorry, we couldn't find a recipe with that ingredient :( , Check back for updates in the future :) .";
			mealList.classList.add('notFound');
		}
		mealList.innerHTML=html;
	})
	
}

//*-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Show recipe
function getMealRecipe(e){
	e.preventDefault();
	if(e.target.classList.contains('recipe-btn')){
		let mealItem = e.target.parentElement;
		fetch(`https://themealdb.p.rapidapi.com/lookup.php?i=${mealItem.dataset.idMeal}`, options)
		.then(response => response.json())
		.then(data => mealRecipeModal(data.food));
	}
}

//*----------------------------------------------------- Recipe Modal
function mealRecipeModal(food){
	console.log(food);
	const mealDetailsContent = document.createElement('div');
	mealDetailsContent.setAttribute('class', 'food-details-content');
	food = food[0];
	const html = `
	    <h2 class = "recipe-title">${food.strMeal}</h2>
	    <p class = "recipe-category">${food.strCategory}</p>
	    <div class = "recipe-instruct">
	        <h3>Instructions:</h3>
	        <p>${food.strInstructions}</p>
	    </div>
	    <div class = "recipe-meal-img">
	        <img src = "${food.strMealThumb}" alt="">
	    </div>
	    <div class="recipe-link">
	        <h3>Ingredients:</h3>
			<p>${food.strIngredient}</p>
	    </div>
	`;
	mealDetailsContent.innerHTML = html;
	console.log(mealDetailsContent);
	mealModal.append(mealDetailsContent);
	mealModal.setAttribute('class', 'showRecipe');
	
}
