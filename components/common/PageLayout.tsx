import React from "react";
import Header from "./Header";

interface PageLayout {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayout) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-items-start gap-8 pb-20 bg-black text-white px-8 lg:px-28">
      <Header />
      {children}
    </main>
  );
}

export default PageLayout;
