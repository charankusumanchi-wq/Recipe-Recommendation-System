document.addEventListener("DOMContentLoaded", function () {

    let recipes = [];

    const startBtn = document.getElementById("startBtn");
    const landingPage = document.getElementById("landingPage");
    const mainPage = document.getElementById("mainPage");
    const submitBtn = document.getElementById("submitBtn");


    // ✅ Start Button
    if (startBtn && landingPage && mainPage) {
        startBtn.addEventListener("click", function () {
            landingPage.style.display = "none";
            mainPage.style.display = "block";
        });
    }

    // ✅ Load recipes.json
    fetch("recipes.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("JSON file not found");
            }
            return response.json();
        })
        .then(data => {
            recipes = data;
            console.log("Recipes Loaded:", recipes.length);
            // Optional: display all recipes initially
            displayRecipes(recipes);
        })
        .catch(error => {
            console.error("Error loading JSON:", error);
        });

    // ✅ Helper: Extract numeric prep time
    function getPrepTime(recipe) {
        if (!recipe.prep_time) return 0;
        const match = recipe.prep_time.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
    }

    // ✅ Submit Filter
    if (submitBtn) {
        submitBtn.addEventListener("click", function () {

            const searchValue = document.getElementById("searchInput").value.toLowerCase();
            const timeValue = document.getElementById("timeFilter").value;
            const mealTypeValue = document.getElementById("mealTypeFilter").value.toLowerCase();

            const filteredRecipes = recipes.filter(recipe => {

                // Ingredients search
                const ingredientsText = Array.isArray(recipe.ingredients)
                    ? recipe.ingredients.join(" ")
                    : recipe.ingredients || "";
                const matchesIngredient = ingredientsText.toLowerCase().includes(searchValue);

                // Prep time filter
                const prepTime = getPrepTime(recipe);
                const matchesTime = timeValue === "all" || prepTime <= parseInt(timeValue);

                // Meal type filter
                const course = recipe.course ? recipe.course.toLowerCase() : "";
                const matchesMealType = mealTypeValue === "all" || course.includes(mealTypeValue);

                return matchesIngredient && matchesTime && matchesMealType;
            });

            displayRecipes(filteredRecipes);
        });
    }

    // ✅ Display Recipes
    function displayRecipes(recipeList) {
        const container = document.getElementById("recipeContainer");
        container.innerHTML = "";

        if (!recipeList || recipeList.length === 0) {
            container.innerHTML = "<p>No recipes found.</p>";
            return;
        }

        recipeList.forEach(recipe => {
            const card = document.createElement("div");
            card.classList.add("recipe-card");

            const imageUrl = recipe.image || recipe.image_url || "https://via.placeholder.com/400x300?text=No+Image";

            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="content">
                    <h3>${recipe.name}</h3>
                    <p><strong>Meal Type:</strong> ${recipe.course || "Not Available"}</p>
                    <p><strong>Cooking Time:</strong> ${recipe.prep_time || "N/A"} mins</p>
                    <button onclick="viewDetails('${recipe.name.replace(/'/g, "\\'")}')">
                        View Details
                    </button>
                </div>
            `;

            container.appendChild(card);
        });
    }

});

// ✅ View Details Page
function viewDetails(recipeName) {
    localStorage.setItem("selectedRecipe", recipeName);
    window.location.href = "details.html";
}

