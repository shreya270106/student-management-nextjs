import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-white">
          StudentMS
        </Link>

        <div className="flex gap-6 text-white">
          <Link href="/">Home</Link>
          <Link href="/students">Students</Link>
        </div>
      </div>
    </nav>
  );
}