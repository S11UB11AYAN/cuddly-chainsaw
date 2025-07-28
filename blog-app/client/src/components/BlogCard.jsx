import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";

function BlogCard({ blog }) {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-md hover:shadow-cyan-500/20 hover:scale-[1.01] transition duration-300 flex flex-col justify-between">
      <div className="p-6">
        <h4 className="text-2xl font-semibold text-green-400 mb-3 hover:underline">
          <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
        </h4>

        <p className="text-gray-400 text-sm line-clamp-4 mb-5">
          {blog.content}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <Link
            to={`/blog/${blog._id}`}
            className="text-green-400 hover:text-green-300 font-medium"
          >
            Read More →
          </Link>
          <span>{formatDate(new Date(blog.createdAt))}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
