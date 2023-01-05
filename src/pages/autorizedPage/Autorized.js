import ImageNavigation from "../../components/navImages/ImageNavigation";
import Uform from "../../components/uForm/Uform";
import { imagesAuthorized } from "../../images/imagesConfig";
import { autorizedType } from "../../variables/formTypes";
import style from "./style.module.scss";
const AutorizedPage = () => {
  return (
    <div className={style.mainBlockAutorized}>
      <div className={style.loginBlock}>
        <h2>AVERSYS</h2>
        <span>Авторизация пользователя</span>
        <div>
          <ImageNavigation />
        </div>
        {Uform(autorizedType)}
        <div className={style.registerBlock}>
          <span>Регистрация</span>
          <span>|</span>
          <span>Забыли пароль?</span>
        </div>
      </div>
      <div className={style.authorizedImage}>
        <img
          src={imagesAuthorized.authorizedImage}
          alt="authorized  not found"
        />
      </div>
    </div>
  );
};

export default AutorizedPage;
