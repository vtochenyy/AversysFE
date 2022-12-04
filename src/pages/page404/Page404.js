import { page404Config } from "./page404Config";
import style from "./style.module.scss";
const Page404 = () => {
  return (
    <div>
      <img
        className={style.image404Style}
        src={page404Config.image404}
        alt="404image not found"
      />
    </div>
  );
};

export default Page404;
