import Pizza from "./pizza";
const menuBoxStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  marginTop: "1rem",
};
const menuHeader = {
  textAlign: "center",
};

const menuHeaderStyle = {
  textTransform: "uppercase",
  padding: "1rem 0",
  borderTop: "3px solid #27272a",
  borderBottom: "3px solid #27272a",
  display: "inline-block",
  marginBottom: "1rem",
  // paddingLeft: "28rem",
};
const paragraphStyle = {
  margin: "0 11rem",
  textAlign: "center",
  paddingTop: "2rem",
  paddingBottom: "2rem",
};
function Menu() {
  return (
    <div>
      <div style={menuHeader}>
        <h2 style={menuHeaderStyle}>Our Menu</h2>
        <p style={paragraphStyle}>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          over stone oven, all organic, all delicious.
        </p>
      </div>
      <div style={menuBoxStyle}>
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
      </div>
    </div>
  );
}

export default Menu;
