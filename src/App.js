import "./styles.css";

const SaramTitle = () => {
  return (
    <>
      <h1>목록</h1>
    </>
  );
};

const Menu = (props) => {
  return (
    <h3>
      {props.oh} :{props.item}
    </h3>
  );
};

const MenuItems = ["짜장면", "짬뽕", "팔보채", "마파두부", "탕수육"];

export default function App() {
  return (
    <div className="App">
      <SaramTitle />
      {MenuItems.map((item) => {
        return <Menu oh="여름 특별식" item={item} />;
      })}
    </div>
  );
}
