import { useState } from "react";
import { HomeView } from "./components/HomeView";
import { TaskView } from "./components/TaskView";
import { InsightView } from "./components/InsightView";

export default function App() {
  const [view, setView] = useState("home");
  const [theme, setTheme] = useState("light");

  return (
    <main
      className={`min-h-screen transition-colors duration-500 p-4 sm:p-6 md:p-10 ${
        theme === "light"
          ? "bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-gray-900"
          : "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-50"
      }`}
    >
      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-10">
        {["home", "tasks", "insights"].map((tab) => (
          <button
            key={tab}
            onClick={() => setView(tab)}
            className="border border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors rounded px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base"
          >
            {tab[0].toUpperCase() + tab.slice(1)}
          </button>
        ))}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="border border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors rounded px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base"
        >
          Toggle Theme
        </button>
      </div>

      {/* Reminder Text */}
      <div className="mb-4 text-center italic text-sm sm:text-base animate-pulse">
        Reminder: Drink water - 3rd reminder
      </div>

      {/* Input Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Ask anything..."
          className="w-full max-w-xl border border-gray-300 rounded px-3 py-2 sm:px-4 sm:py-2 shadow focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-sm sm:text-base"
        />
      </div>

      {/* View Container */}
      <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 rounded-lg shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
        {view === "home" && <HomeView />}
        {view === "tasks" && <TaskView />}
        {view === "insights" && <InsightView />}
      </div>
    </main>
  );
}
