import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <h1 className="text-6xl font-bold text-error">404 - Page Not Found</h1>
      <p className="text-lg text-base-content/80 my-5">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="primary-btn mt-4">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
