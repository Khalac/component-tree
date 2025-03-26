import { HomepageComponents } from "../../components/HomepageComponents/ui/HomepageComponents";
import IsLoginLayout from "../../components/layout/IsLogInLayout/IsLoginLayout";
import { useSelector } from "react-redux";
import NotLoginLayout from "../../components/layout/NotLogInLayout/NotLoginLayout";
const Homepage = () => {
  const isAuth = useSelector((state: any) => state.auth);
  console.log(isAuth.isLogin);
  if (!isAuth.isLogin) {
    return (
      <div>
        <NotLoginLayout>
          <HomepageComponents />
        </NotLoginLayout>
      </div>
    );
  }
  return (
    <div>
      <IsLoginLayout>
        <HomepageComponents />
      </IsLoginLayout>
    </div>
  );
};

export default Homepage;
