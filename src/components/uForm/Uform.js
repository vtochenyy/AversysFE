import { Button, Checkbox, Form, Input, notification } from "antd";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { root } from "../../api/root_api";
import { appropriation } from "../../redux/reducers/autorizationData";
import { createRegisterState } from "../../redux/reducers/registerReducer";
import { autorizedType, registerType } from "../../variables/formTypes";
import style from "./style.module.scss";

const Uform = (formType) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [politicState, setPoliticState] = useState(false);

  if (formType === autorizedType) {
    return (
      <div className={style.loginFormBlock}>
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
      </div>
    );
  } else if (formType === registerType) {
    return (
      <div className={style.registerFormBlock}>
        <Form
          onFinish={(data) => {
            if (!politicState) {
              notification.open({
                message:
                  "Необходимо ознакомиться с политикой конфиденциальности",
                placement: "topRight",
                type: "error",
                btn: true,
              });
            } else {
              if (data.password.includes(" ") || data.login.includes(" ")) {
                notification.open({
                  message: "Пробелы недопустимы в полях логина и пароля",
                  placement: "topRight",
                  type: "error",
                  btn: true,
                });
              } else {
                //можно сделать onclose или таймаут
                notification.open({
                  message: "Пользователь успешно зарегестрирован",
                  placement: "topRight",
                  type: "success",
                  btn: true,
                });
                dispatch(createRegisterState(data));
                return navigation("/autorized");
              }
            }
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
            <Checkbox
              checked={politicState}
              onChange={() => {
                setPoliticState(!politicState);
              }}
              autoFocus={false}
              className={style.checkbox}
            />
            <p className={style.politicText}>
              Я ознакомлен(а) с <span>Политикой конфиденциальности</span> и
              принимаю правила пользования
            </p>
          </div>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form>
      </div>
    );
  }
};

export default Uform;
