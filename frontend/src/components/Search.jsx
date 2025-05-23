import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import toast from "react-hot-toast"; // ✅ Add this

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate GitHub user
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error("Invalid username");
      }

      onSearch(e, username);
    } catch (error) {
      toast.error("🚫 Invalid GitHub username. Try again!");
    }
  };

  return (
    <form
      className="max-w-xl mx-auto p-2"
      onSubmit={handleSubmit} // ✅ Use local handler
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center z-10 ps-3 pointer-events-none">
          <IoSearch className="w-5 h-5" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white focus:ring-blue-500 focus:border-blue-500 bg-transparent focus:bg-transparent "
          placeholder="i.e. viratkohli"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="text-white cursor-pointer absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  bg-gradient-to-r from-cyan-900 to-blue-900 hover:scale-95 active:scale-90 transition-all duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
