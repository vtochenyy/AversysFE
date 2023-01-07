import style from "./style.module.scss";
import { imagesNavComponent } from "../../images/imagesConfig";
import { Link } from "react-router-dom";

const ImageNavigation = () => {
  return (
    <div className={style.authorizedImageGroup}>
      <Link to="/mainPage">
        <img src={imagesNavComponent.asysAbout} alt="asysAbout is not found" />
      </Link>
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
