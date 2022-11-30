import { Button, Form, Input } from "antd";
import axios from "axios";

const AutorizedPage = () => {
  return (
    <div>
      <h1>AUTORIZED</h1>
      <Form
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
        <Button htmlType="submit">Вход</Button>
      </Form>
    </div>
  );
};

export default AutorizedPage;
