import Link from "next/link";
import { PlainHead } from "@/components/PageHead";

export default function NotFound() {
  return (
    <>
      <PlainHead kicker="Page not found" title="That road doesn’t go anywhere." intro="The page you were looking for isn’t here. The church is, though." />
      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <Link href="/" className="btn btn-orange">
          Back to the home page
        </Link>
      </div>
    </>
  );
}
