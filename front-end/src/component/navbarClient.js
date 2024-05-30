import { Link } from 'react-router-dom';

function NavbarClient() {
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="/client/home" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CV-TECH</span>
          </Link>
          <div className="flex items-center lg:order-2"></div>
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="/client/home" className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/client/cv" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Cv</Link>
              </li>
              <li>
                <Link to="/client/interview" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Interview</Link>
              </li>
              <li>
                <Link to="/client/profile" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Profile</Link>
              </li>
              <li>
                <Link to="/client/contact" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
              </li>
            </ul>
            <div className="flex items-center mt-4 lg:mt-0 lg:ml-12">
              <Link to="/client/login" className="inline-flex items-center px-10 font-bold py-1 text-sm leading-4 text-white bg-purple-700 rounded-full lg:bg-transparent lg:text-purple-700 lg:dark:text-white dark:bg-gray-900 dark:hover:bg-gray-700 dark:border-gray-700">Log in</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavbarClient;
