function ErrorState({ message }) {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
      <p className="font-semibold">Error</p>
      <p className="text-sm">{message}</p>
    </div>
  );
}
export default ErrorState;
