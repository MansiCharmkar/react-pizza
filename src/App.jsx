import "./global.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const appStyle = {
  padding: "0 9rem",
  paddingTop: "4rem",
  backgroundColor: "#f7f2e9",
  color: "#27272a",
};
function App() {
  // 1. Header
  // 2. Menu
  //    a. PizzaCard
  // 3. Footer
  return (
    <div style={appStyle}>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
