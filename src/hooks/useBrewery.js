import axios from "axios";
import useSWR from "swr";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;
export default function useBrewery(){
    const {userData} = useContext(UserContext)
    const token = userData.token;
    const { data, error, isLoading } = useSWR('/brewery', (url) =>
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => 
        res.data),
        {
            revalidateOnMount: true,
          }
        
  );
  
  return {
    fetchedBreweries: data,
    isLoading,
    isError: error,

  }
}