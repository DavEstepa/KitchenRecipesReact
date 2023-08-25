function RecipeItem({recipe}) {
    return (
        <div className="row">
            <div className="col">
                <h1>{recipe.nombre}</h1>
            </div>
        </div>
    );
}

export default RecipeItem;