import React, { useEffect } from "react";
import emailVerif from "../api/users";
import Header from "../components/header";
import Footer from "../components/footer";

function Emailverification() {
  useEffect(() => {
    emailVerif.emailVerif();
  });
  return (
    <div>
      <Header />
      <div class="text-center">
        <p>
          Merci, votre adresse email a été validée, vous allez être redirigé
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default Emailverification;
