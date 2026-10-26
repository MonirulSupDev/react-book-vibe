import { GrLocation } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { Link } from "react-router";

const WishListBooks = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  return (
    <div className="card lg:card-side bg-base-100 border border-[#131313]/15 hover:shadow-sm p-6 gap-6 items-center rounded-2xl">
      <figure className="bg-[#131313]/5 size-60 flex items-center justify-center rounded-2xl p-7">
        <img src={image} alt={bookName} className="w-auto shadow-lg" />
      </figure>
      <div className="card-body items-start p-0 gap-4">
        <h2 className="card-title text-2xl text-[#131313] font-bold font-playfair-display">
          {bookName}
        </h2>
        <p className="text-base font-medium text-[#131313]/80">By : {author}</p>
        <div className="flex items-center gap-4 text-base">
          <p>
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
          <p className="flex gap-2 items-center text-[#131313]/80">
            <GrLocation className="size-5" /> Year of Publishing:{" "}
            {yearOfPublishing}
          </p>
        </div>
        <div className="flex items-center gap-4 text-base text-[#131313]/60">
          <p className="flex gap-2 items-center">
            <HiOutlineUsers className="size-5" /> Publisher: {publisher}
          </p>
          <p className="flex gap-2 items-center">
            <HiOutlineDocumentChartBar className="size-5" /> Page {totalPages}
          </p>
        </div>
        <div className="h-px w-full bg-[#131313]/15"></div>
        <div className="flex gap-3">
          <span className="bg-sky-100 text-sky-500 py-1.5 px-5.25 rounded-full text-base">
            Category: {category}
          </span>
          <span className="bg-orange-100 text-orange-300 py-1.5 px-5.25 rounded-full text-base">
            Rating: {rating}
          </span>
          <Link
            to={`/book/${bookId}`}
            className="primary-btn py-1.5 px-5.25 rounded-full text-lg font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishListBooks;
