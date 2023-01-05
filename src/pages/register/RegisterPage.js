import { useSelector } from "react-redux";
import style from "./style.module.scss";
// import { getErrorsList } from "../../redux/reducers/errorList";
import { registerPageImage } from "../../images/imagesConfig";
import ImageNavigation from "../../components/navImages/ImageNavigation";
import Uform from "../../components/uForm/Uform";
import { registerType } from "../../variables/formTypes";
const RegisterPage = () => {
  // const errorList = useSelector((state) => {
  //   return state.errorList.errorListData;
  // });
  return (
    <div className={style.registerMainBlock}>
      <div className={style.userInputsBlock}>
        <div className={style.inputBlockContent}>
          <img
            src={registerPageImage.loadImage}
            alt="loaded images is not found"
          />
          {Uform(registerType)}
          <ImageNavigation />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
