import { Button, Form, Input } from "antd";
import axios from "axios";
import { root } from "../../api/root_api";
// import { useDispatch } from "react-redux";
import style from "./style.module.scss";
const RegisterPage = () => {
  // const dispatch = useDispatch();
  return (
    <div>
      <div className={style.check}>register checyk</div>
      <div>
        <Form
          onFinish={(data) => {
            axios.post(root.REGISTER, data);
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
          <Button htmlType="submit">фыв</Button>
        </Form>
      </div>
      <button>sad</button>
    </div>
  );
};

export default RegisterPage;
