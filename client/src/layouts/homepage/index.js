/* eslint-disable global-require */
import "./homepage.css";
import React from "react";
import PageLayout from "examples/LayoutContainers/PageLayout";

function Homepage() {
  // eslint-disable-next-line no-unused-vars

  return (
    <PageLayout>
      <div className="container">
        <div className="splash">
          <div className="overlay">
            <div className="nav">
              <div className="logo">
                <img src={require("../../assets/images/logo.png")} alt="logo" />
              </div>
              <div className="links">
                <a href="/authentication/sign-in">SE CONNECTER</a>
                <a href="/authentication/sign-up">S&apos;ENREGISTRER</a>
              </div>
            </div>
            <div className="splash__text">
              <h1>Votre satisfaction est notre devise</h1>
              <p>
                Agriscale est une solution innovante à la complication excessive de votre vie. Notre
                système permet aux agriculteurs de reprendre le contrôle de leur vie.
              </p>
            </div>
            <div className="info__triangle--top" />
          </div>
        </div>
        <div className="info--grey">
          <div className="cards">
            <div className="card">
              <div className="circle circle--red">
                <img src={require("../../assets/images/world.png")} alt="earth" />
              </div>
              <h6 className="card__title">Simplicité</h6>
              <p className="card__description">
                Accédez à toutes vos fonctionnalitées en quelques clics depuis votre téléphone
              </p>
            </div>
            <div className="card">
              <div className="circle circle--blue">
                <img src={require("../../assets/images/retweet.png")} alt="simplicity" />
              </div>
              <h6 className="card__title">Automatisation</h6>
              <p className="card__description">
                Automatisez votre activité afin de gagner du temps et booster votre productivité
              </p>
            </div>
            <div className="card">
              <div className="circle circle--green">
                <img src={require("../../assets/images/history.png")} alt="management" />
              </div>
              <h6 className="card__title">Gestion</h6>
              <p className="card__description">
                Gérez votre exploitation à distance et surveillez en temps réel l’évolution de
                celle-ci
              </p>
            </div>
          </div>
          <div className="split">
            <div className="info__text">
              <h4>Pourquoi nous choisir ?</h4>
              <p>
                Différentes fonctionnalités qui vont vous permettre de faire fructifier votre ferme
                :
              </p>
              <ul>
                <li>Suivi du prix de vos produits</li>
                <li>
                  Automatisation qui vous permet de ne plus vous occuper des tâches fastidieuse
                </li>
                <li>
                  Sécurité, Suivi météo qui vous préviens des risques d’intempéries, caméra et suivi
                  du bétail en temps réel.
                </li>
              </ul>
            </div>
            <div className="info__color-card">
              <div className="color-card__image">
                <img src={require("../../assets/images/ia.jpg")} alt="ai" />
              </div>
              <div className="color-card__text">
                <h4>Intelligence Artificielle Agriscale</h4>
                <p>
                  Notre IA suit vos habitudes afin de s’adapter à vos besoins et d’automatiser vos
                  tâches afin de vous simplifier la vie.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="info__triangle--bottom" />
        <div className="info--white split">
          <img className="farm-image" src={require("../../assets/images/farm.jpg")} alt="ai" />
          <div className="info__text">
            <div className="circle circle--pink rocket">
              <img src={require("../../assets/images/rocket-pink.png")} alt="rocket" />
            </div>
            <h4>Une entreprise florissante</h4>
            <p>
              Agriscale propose une gamme de solutions et de produits innovants qui répond aux
              exigences croissantes de l&apos;agriculture mondiale.
            </p>
            <ul>
              <li>
                <div className="circle circle--pink circle--small">
                  <img src={require("../../assets/images/world-pink.png")} alt="earth" />
                </div>
                Respect de l’environnement
              </li>
              <li>
                <div className="circle circle--pink circle--small">
                  <img src={require("../../assets/images/html-pink.png")} alt="earth" />
                </div>
                Economie des ressources
              </li>
              <li>
                <div className="circle circle--pink circle--small">
                  <img src={require("../../assets/images/telegram-pink.png")} alt="earth" />
                </div>
                Equipements discret
              </li>
            </ul>
          </div>
        </div>
        <div className="form__triangle--top" />
        <div className="contact-form">
          <div className="form__description">
            <h3>Garantissez votre avenir</h3>
            <p>
              Choisissez un avenir plus sûr en utilisant nos outils pour une plus grande facilité
              dans votre gestion et une ferme plus sécurisée contre les vols
            </p>
          </div>
          <div className="contact-form__points">
            <div className="point">
              <div className="circle circle--white">
                <img src={require("../../assets/images/sync.png")} alt="earth" />
              </div>
              <h6>Automatisé</h6>
              <p>Un service accessible à tous</p>
              <p>Support technique 24/24 7j/7j entièrement géré</p>
            </div>
            <div className="point">
              <div className="circle circle--white">
                <img src={require("../../assets/images/podcast.png")} alt="earth" />
              </div>
              <h6>A l’écoute du client</h6>
              <p>
                Agriscale propose une gamme de solutions et de produits innovants qui répond aux
                exigences croissantes de l&apos;agriculture mondiale.
              </p>
            </div>
            <div className="point">
              <div className="circle circle--white">
                <img src={require("../../assets/images/bulb.png")} alt="earth" />
              </div>
              <h6>Modulable</h6>
              <p>Plus de caméra ?</p>
              <p>Gestion de la consommation de l’eau ?</p>
              <p>Nous répondrons à tous vos besoins</p>
            </div>
          </div>
          <div className="form">
            <h5>Un renseignement / devis? Contactez-nous.</h5>
            <p>Nous vous joindrons sous 48h.</p>
            <form action="">
              <label htmlFor="name">
                NOM
                <input type="text" placeholder="Nom + prénom" />
              </label>
              <label htmlFor="email">
                EMAIL
                <input type="email" placeholder="Nom + prénom" />
              </label>
              <label htmlFor="message">
                MESSAGE
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Dîtes nous tout..."
                />
              </label>
              <button className="form-button" type="submit">
                ENVOYER
              </button>
            </form>
          </div>
        </div>
        <div className="form__triangle--bottom" />
        <footer>
          <div className="row">
            <div className="column footer__section">
              <h4>Restons connectés!</h4>
              <p>Trouvez nous sur ces réseaux</p>
              <ul className="link-row">
                <li>
                  <div className="circle circle--white">
                    <img src={require("../../assets/images/instagram.png")} alt="instagram" />
                  </div>
                </li>
                <li>
                  <div className="circle circle--white">
                    <img src={require("../../assets/images/facebook.png")} alt="instagram" />
                  </div>
                </li>
                <li>
                  <div className="circle circle--white">
                    <img src={require("../../assets/images/twitter.png")} alt="instagram" />
                  </div>
                </li>
                <li>
                  <div className="circle circle--white">
                    <img src={require("../../assets/images/linkedin.png")} alt="instagram" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="column footer__links">
              <h6>LIENS UTILES</h6>
              <ul>
                <li>A propos de nous</li>
                <li>Blog</li>
                <li>Github</li>
                <li>Nos partenaires</li>
              </ul>
            </div>
            <div className="column footer__links">
              <h6>AUTRES RESSOURCES</h6>
              <ul>
                <li>MIT License</li>
                <li>Conditions générales de vente</li>
                <li>Politique de confidentialité</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright © 2022 EPSI Team</p>
        </footer>
      </div>
    </PageLayout>
  );
}

export default Homepage;
