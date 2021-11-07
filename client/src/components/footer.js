import React from "react";
import LogoBlanc from "./LogoBlanc.png";

function Footer() {
  return (
    <div class="mt-24">
      <div class="flex flex-row justify-between px-4 rounded-t-md mx-72 bg-gray-300 fixed inset-x-0 bottom-0 opacity-90 font-playfair">
        <div class="flex">
          <span class="text-white text-sm self-center">
            © C. Tiran, M. Hennebo, B. Berlanger S. Serci, A. Caillères
          </span>
        </div>
        <div>
          <a href="/">
            <img
              class="h-20 inset-x-0 bottom-0 pr-72"
              src={LogoBlanc}
              alt="Home"
            />
          </a>
        </div>
        <div class="flex">
          <a
            href="mailto:planbmarseillecontact@gmail.com"
            class="text-white self-center font-playfair"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
