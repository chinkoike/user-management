import { useEffect, useState } from "react";
import { fetchUser } from "../api/users";

export function useUser(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const ac = new AbortController();

    fetchUser({ id, signal: ac.signal })
      .then(setData)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err);
      })
      .finally(() => setLoading(false));

    return () => ac.abort();
  }, [id]);

  return { data, loading, error };
}
