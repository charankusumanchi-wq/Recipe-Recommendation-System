document.addEventListener("DOMContentLoaded", function () {

    const recipeName = localStorage.getItem("selectedRecipe");
    console.log("Selected recipe:", recipeName);

    fetch("recipes.json")
        .then(response => response.json())
        .then(data => {

            // Find recipe (case-insensitive safe match)
            const recipe = data.find(r =>
                r.name.trim().toLowerCase() === recipeName.trim().toLowerCase()
            );

            const container = document.getElementById("detailsContainer");

            if (!recipe) {
                container.innerHTML = "<h2>Recipe not found.</h2>";
                return;
            }

            // Display recipe details
            container.innerHTML = `
                <div class="detail-page">

                    <div class="detail-title-box">
                        <h1>${recipe.name}</h1>
                        <div class="time-badge">
                            ⏱ ${recipe.prep_time} mins
                        </div>
                    </div>

                    <div class="detail-image-box">
                        <img src="${recipe.image}" alt="${recipe.name}">
                    </div>

                    <div class="detail-grid">

                        <div class="detail-box">
                            <h2>Description</h2>
                            <p>${recipe.description}</p>
                        </div>

                        <div class="detail-box">
                            <h2>Ingredients</h2>
                            <ul>
                                ${recipe.ingredients
                                    .split("\n")
                                    .map(item => item.trim())
                                    .filter(item => item.length > 0)
                                    .map(item => `<li>${item}</li>`).join("")}
                            </ul>
                        </div>

                        <div class="detail-box full-width">
                            <h2>Preparation Steps</h2>
                            <ul>
                                ${
                                    recipe.instructions
                                        .split(".")
                                        .map(step => step.trim())
                                        .filter(step => step.length > 0)
                                        .map(step => `<li>${step}.</li>`)
                                        .join("")
                                }
                            </ul>
                        </div>

                    </div>

                    <div class="detail-footer">
                        <button onclick="goBack()">← Back</button>
                    </div>

                </div>
            `;
        })
        .catch(error => {
            console.error("Error loading details:", error);
        });

});

function goBack() {
    window.location.href = "index.html";
}
