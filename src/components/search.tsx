import { Search } from "lucide-react";
import { useState } from "react";
import type { ChangeEvent } from "react";

type searchProp = {
    onSearch: (value: string) => void;
}

export default function Searchbar({onSearch}: searchProp) {
  const [search, setSearch] = useState("");

  const handleSeach = () => {
    onSearch(search);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    // onSearch(value);
  };


  return (
    <>
      <div className="flex items-center justify-center max-w-lg  bg-amber-800/10 m-3 mx-auto rounded-full">
        <label className="bg-amber-900/35 p-2 rounded-l-full w-13 flex justify-center cursor-pointer" onClick={handleSeach}>
          <Search size={28} color="rgb(69, 26, 3)" />
        </label>
        <input
          type="text"
          placeholder="Search"
          className="text-lg outline-none bg-transparent w-full p-1.5"
          value={search}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && handleSeach()}
        />
      </div>
    </>
  );
}
