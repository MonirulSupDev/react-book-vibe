const getReadBooksFromLocalStorage = () => {
  const getReadBooks = localStorage.getItem("read-books");
  return getReadBooks ? JSON.parse(getReadBooks) : [];
}

const saveReadBooksToLocalStorage = (id) => {
  const readBooks = getReadBooksFromLocalStorage(); // Retrieve the current list of read books from localStorage
  if (!readBooks.includes(id)) {
    readBooks.push(id);
    localStorage.setItem("read-books", JSON.stringify(readBooks));
  }
}

const getWishlistBooksFromLocalStorage = () => {
  const getWishlistBooks = localStorage.getItem("wishlist-books");
  return getWishlistBooks ? JSON.parse(getWishlistBooks) : [];
}

const saveWishlistBooksToLocalStorage = (id) => {
  const wishlistBooks = getWishlistBooksFromLocalStorage(); // Retrieve the current list of wishlist books from localStorage
  if (!wishlistBooks.includes(id)) {
    wishlistBooks.push(id);
    localStorage.setItem("wishlist-books", JSON.stringify(wishlistBooks));
  }
}

export { getReadBooksFromLocalStorage, saveReadBooksToLocalStorage, getWishlistBooksFromLocalStorage, saveWishlistBooksToLocalStorage };