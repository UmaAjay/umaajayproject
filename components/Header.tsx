import Image from "next/image";
import Link from "next/link";
import Github from "../components/GitHub";

export default function Header() {
  return (
    <header className="md:flex text-center justify-between items-center w-full mt-5 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3 mb-10 md:mb-0 justify-center">
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
       <b> Virtual Teacher Using Ai</b>
        </h1>
      </Link>
      <div>
         <div className="flex flex-wrap justify-center gap-4 items-center">
          <h1><b><a href='https://umaajay.netlify.app/'>Uma Ajay Kumar Reddy P S</a></b></h1><br />
          <h1>Harsha Chaithanya</h1><br />
          <h1>Sanidhya</h1><br />
          <h1>Hrithin</h1>
          
        </div>
      </div>
      
    </header>
  );
}
