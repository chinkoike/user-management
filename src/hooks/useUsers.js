import { useEffect, useState } from "react";
import { fetchUsers } from "../api/users";

export function useUsers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ac = new AbortController();

    fetchUsers(ac.signal)
      .then(setData)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err);
      })
      .finally(() => setLoading(false));
    return () => ac.abort();
  }, []);

  return { data, loading, error };
}
