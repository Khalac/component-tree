import HeaderNavigation from "./_components/HeaderNavigation/HeaderNavigation";
import SearchInput from "./_components/SearchInput/SearchInput";
import ShoppingCart from "./_components/ShoppingCart/ShoppingCart";

const HeaderIsLogin = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      User is login
      <HeaderNavigation />
      <div style={{ display: "flex", gap: "30px" }}>
        <div>image logo</div>
        <SearchInput />
        <ShoppingCart />
      </div>
    </div>
  );
};
export default HeaderIsLogin;
