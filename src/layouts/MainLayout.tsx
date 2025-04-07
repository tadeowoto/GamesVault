import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <article className="w-full min-h-screen bg-bg-dark text-white font-sans flex flex-col items-center gap-5">
      <Link to="/" className="text-center pt-2 font-bold text-2xl">
        Games Vault
      </Link>
      <Navbar />
      <main className="w-full h-full">{children}</main>
    </article>
  );
};
