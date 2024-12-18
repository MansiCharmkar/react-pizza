const headingStyle = {
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "400",
  paddingBottom: "3rem",
  color: "#ffd43b",
};
function Header() {
  return (
    <div>
      <h1 style={headingStyle}>Fast React Pizza Co.</h1>
    </div>
  );
}
export default Header;
