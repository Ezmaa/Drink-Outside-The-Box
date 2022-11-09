const generateJokeEl = document.querySelector("#generate-joke");
const generateRecipeEl = document.querySelector("#generate-recipe");
const getRandomImage = document.querySelector("#random-image");

// function generateJoke() {

// };

// generate random drink and recipe 


const drinkButtonVariable = document.getElementById('drinkButton');
function generateRecipe() {
  let randomUrl = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

  fetch(randomUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const drinkNumber = data.drinks[0].idDrink;
      console.log(drinkNumber);

      // creates an array out of the object 
      const drinkarr = Object.entries(data.drinks[0]);
      console.log(drinkarr);

      // loops through the array to find ingredients used
      for (let i = 0; i < drinkarr.length; i++) {
        const key = drinkarr[i][0];
        const value = drinkarr[i][1];



        if (key.toLowerCase().includes('ingredient') && value) {
          console.log(key, value);

        };

      };
    });
}


// function getRandomImage() {
// };


// generateJokeEl.addEventListener('click', generateJoke());
generateRecipeEl.addEventListener('click', generateRecipe);