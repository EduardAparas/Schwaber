import { useState } from "react";

export default function IcsUploader({ onEventsLoaded }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (fileToUpload) => {
    if (!fileToUpload) return;
    setLoading(true);

    const data = new FormData();
    data.append("file", fileToUpload);

    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/calendar/upload-ics`, {
      method: "POST",
      body: data,
    });

    const events = await res.json();
    onEventsLoaded(events);
    setLoading(false);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      handleUpload(selectedFile);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <input
        type="file"
        accept=".ics"
        onChange={handleFileChange}
        disabled={loading}
      />
      {loading && <span style={{ marginLeft: "1rem" }}>Cargando...</span>}
    </div>
  );
}