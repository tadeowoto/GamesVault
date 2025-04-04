import React from "react";
import Navbar from "../components/Navbar";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <article className="w-full min-h-screen bg-bg-dark text-white font-sans flex flex-col items-center gap-5">
      <h1 className="text-center pt-2 font-bold text-2xl">Games Vault</h1>
      <Navbar />
      <main>{children}</main>
    </article>
  );
};
