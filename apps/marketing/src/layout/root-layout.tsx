import { type ReactNode } from "react";
import { Navbar } from "../components/layout/navbar";

type RootLayoutProps = {
  readonly children: ReactNode;
};

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main>
      <Navbar />
      <section>{children}</section>
      {/* Footer */}
      {/* Cookie Consent */}
    </main>
  );
};
