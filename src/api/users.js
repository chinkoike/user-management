// ...existing code...
export async function fetchUsers(signal) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    signal,
  });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}
export async function fetchUser(id, signal) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users${id}`, {
    signal,
  });
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}
export async function deleteUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    const text = await res.text().catch(() => null);
    throw new Error(text || "Failed to delete user");
  }
  return true;
}
// ...existing code...
