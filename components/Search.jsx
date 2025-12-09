'use client'

import { useState } from 'react';
import { useDebounce } from "@/hooks/useDebounce"
import Image from 'next/image';
import SearchResult from './SearchResult';
import { useRouter } from 'next/navigation';

const Search = ({ docs }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [term, setTerm] = useState("");
  const router = useRouter();

  function handleChange(e) {
    const value = e.target.value;
    setTerm(value);
    doSearch(value);
  }

  // const doSearch = useDebounce((term) => {
  //   const found = docs.filter((doc) => {
  //     return doc.title.toLowerCase().includes(term.toLowerCase());
  //   });
  //   console.log(found);
  //   setSearchResult(found);
  // }, 500);
  const doSearch = useDebounce((term) => {
    if (!docs) return; // prevent error if docs undefined

    const found = docs.filter((doc) =>
      doc.title.toLowerCase().includes(term.toLowerCase())
    );
    console.log(found);
    setSearchResult(found);
  }, 500);


  function closeSearchResults(event) {
    event.preventDefault();
    router.push(event.target.href);
    setTerm("");
  }

  return (
    <>
      <div className="lg:block lg:max-w-md lg:flex-auto">
       <button
  type="button"
  className="
    hidden lg:flex
    w-full h-10
    items-center gap-2
    rounded-full
    border
    bg-white
    pl-3 pr-4
    text-sm text-zinc-500
    ring-1 ring-zinc-900/10
    transition hover:ring-zinc-900/20
    focus:outline-none focus:ring-2 focus:ring-blue-500
    dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20
  "
>
  <Image
    src="/search.svg"
    alt="Search"
    className="h-5 w-5"
    width={50}
    height={50}
  />
 <input
  type="text"
  value={term}
  placeholder="Search..."
  onChange={handleChange}
  className="
    flex-1
    bg-transparent
    text-sm text-gray-700 dark:text-gray-200
    placeholder-gray-400 dark:placeholder-gray-400
    focus:outline-none
  "
/>

</button>

      </div>
      {term && term.trim().length > 0 && (
        <SearchResult results={searchResult} term={term} closeSearchResults={closeSearchResults} />
      )}
    </>
  )
}

export default Search