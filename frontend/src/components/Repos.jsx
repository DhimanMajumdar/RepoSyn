import Repo from "./Repo";

const Repos = () => {
  return (
    <div
      className={`lg:w-2/3 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border border-gray-800 text-white rounded-lg px-8 py-6`}
    >
      <ol className="relative border-s border-gray-200">
        <Repo />
        <Repo />
        <Repo />
      </ol>
    </div>
  );
};
export default Repos;
