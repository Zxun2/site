import { LinkProps } from "@/types/index";
import Link from "next/link";

export default function NavbarLink({ href, children }: LinkProps) {
  const md = "md:px-3 md:py-2 md:mx-2";
  const sm = "sm:px-2 sm:py-2 sm:mx-2";
  const xs = "px-2 py-2 mx-0";

  return (
    <Link href={href} className={`bg-gray-700 ${md} ${sm} ${xs} `}>
      {children}
    </Link>
  );
}
