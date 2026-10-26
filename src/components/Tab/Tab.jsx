import { useEffect, useState } from "react";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishListBooks from "../WishListBooks/WishListBooks";
import {
  getReadBooksFromLocalStorage,
  getWishlistBooksFromLocalStorage,
} from "../../utility/localStorage";

const Tab = ({ books, sortBy }) => {
  const [booksReadDisplay, setReadBooksDisplay] = useState([]);
  const [booksWishlistDisplay, setWishlistBooksDisplay] = useState([]);

  // Filter Read Books
  useEffect(() => {
    const storedReadBookIds = getReadBooksFromLocalStorage().map(Number);

    const booksRead = books.filter((book) =>
      storedReadBookIds.includes(Number(book.bookId)),
    );

    setReadBooksDisplay(booksRead);
  }, [books]);

  // Filter Wishlist Books
  useEffect(() => {
    const storedWishlistBookIds =
      getWishlistBooksFromLocalStorage().map(Number);

    const booksWishlist = books.filter((book) =>
      storedWishlistBookIds.includes(Number(book.bookId)),
    );

    setWishlistBooksDisplay(booksWishlist);
  }, [books]);

  // Sort Read Books
  const sortedReadBooks = sortBy
    ? [...booksReadDisplay].sort((a, b) => b[sortBy] - a[sortBy])
    : booksReadDisplay;

  // Sort Wishlist Books
  const sortedWishlistBooks = sortBy
    ? [...booksWishlistDisplay].sort((a, b) => b[sortBy] - a[sortBy])
    : booksWishlistDisplay;

  return (
    <div>
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-lg"
          aria-label="Books Read"
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid gap-6">
            {sortedReadBooks.map((book) => (
              <ReadBooks key={book.bookId} book={book} />
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-lg"
          aria-label="Wishlist Books"
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid gap-6">
            {sortedWishlistBooks.map((book) => (
              <WishListBooks key={book.bookId} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
