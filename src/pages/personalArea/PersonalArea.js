import { Table } from "antd";
import { useSelector } from "react-redux";
import ImageNavigation from "../../components/navImages/ImageNavigation";
import { personalPageImage } from "../../images/imagesConfig";
import style from "./style.module.scss";

const PersonalArea = () => {
  const userData = useSelector((state) => {
    return state.autorizationData;
  });
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
        <h3>Добро пожаловать {userData.firstname}</h3>
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
        <p>{userData.firstname}</p>
        <p>{userData.lastname}</p>
        <p>Занимаемая должность</p>
        <ImageNavigation />
      </div>
    </div>
  );
};

export default PersonalArea;
