"use client";
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2> Wystąpił błąd: {error.message}</h2>
      <button onClick={() => reset()}>Spróbuj ponownie</button>
    </div>
  );
}
