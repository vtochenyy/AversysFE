import ImageNavigation from "../../components/navImages/ImageNavigation";
import { imagesMainPage } from "../../images/imagesConfig";
import { useTranslation } from "react-i18next";
import style from "./style.module.scss";
const AversysMain = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className={style.mainPage}>
      <div className={style.imageBlock}>
        <img src={imagesMainPage.mainBackGround} alt="фон не найден" />
      </div>
      <div className={style.navBlock}>
        <div className={style.navBlockContent}>
          <div className={style.headerNavBlock}>
            <h2>AVERSYS</h2>
            <img
              src={imagesMainPage.aversysLogo}
              alt="aversys logo not found"
            />
          </div>
          <span>{t("mainPage.coming")}</span>
          <div className={style.navImages}>
            <ImageNavigation />
          </div>
          <p className={style.controllMessage}>
            Управляйте своим капиталом легко!
          </p>
          <button onClick={() => changeLanguage("ru")}>ru</button>
          <button onClick={() => changeLanguage("en")}>en</button>
        </div>
      </div>
    </div>
  );
};

export default AversysMain;
