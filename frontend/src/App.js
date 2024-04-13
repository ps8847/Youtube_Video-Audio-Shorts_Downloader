import React, { useState } from "react";
import logo from "./assets/ytlogo.svg";
import axios from "axios";

const App = () => {
  const [urlValue, setUrlValue] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const response = await axios.get(`https://youtube-video-audio-shorts-downloader.onrender.com/download?url=${urlValue}`);
    setData(response.data);
    setLoading(false);
    setUrlValue("");
  };

  return (
    <div className="bg-red-600 text-white min-h-screen flex flex-col justify-center items-center px-4">
      <div className="flex flex-col items-center mb-8">
        <img className="w-20 h-20" src={logo} alt="logo" />
        <h1 className="text-3xl font-bold text-center mt-4">
          <span className="text-blue-400">Youtube</span> Video & Shorts{" "}
          <span className="text-blue-400">Downloader</span>
        </h1>
      </div>
      <div className="flex flex-col items-center mb-4 w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter URL"
          value={urlValue}
          onChange={(e) => setUrlValue(e.target.value)}
          className="outline-none p-2 bg-gray-800 border-2 border-gray-600 rounded-md mb-4 w-full"
        />
        <button
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md outline-none w-full"
        >
          {loading ? "Please Wait..." : "Download"}
        </button>
      </div>
      {data !== null && (
        <div className="mt-8 w-full max-w-xl">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src={`${data.url}`}
                title="video"
              />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.info.map((formatName, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg flex flex-col justify-center items-center"
              >
                <a
                  href={formatName.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="text-blue-400 hover:underline"
                >
                  <div className="text-lg font-bold">
                    {formatName.mimeType.split(";")[0]}
                  </div>
                  {formatName.hasVideo && (
                    <div className="mt-1">{formatName.height + "p"}</div>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
