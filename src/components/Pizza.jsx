import pizzaData from "../data/data";

const cardStyle = {
  // backgroundColor: "grey",
  display: "flex",
  gap: "1rem",
  baxShadow: "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;",
  padding: "1rem",
};
const imgStyle = {
  height: "9rem",
};
const detailsStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

function Pizza(props) {
  const { name, ingredients, price, photoName, soldOut } = props.pizzaData;
  return (
    <div
      style={!soldOut ? cardStyle : { ...cardStyle, filter: "grayscale(1)" }}
    >
      <div>
        <img style={imgStyle} src={`./${photoName}`} alt={`${name}`} />
      </div>
      <div style={detailsStyle}>
        <p>{name}</p>
        <p>{ingredients}</p>
        <p style={{ marginTop: "auto" }}>{soldOut ? "SOLDOUT" : `${price}`}</p>
      </div>
    </div>
  );
}
export default Pizza;
