"use client";
import Link from "next/link";
import { nav } from "./nav";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SideMenu: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className={`fixed top-0 h-full w-60 bg-slate-900 text-white pt-18`}>
      <nav>
        <ul className='flex flex-col'>
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                className={`flex items-center p-4 hover:bg-slate-950 transition ${
                  pathname.includes(item.href) ? "bg-slate-950" : ""
                }`}
                href={item.href}
              >
                <div className='flex gap-2 items-center'>
                  <Image src={item.icon} alt='' width={18} height={18} />
                  <span className='text-sm font-light'>{item.text}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
