import { Table } from "antd";
import ImageNavigation from "../../components/navImages/ImageNavigation";
import { personalPageImage } from "../../images/imagesConfig";
import style from "./style.module.scss";

const PersonalArea = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];
  return (
    <div className={style.pageStructure}>
      <div className={style.lastActivitiesBlock}>
        <h3>Добро пожаловать "имя пользователя"</h3>
        <p>Последние активности</p>
        <Table
          pagination={false}
          columns={columns}
          dataSource={data}
          size="middle"
        />
      </div>
      <div className={style.userInfoBlock}>
        <span>AVERSYS</span>
        <h2>
          Личный кабинет <br />
          пользователя
        </h2>
        <img src={personalPageImage.userImage} alt="UserImg is not found " />
        <p>Имя пользователя</p>
        <p>Фамилия пользователя</p>
        <p>Занимаемая должность</p>
        <ImageNavigation />
      </div>
    </div>
  );
};

export default PersonalArea;
