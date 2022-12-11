import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.scss";
import { createRegisterState } from "../../redux/reducers/registerReducer";
import { getErrorsList } from "../../redux/reducers/errorList";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const errorList = useSelector((state) => {
    return state.errorList.errorListData;
  });
  return (
    <div>
      <div className={style.check}>register check</div>
      <div>
        <Form
          onFinish={(data) => {
            dispatch(createRegisterState(data));
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
          <Button htmlType="submit">Отправить</Button>
        </Form>
      </div>

      <button
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
      </button>
    </div>
  );
};

export default RegisterPage;
