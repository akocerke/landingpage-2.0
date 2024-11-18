import { FaGithub } from "react-icons/fa";

export default function GithubLink() {
  return (
    <div className="z-50 p-2">
      <a
        href="https://github.com/akocerke"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-gray-300 hover:text-white duration-300 text-decoration-none"
      >
        <FaGithub size={32} />
        <span className="ml-2 text-lg font-semibold hidden sm:inline">
          Visit my GitHub
        </span>
      </a>
    </div>
  );
}
