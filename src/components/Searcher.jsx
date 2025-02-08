import Fuse from "fuse.js";
import { useState } from "react";

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
  keys: ["frontmatter.title", "frontmatter.description", "frontmatter.slug"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({ searchList }) {
  // User's input
  const [query, setQuery] = useState("");

  const fuse = new Fuse(searchList, options);

  // Set a limit to the posts: 5
  const posts = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  return (
    <div class="">
      <label
        htmlFor="search"
        className="sr-only mb-2 font-medium text-gray-900 text-sm dark:text-white"
      >
        Search
      </label>
      <div className="relative ">
        <div className="pointer-events-none absolute inset-y-0 left-0 my-3 flex items-center pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="black"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx={10} cy={10} r={7}></circle>
            <line x1={21} y1={21} x2={15} y2={15}></line>
          </svg>
        </div>
        <div class="">
          <input
            type="text"
            id="search"
            value={query}
            onChange={handleOnSearch}
            class="my-4 block w-full rounded-lg border-2 border-gray-800 
                p-2 
                pl-10 text-gray-400
                text-sm 
                focus:border-gray-700
                focus:outline-none
                focus:ring-gray-700
                lg:w-3/4"
            placeholder="Search for anything..."
          />
        </div>
      </div>

      {query.length > 1 && (
        <div className="m-4 text-gray-400">
          Found {posts.length} {posts.length === 1 ? "result" : "results"} for '
          {query}'
        </div>
      )}

      <ul className="m-4 list-none">
        {posts &&
          posts.map((post) => (
            <li className="py-2">
              <a
                className="text-black underline-offset-2 text-lg hover:text-amber-500 hover:underline"
                href={`/post/${post.frontmatter.slug}`}
              >
                {post.frontmatter.title}
              </a>
              <p className="text-gray-400 text-sm">
                {post.frontmatter.description}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Search;
