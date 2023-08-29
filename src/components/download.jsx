import React from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import resumeUrl from "../assets/Azeem_Resume_main.pdf";
import { useState } from "react";

const ResumeDownloadButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    console.log(isDownloading);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Azeem-Resume.pdf";
      link.click();
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleDownload}
      className=" mr-3 rounded-lg hover:shadow-md opacity-80 bg-gradient-to-r px-2 py-3 my-4 from-cyan-500 to-blue-500 hover:scale-105  duration-500 hover:to-blue-700 cursor-pointer"
    >
      <p className="text-white">
        {isDownloading ? "downloading..." : "download resume"}{" "}
        <LiaDownloadSolid className="inline" size={"1.5rem"} />
      </p>
    </button>
  );
};

export default ResumeDownloadButton;
