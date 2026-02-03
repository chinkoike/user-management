import { useState } from "react";

export default function UserCard({ user, onDelete, onView }) {
  const [confirmId, setConfirmId] = useState(null);

  if (!user) return null;

  return (
    <>
      <div className="flex items-center justify-between bg-white rounded-lg shadow-sm px-4 py-3 hover:shadow transition my-2">
        <h3 className="font-medium text-gray-800">{user.name}</h3>

        <div className="flex gap-4 text-sm">
          <button
            onClick={() => onView(user.id)}
            className="text-blue-600 hover:underline"
          >
            Detail
          </button>

          <button
            onClick={() => setConfirmId(user.id)}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>

      {confirmId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">
              Confirm Delete
            </h4>

            <p className="text-gray-600">
              Are you sure you want to delete this user?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmId(null)}
                className="px-4 py-1.5 border rounded hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  onDelete(confirmId);
                  setConfirmId(null);
                }}
                className="px-4 py-1.5 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
