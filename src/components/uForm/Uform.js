import { Button, Checkbox, Form, Input, notification, Tooltip } from "antd";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { root } from "../../api/root_api";
import { appropriation } from "../../redux/reducers/autorizationData";
import { createRegisterState } from "../../redux/reducers/registerReducer";
import { AUTORIZATIONTYPE, REGISTERTYPE } from "../../variables/formTypes";
import style from "./style.module.scss";

const Uform = (formType) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [politicState, setPoliticState] = useState(false);
  const [politicMessage, setPoliticMessage] = useState(false);
  const [checkForSpace, setCheckForSpace] = useState(false);
  const [checkAutorization, setCheckAutorization] = useState(false);
  if (formType === AUTORIZATIONTYPE) {
    return (
      <div className={style.loginFormBlock}>
        <Form
          className={style.formStyles}
          onFinish={(loginData) => {
            axios
              .post(root.LOGIN, loginData, {withCredentials: true})
              .then((e) => {
                if (e.data.data.isAuth) {
                  dispatch(appropriation(e.data.data.user));
                  return navigation("/persArea");
                }
              })
              .catch(() => {
                setCheckAutorization(true);
              });
          }}
        >
          <Tooltip
            placement="rightTop"
            color="#A62F00"
            open={checkAutorization}
            title={"Неверное введем логин или пароль"}
          >
            <Form.Item name="login">
              <Input
                status={checkAutorization && "error"}
                placeholder="Введите логин"
              />
            </Form.Item>
          </Tooltip>
          <Form.Item name="password">
            <Input
              status={checkAutorization && "error"}
              type="password"
              placeholder="Введите пароль"
            />
          </Form.Item>
          <Button type="ghost" htmlType="submit">
            Вход
          </Button>
        </Form>
      </div>
    );
  } else if (formType === REGISTERTYPE) {
    return (
      <div className={style.registerFormBlock}>
        <Form
          onFinish={(data) => {
            if (!politicState) {
              setPoliticMessage(true);
            } else {
              if (data.password.includes(" ") || data.login.includes(" ")) {
                setCheckForSpace(true);
              } else {
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
          <Tooltip
            color="#A62F00"
            placement="rightTop"
            open={checkForSpace}
            title={"Пробелы недопустимы в полях логина и пароля"}
          >
            <Form.Item name="login">
              <Input
                status={checkForSpace && "error"}
                spellCheck="true"
                placeholder="Логин"
              />
            </Form.Item>
          </Tooltip>
          <Tooltip
            placement="rightTop"
            color="#A62F00"
            open={checkForSpace}
            title={"Пробелы недопустимы в полях логина и пароля"}
          >
            <Form.Item name="password">
              <Input
                status={checkForSpace && "error"}
                type="password"
                placeholder="Пароль"
              />
            </Form.Item>
          </Tooltip>
          <div className={style.politicBlock}>
            <Tooltip
              placement="bottom"
              color="#A62F00"
              open={politicMessage}
              title={"Необходимо ознакомиться с политикой конфиденциальности"}
            >
              <Checkbox
                checked={politicState}
                onChange={() => {
                  setPoliticState(!politicState);
                }}
                autoFocus={false}
                className={style.checkbox}
              />
            </Tooltip>
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
