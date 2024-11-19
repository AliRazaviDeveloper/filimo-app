import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mb-10 pt-5">
      <ul className="flex flex-row gap-x-4 text-slate-100">
        <li>
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li>
          <Link href="/filter">فیلتر</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
