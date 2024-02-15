import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

function Bottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-[100px] bg-gray-900 dark:bg-neutral-900 absolute bottom-30 w-screen right-0 md:right-100">
      <div className="flex flex-col ">
        <div className="p-6  space-y-[20px]">
          <div className="flex justify-center items-center space-x-10">
            <a
              href="https://linkedin.com/company/chooyagroup"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="bg-blue-400 scale-150" />
            </a>
            <a href="https://twitter.com/lindasalespro" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
                alt="LindaSalesPro Twitter link"
                className="w-8 h-8"
              />
            </a>
            <a href="https://facebook.com/chooyagroup" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1200px-2023_Facebook_icon.svg.png"
                alt="LindaSalesPro Facebook link"
                className="w-8 h-8"
              />
            </a>
            <a href="https://instagram.com/lindasalespro" target="_blank">
              <img
                src="https://th.bing.com/th/id/R.26d9974a1feec9905a4e0d5e5ddf8db6?rik=ycoXFwG5Udz08A&pid=ImgRaw&r=0"
                alt="LindaSalesPro Instagram link"
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link
              href={"/"}
              className="btn btn-transparent text-gray-100 font-thin text-sm"
            >
              Built With LindaSalesPro
            </Link>
            <Link
              href={"/privacypolicy"}
              className="btn btn-transparent text-gray-100 font-thin text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-slate-600 dark:text-slate-400 text-sm text-center">
        &copy; {currentYear} LindaSalePro
      </div>
    </div>
  );
}

export default Bottom;
