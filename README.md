# Cooking Recipe Recommendation System

## 1. Project Title
Cooking Recipe Recommendation System

## 2. Project Description
A web-based application that helps users discover and search for recipes based on their preferences. It recommends recipes using ingredient and cuisine data with filtering options.

## 3. Problem Statement
Many people struggle to decide what to cook with the ingredients they have at home. This project solves that problem by providing recipe recommendations based on available ingredients, meal type, and preparation time.

## 4. Features of the Project
- Search recipes by ingredients
- Filter recipes by meal type (Breakfast, Lunch, Dinner, Snack)
- Filter recipes by preparation time (15, 30, 60 minutes)
- Recipe cards with images and cooking details
- Responsive design for desktop and mobile
- Quick recipe recommendations

## 5. Technology Used
- Frontend: HTML5, CSS3, JavaScript (Vanilla)
- Backend/Data Processing: Python, Pandas, Regular Expressions
- Data Format: CSV (Cuisine data), JSON (Recipes data)

## 6. Project Structure
Cooking-recipe-recommendation-system/
├── index.html                 # Main landing/search page
├── details.html               # Recipe details page
├── styles.css                 # CSS styling
├── script.js                  # Main JavaScript logic
├── details.js                 # Details page JavaScript
├── cleandataset2.py           # Python data cleaning script
├── recipes.json               # Recipes database
├── cuisines.csv               # Cuisines data
├── image_for_cuisines/        # Recipe images folder
│   └── data/
└── README.md                  # Project documentation

## 7. Installation/Setup
1. Clone or download the project:
   ```bash
   git clone <repository-url>
   cd Cooking-recipe-recommendation-system
2. Install Python dependencies:

   pip install pandas

3. Run:

   python cleandataset2.py

   Open index.html directly in a browser, or

4. Run a local server:


   bash
   python -m http.server 8000
   Navigate to http://localhost:8000

## 8. Usage
Start from the landing page (index.html)

Search recipes by entering ingredients

Apply filters for meal type and cooking time

Browse recipe cards and click for full details

## 9. Sample Output
A recipe card showing:

Recipe name

Ingredients list

Cuisine type

Meal type

Prep time

Recipe image

Example:
Recipe: Spaghetti Aglio e Olio
Ingredients: Spaghetti, Garlic, Olive Oil, Chili Flakes
Cuisine: Italian
Meal Type: Dinner
Prep Time: 20 minutes

## 10. Future Improvements
User authentication and saved favorites

Nutritional information display

Recipe ratings and reviews

Dietary restriction filters

Recipe difficulty levels

Video cooking tutorials

Shopping list generation

Backend API integration

## 11. Author
Name:Ithabattula Kavya

Role: Developer

LinkedIn URL: https://www.linkedin.com/in/kavya-itabattula-31220332b
