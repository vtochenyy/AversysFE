import { useSelector } from "react-redux";
import style from "./style.module.scss";
// import { getErrorsList } from "../../redux/reducers/errorList";
import { registerPageImage } from "../../images/imagesConfig";
import ImageNavigation from "../../components/navImages/ImageNavigation";
import Uform from "../../components/uForm/Uform";
import { REGISTERTYPE } from "../../variables/formTypes";
const RegisterPage = () => {
  // const errorList = useSelector((state) => {
  //   return state.errorList.errorListData;
  // });
  return (
    <div className={style.registerMainBlock}>
      <div className={style.inputBlockContent}>
        <img
          src={registerPageImage.loadImage}
          alt="loaded images is not found"
        />
        {Uform(REGISTERTYPE)}
        <ImageNavigation />
      </div>
    </div>
  );
};

export default RegisterPage;
