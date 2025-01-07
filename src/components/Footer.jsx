import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer id="iletisim" className="bg-n-8 py-16" role="contentinfo">
      <div className="container">
        <nav
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          aria-label="Footer navigasyon"
        >
          {/* Footer menüleri */}
        </nav>

        <div className="mt-16 pt-8 border-t border-n-6">
          <p className="text-n-4 text-center">
            © {new Date().getFullYear()} TT Yazılım. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
