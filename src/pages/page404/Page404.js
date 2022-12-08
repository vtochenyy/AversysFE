import { imagesPage404 } from "../../images/imagesConfig";
import style from "./style.module.scss";
const Page404 = () => {
  return (
    <div>
      <img
        className={style.image404Style}
        src={imagesPage404.image404}
        alt="404image not found"
      />
    </div>
  );
};

export default Page404;
