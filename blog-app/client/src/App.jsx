import { Route, Routes } from "react-router-dom";
import { BlogDetailPage, CreateBlog, HomePage } from "./pages";

function App() {
  return (
    <>
        <MinimalHorizontalTimeline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/:id" element={<BlogDetailPage />} />
      </Routes>
    </>
  );
}


const experiences = [
  {
    title: "Todo App",
    duration: "Jan '24",
    description: "CRUD app with JWT.",
  },
  {
    title: "Portfolio",
    duration: "Feb '24",
    description: "Personal portfolio in React.",
  },
  {
    title: "Blog System",
    duration: "Apr '24",
    description: "Auth-based blog with Node.js.",
  },
  {
    title: "Linux Setup",
    duration: "May '24",
    description: "Custom terminal config.",
  },
];

const MinimalHorizontalTimeline = () => {
  return (
    <div className="w-full px-4 py-12 bg-black text-white">
      <h2 className="text-2xl font-semibold text-center text-green-400 mb-10">
        Experience Timeline
      </h2>

      <div className="relative flex items-center justify-between w-full max-w-5xl mx-auto">
        {/* Central line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-600"></div>

        {experiences.map((item, idx) => (
          <div
            key={idx}
            className="relative z-10 flex flex-col items-center text-center w-1/4"
          >
            {/* Dot */}
            <div className="w-3 h-3 bg-green-400 rounded-full border border-black" />

            {/* Info box */}
            <div
              className={`mt-4 px-2 py-1 rounded text-xs text-gray-300 ${
                idx % 2 === 0 ? "translate-y-4" : "-translate-y-4"
              }`}
            >
              <div className="font-medium text-white">{item.title}</div>
              <div className="text-gray-400">{item.duration}</div>
              <div className="mt-1">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
