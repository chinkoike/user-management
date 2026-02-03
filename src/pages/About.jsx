export default function About() {
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">About This Project</h1>

      <section className="bg-white rounded-xl p-6 shadow-sm space-y-2">
        <h2 className="font-semibold text-slate-700">📌 Project Overview</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          This project is a simple dashboard application built with React. It
          demonstrates how to structure a frontend application using reusable
          components, custom hooks, and API integration.
        </p>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm space-y-2">
        <h2 className="font-semibold text-slate-700">🛠 What I Implemented</h2>
        <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
          <li>Sidebar layout with React Router</li>
          <li>Custom hook for data fetching (`useUsers`)</li>
          <li>Loading and error handling states</li>
          <li>Separation of UI and data logic</li>
        </ul>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm space-y-2">
        <h2 className="font-semibold text-slate-700">📚 What I Learned</h2>
        <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
          <li>How to manage side effects using `useEffect`</li>
          <li>How to create reusable custom hooks</li>
          <li>Basic error handling patterns in React</li>
          <li>Project structure best practices</li>
        </ul>
      </section>
    </div>
  );
}
