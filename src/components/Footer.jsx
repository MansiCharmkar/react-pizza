function Footer() {
  const footerBottomStyle = {
    textAlign: "center",
    paddingBottom: "5rem",
  };
  const buttonStyle = {
    textAlign: "center",
    padding: "1rem",
    fontSize: "17px",
    margin: "2rem",
    borderRadius: "5px",
    backgroundColor: "#ffd43b",
    border: "none",
  };
  return (
    <div style={footerBottomStyle}>
      <p>we&apos;r open untill 20:00. Come Visit and order online.</p>
      <button style={buttonStyle}>Order Now</button>
    </div>
  );
}
export default Footer;
