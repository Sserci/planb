import LogoBleu from "./LogoBleu.png";
import React, { useState, useEffect } from "react";
import Login from "../views/login";

function Header() {
  const [showModal, setShowModal] = React.useState(false);

  async function logout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      document.getElementById("logout").style.display = "none";
      document.getElementById("profil").style.display = "none";
      document.getElementById("connection").style.display = "initial";
    } else {
      document.getElementById("logout").style.display = "initial";
      document.getElementById("profil").style.display = "initial";
      document.getElementById("connection").style.display = "none";
    }
  }, []);

  return (
    <div class="flex flex-row justify-between mx-72">
      <div class="">
        <a href="/">
          <img src={LogoBleu} alt="Home" />
        </a>
      </div>
      <div class="flex flex-row justify-end pt-20">
        <a id="profil" href="/user/profile" title="Profil">
          <svg
            class="w-10 h-10 text-cyan-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-
              width="1"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0
                016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </a>
        <svg
          onClick={logout}
          id="logout"
          class="w-10 h-10 text-cyan-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#0891B2"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M13 3h-2v10h2V3zm4.83 2.17l-1.42
                  1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82
                  3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
          />
        </svg>
        <>
          <button
            id="connection"
            className="text-cyan-600 font-oswald text-lg"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Connexion
          </button>
          {showModal ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none gb-white-500 focus:outline-none">
                <div class="w-4/12 h-3/5 bg-white shadow-xl rounded-lg p-4 flex flex-col">
                  <div
                    class="flex justify-end"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      class="w-6 h-6 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col items-center">
                    <img src={LogoBleu} class="w-80" alt="Home" />
                    <Login />
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
            </>
          ) : null}
        </>
      </div>
    </div>
  );
}

export default Header;
/* 
function displayConnection () {
  if (localStorage.getItem("token", token)) {
    <div class="flex flex-row justify-end pt-20">
        <a href="/" title="Profil">
          <svg
            class="w-10 h-10 text-cyan-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-
              width="1"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0
                016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </a>
          <a href="/" title="Déconnexion">
            <svg
              class="w-10 h-10 text-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#0891B2"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M13 3h-2v10h2V3zm4.83 2.17l-1.42
                  1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82
                  3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
              />
            </svg>
          </a>
        </div>
    }
  else {<a href="/">Connexion</a>}
} */

/*  <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>

    <div>
      {(() => {
        if (someCase) {
          return (
            <div>someCase</div>
          )
        } else if (otherCase) {
          return (
            <div>otherCase</div>
          )
        } else {
          return (
            <div>catch all</div>
          )
        }
      })()}
    </div>
 */
