import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
  const t = useTranslations("Header");

  return (
    <>
      <Header />

      <main>
        <div className="heorArea">
          <img
            src="/img/hero-art-right.png"
            alt="homeArtRight"
            className="homeArtRight"
          />
          <img
            src="/img/heor-art-left.png"
            alt="homeArtLeft"
            className="homeArtLeft"
          />
          <div className="container">
            <div className="homeContainer">
              <div className="homeConten">
                <h1>
                  <b className="color-blue">{t("title")}</b> {t("subTitle")}{" "}
                  <b>{t("childSubTitle")}</b>
                </h1>
                <p className="checkText">
                  <img src="/img/check-circle.svg" alt="Checkbox" />
                  <span>{t("allCreators")}</span>
                </p>
                <div className="homeSearch">
                  <form action="#">
                    <div className="searchCol">
                      <img
                        src="/img/search.svg"
                        alt="Search"
                        className="searchIcon"
                      />
                      <input
                        type="search"
                        placeholder={t("searchUniversity")}
                        name="searchUnivercity"
                        id="searchUnivercity"
                      />
                      {/* <button type='button'>Search</button> */}
                    </div>
                  </form>
                  <div className="searchBtn">
                    <a href="#">{t("signUpFan")}</a>
                    <a href="#">{t("signUpCreator")}</a>
                  </div>
                </div>
              </div>
              <div className="homeImg">
                <img src="/img/hero-banar.png" alt="HomeBanar" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
