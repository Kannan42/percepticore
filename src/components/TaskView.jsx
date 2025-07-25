const tasks = [
  { id: 1, title: "Finish UI Design", due: "Tomorrow" },
  { id: 2, title: "Prepare Presentation", due: "Next Monday" },
  { id: 3, title: "Code Review for Project", due: "Friday" },
];

export function TaskView() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-800">
        Upcoming Tasks
      </h2>

      <ul className="space-y-4">
        {tasks.map(task => (
          <li
            key={task.id}
            className="p-4 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-100 dark:to-purple-100 shadow-md hover:scale-[1.02] transition"
          >
            <div className="font-semibold text-gray-800">{task.title}</div>
            <div className="text-sm text-gray-600">Due: {task.due}</div>
          </li>

        ))}
      </ul>
    </div>
  );
}
