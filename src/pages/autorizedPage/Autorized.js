import { Button, Form, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { root } from "../../api/root_api";
import ImageNavigation from "../../components/navImages/ImageNavigation";
import { imagesAuthorized } from "../../images/imagesConfig";
import { appropriation } from "../../redux/reducers/autorizationData";
import style from "./style.module.scss";
const AutorizedPage = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
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
            axios.post(root.LOGIN, loginData).then((e) => {
              if (e.data.data.isAuth) {
                dispatch(appropriation(e.data.data.user));
                return navigation("/persArea");
              }
            });
          }}
        >
          <Form.Item name="login">
            <Input placeholder="Введите логин" />
          </Form.Item>
          <Form.Item name="password">
            <Input type="password" placeholder="Введите пароль" />
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
          src={imagesAuthorized.authorizedImage}
          alt="authorized  not found"
        />
      </div>
    </div>
  );
};

export default AutorizedPage;
