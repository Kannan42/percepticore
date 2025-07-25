export function HomeView() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  
  return (
    <div className="text-center space-y-4 animate-fade-in">
      <h1 className="text-4xl font-extrabold">Hello, Kannan 👋</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">{date} | {time}</p>
      <p className="italic text-purple-700 dark:text-purple-300">
        Here's your productivity tip: <span className="font-semibold">"Stay hydrated & take breaks!"</span>
      </p>
    </div>
  );
}
