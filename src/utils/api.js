
const API_ID = "c7f70c80"
const APP_KEY = "eb5b5bf100252b9ebd8f6aa93574ee5e"

export function fetchRecipes(food=''){
    food = food.trim();
    return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
                .then((res) => res.json())
                .then(({hits}) => hits.map(({recipe}) => recipe))
}
