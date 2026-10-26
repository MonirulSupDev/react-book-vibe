import { useLoaderData } from "react-router";
import SortDropdown from "../SortDropdown/SortDropdown";
import Tab from "../Tab/Tab";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
  const books = useLoaderData();
  const [sortBy, setSortBy] = useState("");
  const handleSortBy = (key) => {
    setSortBy(key);
  };

  return (
    <div className="pb-20">
      <Helmet>
        <title>BookVibe | Listed Books</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4 text-center bg-sky-50 py-4 rounded-xl">
        Listed Books
      </h2>
      <div className="flex justify-center mb-4">
        <SortDropdown onSort={handleSortBy} />
      </div>
      <Tab books={books} sortBy={sortBy} />
    </div>
  );
};

export default ListedBooks;
