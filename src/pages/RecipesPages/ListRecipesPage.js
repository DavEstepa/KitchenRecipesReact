import React, { useContext } from "react";

import RecipeItem from "../../components/RecipesPage/RecipeItem"
import { RecipesContext } from "../../context/RecipesContext";

function ListRecipesPage() {
    const { RecipeState } = useContext(RecipesContext)
    console.log(RecipeState)
    const recipe = RecipeState.recipes[0]
    const itemsToRender = []
    for (let i = 1; i <= 20; i++) {
        itemsToRender.push(<RecipeItem key={i} recipe={recipe} />);
    }
    return (
        <div className="container">
            {/* {
        RecipeState.recipes.map((recipe => (
            <RecipeItem key={recipe.id} recipe={recipe} />
        )))} */}
            {itemsToRender}
        </div>);
}

export default ListRecipesPage;