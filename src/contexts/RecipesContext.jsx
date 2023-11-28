import { createContext, useState } from "react";

const RecipesContext = createContext();
export default RecipesContext;

export function RecipesProvider({children}) {
    const [recipes, setRecipes] = useState([]);

    return(
        <RecipesContext.Provider value={{recipes, setRecipes}}>
            {children}
        </RecipesContext.Provider>
    )
}