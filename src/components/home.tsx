import { useQuery } from "@tanstack/react-query";
import fetchRecipe from "../api/fetchRecipe";
import Searchbar from "./search";
import { useState } from "react";

export default function Home() {
 const [search, setSearch] = useState('')
 const {data, isLoading, isError, error} = useQuery ({
  queryKey: ['recipes'],
  queryFn: () => fetchRecipe(search)
 })

 if (is)
  
  return (
    <>
    <Searchbar onSearch={setSearch}/>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Home</h1>
        <p className="mt-4">This is the Home page</p>
      </div>
    </>
  );
}
