import React from "react";
import { useTheme } from "next-themes";
import NavbarLink from "./NavbarLink";
import ToggleDarkModeButton from "./toggleDarkModeButton";

function Navbar({ mounted }: { mounted: boolean }) {
  const sm = "sm:px-8 sm:py-4";
  const xs = "px-6 py-4";
  const margin = "mx-auto my-0";
  const layout = "h-auto w-full max-w-5xl";
  const sticky = "sticky top-0 z-50";
  const container = "container flex justify-between items-center";

  return (
    <nav
      className={`${container} ${layout} ${sticky} text-gray-800 dark:text-gray-50 ${xs} ${margin} ${sm} bg bg-opacity-70 dark:bg-opacity-70 bg-clip-padding`}
    >
      <NavbarLink href="/">
        <p className="font-bold text-lg hover:underline">Zong Xun</p>
      </NavbarLink>
      <div className="flex items-center child:ml-4">
        <div className="flex child:ml-4 child-hover:bg-gray-200 child:rounded-lg child:p-3 dark:child-hover:bg-gray-700">
          <NavbarLink href="/projects">Projects</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
          <NavbarLink href="/about">About</NavbarLink>
        </div>
        <ToggleDarkModeButton mounted={mounted} />
      </div>
    </nav>
  );
}

export default Navbar;
