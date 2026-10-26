import { useLoaderData, useParams } from "react-router";
import {
  getReadBooksFromLocalStorage,
  getWishlistBooksFromLocalStorage,
  saveReadBooksToLocalStorage,
  saveWishlistBooksToLocalStorage,
} from "../../utility/localStorage";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const book = books.find((b) => b.bookId === parseInt(bookId));
  const {
    image,
    bookName,
    author,
    review,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleRead = () => {
    const storedReadBooks = getReadBooksFromLocalStorage();
    const storedWishlistBooks = getWishlistBooksFromLocalStorage();

    // Check whether the book is already in Read Books
    if (storedReadBooks.includes(bookId)) {
      toast.info("This book is already added to Read!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Check whether the book is already in Wishlist
    if (storedWishlistBooks.includes(bookId)) {
      toast.info("This book is already added to wishlist!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    saveReadBooksToLocalStorage(bookId);

    toast.success("Book marked as Read!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleWishlist = () => {
    const storedWishlistBooks = getWishlistBooksFromLocalStorage();
    const storedReadBooks = getReadBooksFromLocalStorage();

    // Check whether the book is already in Wishlist
    if (storedWishlistBooks.includes(bookId)) {
      toast.info("This book is already added to wishlist!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Check whether the book is already in Read Books
    if (storedReadBooks.includes(bookId)) {
      toast.info("This book is already added to Read!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    saveWishlistBooksToLocalStorage(bookId);

    toast.success("Book added to wishlist!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="grid lg:grid-cols-2 py-24 gap-10 lg:gap-12 px-4 lg:px-0">
      <Helmet>
        <title>{`Details of ${bookName}`}</title>
      </Helmet>
      <div className="flex justify-center items-center p-18.5 bg-[#131313]/5 rounded-2xl">
        <img src={image} alt={bookName} className="shadow-lg w-auto h-auto" />
      </div>
      <div className="p-4">
        <h2 className="text-[40px] text-[#131313] font-bold font-playfair-display">
          {bookName}
        </h2>
        <p className="text-xl font-medium text-[#131313]/80">by : {author}</p>
        <div className="h-px bg-[#131313]/15 my-6"></div>
        <p className="text-xl font-medium text-[#131313]/80">{category}</p>
        <div className="h-px bg-[#131313]/15 my-6"></div>
        <p className="text-base text-[#131313]/70">
          <strong className="text-[#131313]">Review : </strong>
          {review}
        </p>
        <p className=" text-base mt-6">
          <strong className="text-[#131313]">Tags &nbsp;&nbsp;</strong>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-sky-50 text-green-600 font-medium px-5 py-2 rounded-full mr-2"
            >
              #{tag}
            </span>
          ))}
        </p>
        <div className="h-px bg-[#131313]/15 my-6"></div>
        <dl className="grid grid-cols-[160px_1fr] gap-y-4 gap-x-14 mt-6 text-base">
          <dt className="text-[#131313]/70">Number of Pages:</dt>
          <dd className="font-semibold text-[#131313]">{totalPages}</dd>

          <dt className="text-[#131313]/70">Publisher:</dt>
          <dd className="font-semibold text-[#131313]">{publisher}</dd>

          <dt className="text-[#131313]/70">Year of Publishing:</dt>
          <dd className="font-semibold text-[#131313]">{yearOfPublishing}</dd>

          <dt className="text-[#131313]/70">Rating:</dt>
          <dd className="font-semibold text-[#131313]">{rating}</dd>
        </dl>
        <div className="flex gap-4 mt-6">
          <button
            className="secondary-btn text-[#131313] bg-transparent border border-[#131313]/30"
            onClick={handleRead}
          >
            Read
          </button>
          <button className="secondary-btn" onClick={handleWishlist}>
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
