import { FaGithub } from "react-icons/fa";

export default function GithubLink() {
  return (
    <div className="flex justify-center items-center mt-5">
      <a
        href="https://github.com/akocerke" // Ersetze mit deinem GitHub-Link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
      >
        <FaGithub size={32} />
        <span className="ml-2 text-lg font-semibold hidden sm:inline">
          Visit my GitHub
        </span>
      </a>
    </div>
  );
}
