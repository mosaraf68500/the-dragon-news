import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { FiShare2 } from "react-icons/fi";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md ">
      <div className="p-4 flex justify-between items-center bg-gray-100">
        <div>
            <div className="flex gap-4">
            <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
            <div>
          <h2 className="text-sm font-semibold">{author.name}</h2>
          <p className="text-xs text-gray-500">
            {new Date(author.published_date).toLocaleDateString()}
          </p>
        </div>

            </div>
        
        </div>
        <button className="cursor-pointer flex gap-2"> 
        
        <CiBookmark size={24}></CiBookmark>
        <FiShare2 size={24}></FiShare2>
        </button>
      </div>

      <div className="px-4 pb-2">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      <figure>
        <img src={thumbnail_url} alt="News" className="w-full h-52 object-cover" />
      </figure>

      <div className="p-4 text-sm text-gray-700">
        {details.slice(0, 150)}...
        <Link to={`/news/${id}`} className="text-primary font-semibold ml-1">
          Read More
        </Link>
      </div>

      <div className="px-4 pb-4 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1 text-orange-500">
          <AiFillStar className="text-lg" />
          <span>{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye className="text-lg" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
