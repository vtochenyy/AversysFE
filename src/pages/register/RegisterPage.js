import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRegisterState } from "../../redux/reducers/registerReducer";
import style from "./style.module.scss";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const [registerState, setRegisterState] = useState();
  const checkFuncForRegisterData = useSelector((state) => {
    console.log(state.registerData.registerInfo);
  });
  return (
    <div>
      <div className={style.check}>register check</div>
      <div>
        <Form
          onFinish={(data) => {
            setRegisterState(data);
          }}
        >
          <Form.Item name="firstName">
            <Input placeholder="Имя" />
          </Form.Item>
          <Form.Item name="lastName">
            <Input placeholder="Фамилия" />
          </Form.Item>
          <Form.Item name="login">
            <Input placeholder="Логин" />
          </Form.Item>
          <Form.Item name="password">
            <Input placeholder="Пароль" />
          </Form.Item>
          <Button
            onClick={() => {
              dispatch(createRegisterState(registerState));
            }}
            htmlType="submit"
          >
            фыв
          </Button>
        </Form>
      </div>
      <div>{checkFuncForRegisterData}</div>
    </div>
  );
};

export default RegisterPage;
