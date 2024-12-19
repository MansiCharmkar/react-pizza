function Footer() {
  const footerStyle = {
    textAlign: "center",
    paddingBottom: "5rem",
  };
  const orderBtnStyle = {
    textAlign: "center",
    padding: "1rem",
    fontSize: "17px",
    margin: "2rem",
    borderRadius: "5px",
    backgroundColor: "#ffd43b",
    border: "none",
    cursor: "pointer",
  };
  return (
    <div style={footerStyle}>
      <p>we&apos;r open untill 20:00. Come Visit and order online.</p>
      <button style={orderBtnStyle}>Order Now</button>
    </div>
  );
}
export default Footer;
