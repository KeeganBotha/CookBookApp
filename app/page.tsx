import Link from "next/link";
import { lusitana } from "./ui/fonts";

export default function Page() {
  return (
    <main className="lusitana flex min-h-screen flex-col p-6 items-center justify-center">
      <div className="mt-4 flex flex-col gap-4 md:flex-row">
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>
      
    </main>
  );
}
