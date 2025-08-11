import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useScrollSpy from "@/hooks/use-scroll-spy";

const Layout = () => {
  const location = useLocation();
  useScrollSpy(location.pathname === "/" ? ["home", "about", "portfolio", "flash", "community", "contact"] : []);

  return (
    <div className="min-h-screen bg-background">
      <a href="/#contact" className="sr-only focus:not-sr-only fixed top-2 left-2 z-[60] px-3 py-2 rounded-md bg-card border border-border text-foreground">
        Ir para agendamento
      </a>
      <Header />
      <main className="paper-texture">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;