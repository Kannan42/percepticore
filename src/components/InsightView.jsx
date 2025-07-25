const insights = {
  completedTasks: 12,
  focusHours: 24,
  reminders: 6,
};

export function InsightView() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Your Productivity Insights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Tasks Done Card */}
        <div className="p-6 rounded-lg bg-gradient-to-r from-green-100 to-green-200 dark:from-green-800 dark:to-green-900 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Tasks Done</h3>
          <p className="text-3xl text-gray-800 dark:text-gray-100">{insights.completedTasks}</p>
        </div>

        {/* Focus Hours Card */}
        <div className="p-6 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Focus Hours</h3>
          <p className="text-3xl text-gray-800 dark:text-gray-100">{insights.focusHours}</p>
        </div>

        {/* Reminders Card */}
        <div className="p-6 rounded-lg bg-gradient-to-r from-pink-100 to-pink-200 dark:from-pink-800 dark:to-pink-900 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Reminders</h3>
          <p className="text-3xl text-gray-800 dark:text-gray-100">{insights.reminders}</p>
        </div>
      </div>
    </div>
  );
}
