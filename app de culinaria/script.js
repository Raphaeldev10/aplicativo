
let recipes = [];


function addRecipe(event) {
    event.preventDefault(); 

   
    const name = document.getElementById("recipeName").value.trim();
    const ingredients = document.getElementById("recipeIngredients").value.trim();
    const instructions = document.getElementById("recipeInstructions").value.trim();

  
    if (!name || !ingredients || !instructions) {
        alert("Por favor, preencha todos os campos antes de adicionar a receita.");
        return;
    }

   
    recipes.push({
        name,
        ingredients: ingredients.split(",").map(ing => ing.trim()),
        instructions
    });

   
    document.getElementById("recipeForm").reset();

  
    displayRecipes();

    alert("Receita adicionada com sucesso!");
}


function searchRecipe() {
    const searchTerm = document.getElementById("searchTerm").value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm)
    );

    displayRecipes(filteredRecipes);
}
 
function displayRecipes(filteredRecipes = recipes) {
    const recipeDisplay = document.getElementById("recipeDisplay");
    recipeDisplay.innerHTML = ""; 

    if (filteredRecipes.length === 0) {
        recipeDisplay.innerHTML = "<li>Nenhuma receita encontrada.</li>";
        return;
    }

    filteredRecipes.forEach(recipe => {
        const li = document.createElement("li");

        li.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredientes:</strong> ${recipe.ingredients.join(", ")}</p>
            <p><strong>Instruções:</strong> ${recipe.instructions}</p>
        `;

        recipeDisplay.appendChild(li);
    });
}


displayRecipes();
