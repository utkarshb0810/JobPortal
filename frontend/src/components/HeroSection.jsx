import { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../../redux/jobSlice.js";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    naviagte("/browse");
  };
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-red-600 font-medium animate-bounce">
          The Leading Job Search Platform 🚀
        </span>

        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Land Your{" "}
          <span className="text-teal-600">Dream Job</span>
        </h1>
        <p>Empowering careers, connecting talent with opportunity.</p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs "
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-teal-600 hover:bg-blue-700"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
