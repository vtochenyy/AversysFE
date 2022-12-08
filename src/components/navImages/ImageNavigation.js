import style from "./style.module.scss";
import { imagesNavComponent } from "../../images/imagesConfig";

const ImageNavigation = () => {
  return (
    <div className={style.authorizedImageGroup}>
      <img src={imagesNavComponent.asysAbout} alt="asysAbout is not found" />
      <img
        src={imagesNavComponent.asysControl}
        alt="asysControl is not found"
      />
      <img src={imagesNavComponent.asysAnalyt} alt="asysAnalyt is not found" />
      <img
        src={imagesNavComponent.asysSupport}
        alt="asysSupport is not found"
      />
      <img src={imagesNavComponent.asysConfig} alt="asysConfig is not found" />
    </div>
  );
};

export default ImageNavigation;
