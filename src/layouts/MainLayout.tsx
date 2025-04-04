import React from "react";
import Navbar from "../components/Navbar";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <article>
      <h1>Games Vault</h1>
      <Navbar />
      <main>{children}</main>
    </article>
  );
};
