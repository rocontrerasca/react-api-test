import React from "react";
import styles from "./.module.sass";
import Link from "next/link";
import AppLogo from "../public/assets/icons/logo";
import { useRouter } from "next/router";
import { SPOTIFY_LOGIN } from "../utils/spotifyLogin";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className={styles.app_landing_wrapper}>
      <div className="container pt-5 pb-3  px-3 px-lg-5">
        <div className="row px-3 px-lg-5 align-items-center">
          <div className="col-8">
            <Link href="/">
              <a title="Spotify" className={styles.logo_app_link}>
                <AppLogo width={140} height={43} />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.hero_wrapper}>
        <div className="container  px-3 px-lg-5">
          <div className="row px-3 px-lg-5 align-items-center d-flex">
            <div className="col-12 d-flex-column col-lg-5">
              <h1 className={styles.hero_head}>
                La música que amas, al alcance de tu mano
              </h1>
              <p className={`my-4 py-2`}>
                Escucha tu musica favorita cuando quieras donde quieras
              </p>
              <button
                title="Login Into Spotify"
                onClick={() => {
                  router.push(SPOTIFY_LOGIN);
                }}
                className={styles.login_cta_btn_styled}
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
