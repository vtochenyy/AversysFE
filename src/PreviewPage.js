import { Button } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const PreviewPage = () => {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("http://localhost:9876/users/register", {
            firstName: "Eqw",
            lastName: "AsD",
            login: "Kolya",
            password: "23nlnf",
            age: 24,
          });
        }}
        style={{ margin: "20px" }}
        type="primary"
      >
        dsd
      </Button>
      <Link to="/register">
        <Button style={{ margin: "20px" }} type="default">
          Register
        </Button>
      </Link>
      <Link to="/autorized">
        <Button style={{ margin: "20px" }} type="dashed">
          Authorized
        </Button>
      </Link>
      <Link to="/mainPage">
        <Button style={{ margin: "20px" }} type="ghost">
          MainPage
        </Button>
        <Link to="/persArea">
          <Button>Personal Area</Button>
        </Link>
      </Link>
    </div>
  );
};

export default PreviewPage;
