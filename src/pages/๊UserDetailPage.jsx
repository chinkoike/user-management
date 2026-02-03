import { useParams, Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function UserDetailPage() {
  const { id } = useParams();
  const { data: user, loading, error } = useUser(id);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        Error: {error.message}
      </div>
    );

  if (!user) return <div className="text-center mt-10">User not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-4">
        <Link to="/users" className="text-sm text-blue-500 hover:underline">
          ← Back to Users
        </Link>

        <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>

        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>

          <p>
            <span className="font-semibold">Address:</span>
            <br />
            {user.address.street}, {user.address.suite}
            <br />
            {user.address.city} {user.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
}
