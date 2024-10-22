import Image from 'next/image';
import Logo from '../Images/Logo1.png';
import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="fixed z-10 top-[100] left-0 md:top-0 md:left-0 right-0 md:right-auto bottom-0 md:bottom-auto md:w-[20%] w-full h-[60px] md:h-[100vh] bg-blue-400">
      <Image className="w-[100px]" alt="rasmlar" src={Logo}></Image>
      <ul className="text-white pl-[30px] flex  flex-col gap-[20px] pt-[10px]">
        <li>
          <Link className="text-center" href={'/dashboard'}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="text-center" href={'/frontend'}>
            Front end
          </Link>
        </li>
        <li>
          <Link className="text-center" href={'/dizayn'}>
            Grafik dizayn
          </Link>
        </li>
        <li>
          <Link className="text-center" href={'/doctor'}>
            Doxtirlar
          </Link>
        </li>
        <li>
          <Link className="text-center" href={'/parents'}>
            Parents
          </Link>
        </li>
        <li>
          <Link className="text-center" href={'/login'}>
            login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
