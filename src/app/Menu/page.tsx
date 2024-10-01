import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center absolute top-[50%] left-[50%]">
        <Link
          className="cursor-pointer hover:text-purple-800 hover:dark:text-white"
          href={"../Game"}
        >
          Start Game
        </Link>
        <Link
          className="cursor-pointer hover:text-purple-800 hover:dark:text-white"
          href={"../Game"}
        >
          Record
        </Link>
        <Link
          className="cursor-pointer hover:text-purple-800 hover:dark:text-white"
          href={"../Game"}
        >
          Exit
        </Link>
      </div>
    </div>
  );
}
