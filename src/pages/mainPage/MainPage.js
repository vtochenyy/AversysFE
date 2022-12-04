import { mainPageConfig } from "./mainPageConfig";
import style from "./style.module.scss";
const AversysMain = () => {
  return (
    <div className={style.mainPage}>
      <div className={style.imageBlock}>
        <img src={mainPageConfig.mainBackGround} alt="фон не найден" />
      </div>
      <div className={style.navBlock}>
        <div className={style.navBlockContent}>
          <div className={style.headerNavBlock}>
            <h2>AVERSYS</h2>
            <img
              src={mainPageConfig.aversysLogo}
              alt="aversys logo not found"
            />
          </div>
          <span>приветсвует вас.</span>
          <div className={style.navImages}>
            <img src={mainPageConfig.aboutAsys} alt="about img not found" />
            <img
              src={mainPageConfig.controllAsys}
              alt="control img not found"
            />
            <img
              src={mainPageConfig.analyticAsys}
              alt="analytic img not found"
            />
            <img src={mainPageConfig.helperAsys} alt="helper img not found" />
            <img src={mainPageConfig.configAsys} alt="config img not found" />
            <img src={mainPageConfig.userAsys} alt="user img not found" />
          </div>
          <p className={style.controllMessage}>
            Управляйте своим капиталом легко!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AversysMain;
