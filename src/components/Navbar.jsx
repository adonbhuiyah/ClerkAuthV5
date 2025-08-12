import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";


import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const { userId } =await auth();

  return (
    <div className="rounded-b-xl bg-cyan-950">
      <ul className="flex justify-between px-6 py-3 text-xl font-medium *:cursor-pointer">
        <Link href="/" className="">
          Home
        </Link>

        <div className="flex items-center">
          <li>
            <Link href="/client" prefetch={false}>Client Page</Link>
          </li>
        </div>
        <div className="flex items-center gap-6">
          {!userId ? (
            <>
              <li>
                <Link href="/signin">Sign In</Link>
              </li>
              <li>
                <Link href="/signup">Sign Up</Link>
 
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <UserButton />
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
