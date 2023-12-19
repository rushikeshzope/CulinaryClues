// var viewRecipeButton = document.getElementById('recipebutton');
// var modal = document.getElementById('modal');

// viewRecipeButton.addEventListener('click', function() {
//     fetchData(); 
//     modal.style.display = 'block';
// });

// var cancelButton = document.getElementById('cancelButton');

// cancelButton.addEventListener('click', function() {
//     modal.style.display = 'none';
// });


// const searchBar = document.getElementById('searchBar');

// searchBar.addEventListener('input', function() {
//     const searchTerm = searchBar.value.trim();

//     if (searchTerm !== '') {
//         fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
//             .then(response => response.json())
//             .then(data => {
//                 const searchedSection = document.getElementById('searchedSection');
//                 searchedSection.innerHTML = ''; 

//                 data.meals.forEach(meal => {
//                     const container = document.createElement('div');
//                     container.classList.add('container');

//                     const img = document.createElement('img');
//                     img.src = meal.strMealThumb;
//                     img.alt = meal.strMeal;
//                     img.classList.add('foodSearched');

//                     const p = document.createElement('p');
//                     p.textContent = meal.strMeal;
//                     p.classList.add('foodnameSearched');

//                     container.appendChild(img);
//                     container.appendChild(p);
//                     searchedSection.appendChild(container);
//                 });
//             })
//             .catch(error => console.error('Error fetching searched data:', error));
//     }
// });

// async function fetchData(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         const container = document.getElementById('containerRandomItems');
//         const h1Element = container.querySelector('h1');
//         const imgElement = container.querySelector('img');
//         h1Element.textContent = data.meals[0].strMeal;
//         imgElement.src = data.meals[0].strMealThumb;
//         imgElement.alt = data.meals[0].strMeal;

//         const modalTitle = document.getElementById('foodNameModal');
//         const modalImg = document.getElementById('foodModal');
//         const ingredientList = document.getElementById('list');

//         modalTitle.textContent = data.meals[0].strMeal;
//         modalImg.src = data.meals[0].strMealThumb;
//         modalImg.alt = data.meals[0].strMeal;

//         ingredientList.innerHTML = '';

//         for (let i = 1; i <= 20; i++) {
//             const ingredient = data.meals[0]['strIngredient' + i];
//             const measure = data.meals[0]['strMeasure' + i];
//             if (ingredient && measure) {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = `${measure} ${ingredient}`;
//                 ingredientList.appendChild(listItem);
//             }
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// window.addEventListener('load', function() {
//     fetchData('https://www.themealdb.com/api/json/v1/1/random.php');
// });

// searchBar.addEventListener('input', function() {
//     const searchTerm = searchBar.value.trim();

//     if (searchTerm !== '') {
//         fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
//             .then(response => response.json())
//             .then(data => {
//                 const searchedSection = document.getElementById('searchedSection');
//                 searchedSection.innerHTML = ''; 

//                 data.meals.forEach(meal => {
//                     const container = document.createElement('div');
//                     container.classList.add('container');

//                     const img = document.createElement('img');
//                     img.src = meal.strMealThumb;
//                     img.alt = meal.strMeal;
//                     img.classList.add('foodSearched');

//                     const p = document.createElement('p');
//                     p.textContent = meal.strMeal;
//                     p.classList.add('foodnameSearched');

//                     container.appendChild(img);
//                     container.appendChild(p);
//                     searchedSection.appendChild(container);
//                 });

//                 const hiddenSection = document.getElementById('hiddenSection');
//                 hiddenSection.style.display = 'block';
//             })
//             .catch(error => console.error('Error fetching searched data:', error));
//     } else {
//         const hiddenSection = document.getElementById('hiddenSection');
//         hiddenSection.style.display = 'none';
//     }
// });

