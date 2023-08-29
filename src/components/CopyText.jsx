import React, { useState } from "react";
import { AiOutlineCopy, AiFillCopy } from "react-icons/ai";

const CopyText = ({name}) => {
  const [copied, setCopied] = useState(false);
  const [copyIcon, setCopyIcon] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(name).then(() => {
      setCopied(true);
      setCopyIcon(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
      setTimeout(() => {
        setCopyIcon(false);
      }, 5000);
    });
  };

  return (
    <>
      <div className={`text-white cursor-pointer flex `} onClick={handleCopy}>
        <p className="text-[80%] sm:text-[100%] font-number">{name}</p>{" "}
        <p className="mt-1 px-3">
          {copyIcon ? <AiFillCopy /> : <AiOutlineCopy />}{" "}
        </p>
      </div>
      {copied && (
        <div className="absolute top-[-45px] left-[80%] z-10  bg-gradient-to-r from-green-400 via-green-600 to-green-900 text-white p-2 rounded-[8%]">
          Copied!
        </div>
      )}
    </>
  );
};

export default CopyText;
