import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, image, tags, author, category, rating } = book;
  return (
    <div className="card flex flex-col h-full bg-base-100 p-6 rounded-2xl border border-[#131313]/15 relative hover:shadow-lg hover:-translate-y-0.5 hover:border-yellow-400 transition-all ease-in-out duration-300">
      <figure className="px-12 lg:px-24 py-4 lg:py-8 bg-[#F5F5F5] rounded-2xl">
        <img
          src={image}
          alt={bookName}
          className="drop-shadow-lg drop-shadow-black/40 hover:scale-105 transition-all ease-in-out duration-300"
        />
      </figure>
      <div className="card-body p-0 pt-6 gap-3">
        <p className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <a
              key={tag}
              href="#"
              className="bg-[#23BE0A]/5 text-[#23BE0A] text-base font-medium px-4 py-2 rounded-full"
            >
              {tag}
            </a>
          ))}
        </p>
        <h2 className="card-title font-bold text-2xl text-[#131313]">
          {bookName}
        </h2>
        <p className="text-base font-medium text-[#131313]/80">by : {author}</p>
        <div className="border-b border-dashed border-y border-[#131313]/15"></div>
        <div className="flex justify-between text-base font-medium">
          <span>{category}</span>
          <span>{rating} ⭐</span>
        </div>
      </div>
      <Link
        to={`/book/${bookId}`}
        className="absolute inset-0 w-full h-full"
      ></Link>
    </div>
  );
};

export default Book;
