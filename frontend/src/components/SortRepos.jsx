const SortRepos = () => {
  return (
    <div className="mb-2 flex justify-center lg:justify-end">
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white`}
      >
        Most Recent
      </button>
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white`}
      >
        Most Stars
      </button>
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white`}
      >
        Most Forks
      </button>
    </div>
  );
};
export default SortRepos;
