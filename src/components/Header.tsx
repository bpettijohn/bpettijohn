import GithubSvg from "../assets/github/github-mark.svg?react";

function Header() {
  return (
    <header className="flex justify-between align-middle px-32 py-16 font-sans">
      <h1 className="text-slate-900 dark:text-white text-6xl">Ben</h1>
      <div>
        <nav>
          <ul className="flex items-center gap-x-8 font-semibold text-2xl">
            <li>
              <a href="" className="hover:text-sky-500 dark:hover:text-sky-400">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:text-sky-500 dark:hover:text-sky-400">
                Resume
              </a>
            </li>
            <li>
              <a href="" className="hover:text-sky-500 dark:hover:text-sky-400">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <a
            href=""
            className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            <GithubSvg />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
