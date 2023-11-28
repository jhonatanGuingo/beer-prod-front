import { createContext, useState } from "react";

const UserBreweries = createContext();
export default UserBreweries;

export function BreweriesProvider({children}) {
    const [breweries, setBreweries] = useState([]);
    const [valueSelect, setValueSelect] = useState("");

    return(
        <UserBreweries.Provider value={{breweries, setBreweries, valueSelect, setValueSelect}}>
            {children}
        </UserBreweries.Provider>
    )
}