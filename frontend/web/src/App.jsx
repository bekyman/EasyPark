import { useEffect, useState } from "react";

function App() {
  const [backendStatus, setBackendStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5139/api/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }

        return response.json();
      })
      .then((data) => {
        setBackendStatus(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h1>EasyPark</h1>

      {backendStatus && (
        <div>
          <h2>Backend Status: {backendStatus.status}</h2>
          <p>{backendStatus.message}</p>
        </div>
      )}

      {error && (
        <div>
          <h2>Backend Connection Failed</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default App;