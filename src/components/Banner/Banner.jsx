import bannerBook from "../../assets/images/books/banner-book.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse gap-21.5">
        <img
          alt="Banner Book"
          src={bannerBook}
          className="drop-shadow-xl drop-shadow-black/40"
        />
        <div className="max-w-md">
          <h1 className="text-[clamp(1.75rem,1rem+3vw,3.5rem)] font-bold font-playfair-display">
            Books to freshen up your bookshelf
          </h1>
          <Link
            to="/listed-books"
            className="primary-btn text-sm md:text-xl font-bold mt-12 inline-block"
          >
            View The List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
