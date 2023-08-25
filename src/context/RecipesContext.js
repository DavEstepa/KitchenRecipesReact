import React, { createContext, useState } from 'react'

export const RecipesContext = createContext();

const initialState = {
    recipes: [{ id: 1, nombre: 'Arroz Con Leche',
                ingredientes: [{ id: 1,
                                 nombre: 'leche' },
                               { id: 2,
                                 nombre: 'arroz' }],
                pasos: '' }
            ],
    selectedRecipe: null,
}

export const RecipesProvider = ({ children }) => {

    const [RecipeState, setRecipeState] = useState(initialState);


    return (
        <RecipesContext.Provider value={{
            RecipeState,
            setRecipeState
        }}>
            {children}
        </RecipesContext.Provider>
    )
}
