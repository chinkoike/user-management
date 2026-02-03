import ErrorState from "../components/ErrorState";
import LoadingState from "../components/LoadingState";
import { useUsers } from "../hooks/useUsers";

export default function Home() {
  const { data: users, loading, error } = useUsers();

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error.message || "Failed to load users"} />;
  }

  const totalUsers = users.length;
  const activeUsers = users.length; // mock
  const newToday = Math.floor(users.length / 3); // mock

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <p className="text-slate-500 text-sm">Total Users</p>
          <p className="text-3xl font-bold text-slate-800 mt-2">{totalUsers}</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm">
          <p className="text-slate-500 text-sm">Active Users</p>
          <p className="text-3xl font-bold text-slate-800 mt-2">
            {activeUsers}
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm">
          <p className="text-slate-500 text-sm">New Today</p>
          <p className="text-3xl font-bold text-slate-800 mt-2">{newToday}</p>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-slate-700">Users</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="text-left px-4 py-3">Name</th>
                <th className="text-left px-4 py-3">Email</th>
                <th className="text-left px-4 py-3">Company</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium">{user.name}</td>
                  <td className="px-4 py-3 text-slate-500">{user.email}</td>
                  <td className="px-4 py-3">{user.company?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
