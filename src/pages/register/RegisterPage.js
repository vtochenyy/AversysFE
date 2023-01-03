import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.scss";
import { createRegisterState } from "../../redux/reducers/registerReducer";
import { registerPageImage } from "../../images/imagesConfig";
import ImageNavigation from "../../components/navImages/ImageNavigation";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const dispatch = useDispatch();
  const errorList = useSelector((state) => {
    return state.errorList.errorListData;
  });
  return (
    <div className={style.registerMainBlock}>
      <div className={style.userInputsBlock}>
        <div className={style.inputBlockContent}>
          <div>dasdasdasdasd</div>
          <button onClick={() => changeLanguage("ru")}>ru</button>
          <button onClick={() => changeLanguage("en")}>en</button>
          <img
            src={registerPageImage.loadImage}
            alt="loaded images is not found"
          />
          <Form
            onFinish={(data) => {
              dispatch(createRegisterState(data));
            }}
          >
            <Form.Item name="firstName">
              <Input placeholder={t("register.firstname")} />
            </Form.Item>
            <Form.Item name="lastName">
              <Input placeholder="Фамилия" />
            </Form.Item>
            <Form.Item name="paternity">
              <Input placeholder="Отчество" />
            </Form.Item>
            <Form.Item name="email">
              <Input placeholder="Ваша электронная почта" />
            </Form.Item>
            <Form.Item name="login">
              <Input placeholder="Логин" />
            </Form.Item>
            <Form.Item name="password">
              <Input placeholder="Пароль" />
            </Form.Item>
            <p className={style.politicBlock}>
              Я ознакомлен(а) с <span>Политикой конфиденциальности</span> и
              принимаю правила пользования
            </p>
            <Button type="primary" htmlType="submit">
              Отправить
            </Button>
          </Form>
          <ImageNavigation />
        </div>
      </div>
      <div className={style.blockIfAuthorizate}>
        <img
          src={registerPageImage.aversysLogoWhiteBg}
          alt="logo is not found"
        />
        <h2>Регистрация пользования</h2>
        <p>
          Уже зарегистрированы? <span>Войти</span>
        </p>
      </div>
      {/* <button
        onClick={() => {
          dispatch(getErrorsList);
        }}
      >
        list
      </button>
      <button
        onClick={() => {
          console.log(errorList.data);
        }}
      >
        const
      </button> */}
    </div>
  );
};

export default RegisterPage;
