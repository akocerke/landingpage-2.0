import GithubLink from "./GitHub"; // Importiere die GitHub-Link-Komponente

export default function Footer() {
  return (
    <footer className="shadow-[0_-4px_6px_rgba(0,0,0,0.2)] bg-gradient-to-l from-purple-600 to-blue-500 dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-950 text-gray-100 py-6">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-center items-center">
        <GithubLink />
      </div>
    </footer>
  );
}
