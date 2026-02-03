// ...existing code...
import { useUsers } from "../hooks/useUsers";
import UserCard from "../components/UserCard";
import { deleteUser } from "../api/users";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

export default function UsersPage() {
  const { data: users, loading, error } = useUsers();
  const [localUsers, setLocalUsers] = useState(() => users ?? []);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const filteredUsers = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return localUsers;

    return localUsers.filter(
      (u) =>
        u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q),
    );
  }, [search, localUsers]);

  function handleView(id) {
    navigate(`/users/${id}`);
  }
  useEffect(() => {
    if (!users) return;
    // defer update to next microtask to avoid synchronous setState in effect
    Promise.resolve().then(() => {
      setLocalUsers((prev) => {
        // avoid unnecessary updates when identical
        if (
          prev.length === users.length &&
          prev.every((p, i) => p.id === users[i].id)
        ) {
          return prev;
        }
        return users;
      });
    });
  }, [users]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  async function handleDelete(id) {
    const prev = localUsers;
    setLocalUsers((s) => s.filter((u) => u.id !== id)); // optimistic update

    try {
      await deleteUser(id);
    } catch (e) {
      console.error("Delete failed", e);
      setLocalUsers(prev); // rollback
    }
  }

  return (
    <>
      <div className="mx-auto max-w-2xl mb-4 p-4 ">
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" w-1/2 border border-gray-300 bg-white px-3 py-2 rounded text-center"
          />
        </div>
        {filteredUsers.length === 0 && (
          <div className="text-gray-500">No users found</div>
        )}

        {filteredUsers.map((u) => (
          <UserCard
            key={u.id}
            user={u}
            onDelete={handleDelete}
            onView={handleView}
          />
        ))}
      </div>
    </>
  );
}
// ...existing code...
