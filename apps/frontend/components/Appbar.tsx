"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./ThemeToggle";

const Appbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div>Dpin Uptime</div>
      <ModeToggle />
      <div>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Appbar;
