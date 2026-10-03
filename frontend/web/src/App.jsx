import { useEffect, useState } from "react";

function App() {
  const [backend, setBackend] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5139/api/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        setBackend(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <main>
      <h1>EasyPark</h1>

      {backend && (
        <section>
          <h2>Backend Connection</h2>
          <p>Status: {backend.status}</p>
          <p>{backend.message}</p>
        </section>
      )}

      {error && (
        <section>
          <h2>Backend Connection Failed</h2>
          <p>{error}</p>
        </section>
      )}
    </main>
  );
}

export default App;