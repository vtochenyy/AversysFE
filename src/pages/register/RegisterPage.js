import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.scss";
// import { getErrorsList } from "../../redux/reducers/errorList";
import { registerPageImage } from "../../images/imagesConfig";
import { createRegisterState } from "../../redux/reducers/registerReducer";
import ImageNavigation from "../../components/navImages/ImageNavigation";
import { Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const dispatch = useDispatch();
  // const errorList = useSelector((state) => {
  //   return state.errorList.errorListData;
  // });
  const navigation = useNavigate();

  return (
    <div className={style.registerMainBlock}>
      <div className={style.userInputsBlock}>
        <div className={style.inputBlockContent}>
          <img
            src={registerPageImage.loadImage}
            alt="loaded images is not found"
          />
          <Form
            onFinish={(data) => {
              if (data.password.includes(" ") || data.login.includes(" ")) {
                alert("error");
              } else {
                alert("success");
                dispatch(createRegisterState(data));
                return navigation("/autorized");
              }
              console.log(Object.values(data));
            }}
          >
            <Form.Item name="firstname">
              <Input placeholder="Имя" />
            </Form.Item>
            <Form.Item name="lastname">
              <Input placeholder="Фамилия" />
            </Form.Item>
            <Form.Item name="middlename">
              <Input placeholder="Отчество" />
            </Form.Item>
            <Form.Item name="email">
              <Input placeholder="Ваша электронная почта" />
            </Form.Item>
            <Form.Item name="login">
              <Input placeholder="Логин" />
            </Form.Item>
            <Form.Item name="password">
              <Input type="password" placeholder="Пароль" />
            </Form.Item>
            <div className={style.politicBlock}>
              <Checkbox autoFocus={false} className={style.checkbox} />
              <p className={style.politicText}>
                Я ознакомлен(а) с <span>Политикой конфиденциальности</span> и
                принимаю правила пользования
              </p>
            </div>
            <Button type="primary" htmlType="submit">
              Отправить
            </Button>
          </Form>
          <ImageNavigation />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
