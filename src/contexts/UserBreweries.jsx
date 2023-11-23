import { createContext, useState } from "react";

const UserBreweries = createContext();
export default UserBreweries;

export function BreweriesProvider({children}) {
    const [breweries, setBreweries] = useState([]);

    return(
        <UserBreweries.Provider value={{breweries, setBreweries}}>
            {children}
        </UserBreweries.Provider>
    )
}