
const Project = ({ demoLink, codeLink ,id,imgSrc,projectName}) => {
  const handleOnClick = (link) => {
    window.open(link, "_blank");
  };

  const handleCodeLinkClick = (event) => {
    event.stopPropagation();
    window.open(codeLink, "_blank");
  };

  return (
    <div key={id} className="">
      <div className="flex justify-center font-bold py-2 text-gray-200 items-center uppercase text-2xl">
        {projectName}
      </div>
      <div
        onClick={
          demoLink
            ? () => handleOnClick(demoLink)
            : () => handleOnClick(codeLink)
        }
        className="shadow-lg shadow-gray-700 rounded-lg hover:scale-105 duration-300"
      >
        <img
          src={imgSrc}
          alt={projectName}
          className="rounded-md "
          style={{ objectFit: "cover", borderRadius: "5px" }}
        />
        <div className="flex items-center justify-center">
          <button className=" w-1/2 m-3 py-1 px-6 duration-300 hover:scale-105">
            <a
              onClick={handleCodeLinkClick}
              href={codeLink}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </button>
          {demoLink && (
            <button className=" w-1/2  m-3 py-1 px-6 duration-300 hover:scale-105">
              <a href={demoLink} target="_blank" rel="noreferrer">
                Demo
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
