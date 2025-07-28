import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { BlogCard } from "../components";
import { api } from "../lib/axios";

function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get("/blog");
        setBlogs(res.data);
      } catch (error) {
        console.log("Error in fetching blogs", error);
        toast.error("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <div className="min-h-screen bg-zinc-900 text-white font-['VT323'] px-8 md:px-20 py-16">
      {/* Terminal-style heading */}
      <h1 className="text-green-400 text-sm mb-6">~/blog — zsh</h1>

      {/* Hero Section */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-green-400">My Blog</span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
          Here I write about Linux, FOSS, web development, and my coding
          journey.
          <br />
          Expect tutorials, tips, and my personal tech experiments.
        </p>
      </div>

      {loading && (
        <div className="text-center text-lg py-10 text-primary animate-pulse">
          Loading your notes...
        </div>
      )}

      {/* Recent Posts Section */}
      <section>
        <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-8">
          ~/recent-posts
        </h3>

        {!loading && blogs.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} setBlog={setBlogs} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default HomePage;
