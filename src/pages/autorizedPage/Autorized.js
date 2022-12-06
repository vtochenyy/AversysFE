import { Button, Form, Input } from "antd";
import axios from "axios";
import ImageNavigation from "../../components/navImages/ImageNavigation";
import { authorizedConfig } from "./authorizedConfig";
import style from "./style.module.scss";
const AutorizedPage = () => {
  return (
    <div className={style.mainBlockAutorized}>
      <div className={style.loginFormBlock}>
        <h2>AVERSYS</h2>
        <span>Авторизация пользователя</span>
        <div>
          <ImageNavigation />
        </div>
        <Form
          className={style.formStyles}
          onFinish={(loginData) => {
            console.log(loginData);
            axios.post("http://localhost:9876/users/login", loginData);
          }}
        >
          <Form.Item name="login">
            <Input placeholder="Введите логин" />
          </Form.Item>
          <Form.Item name="password">
            <Input placeholder="Введите пароль" />
          </Form.Item>
          <Button type="ghost" htmlType="submit">
            Вход
          </Button>
        </Form>
        <div className={style.registerBlock}>
          <span>Регистрация</span>
          <span>|</span>
          <span>Забыли пароль?</span>
        </div>
      </div>
      <div className={style.authorizedImage}>
        <img
          src={authorizedConfig.authorizedImage}
          alt="authorized  not found"
        />
      </div>
    </div>
  );
};

export default AutorizedPage;
