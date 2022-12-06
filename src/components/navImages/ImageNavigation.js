import asysAbout from "../../images/navImages/asysAbout.svg";
import asysAnalyt from "../../images/navImages/asysAnalyt.svg";
import asysSupport from "../../images/navImages/asysSupport.svg";
import asysConfig from "../../images/navImages/asysConfig.svg";
import asysControl from "../../images/navImages/asysControl.svg";
import style from "./style.module.scss";

const ImageNavigation = () => {
  const authorizedConfig = {
    asysAbout,
    asysAnalyt,
    asysSupport,
    asysConfig,
    asysControl,
  };

  return (
    <div className={style.authorizedImageGroup}>
      <img src={authorizedConfig.asysAbout} alt="asysAbout is not found" />
      <img src={authorizedConfig.asysControl} alt="asysControl is not found" />
      <img src={authorizedConfig.asysAnalyt} alt="asysAnalyt is not found" />
      <img src={authorizedConfig.asysSupport} alt="asysSupport is not found" />
      <img src={authorizedConfig.asysConfig} alt="asysConfig is not found" />
    </div>
  );
};

export default ImageNavigation;
