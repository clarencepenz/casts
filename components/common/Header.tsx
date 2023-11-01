import React from "react";
import Link from "next/link";
import CastsInc from "../icons/CastsInc";

function Header() {
  return (
    <div className="flex justify-center items-center w-full my-4">
      <Link href="/">
        <CastsInc />
      </Link>
    </div>
  );
}

export default Header;
