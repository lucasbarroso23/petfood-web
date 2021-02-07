import "./styles.css";

const Petshop = () => {
  return (
    <li className="petshop d-inline-block">
      <div className="d-inline-block">
        <img
          src="https://avatars.githubusercontent.com/u/4692034?s=400&v=4"
          alt="petlove logo"
          className="img-fluid"
        />
      </div>

      <div className="d-inline-block pl-3 align-botton">
        <b>Petlove</b>
        <div className="petshop-infos">
          <span className="mdi mdi-star"></span>
          <text>
            <b>2,8</b>
          </text>
          <span className="mdi mdi-cash-usd-outline"></span>
          <text>$$$</text>
          <span className="mdi mdi-crosshairs-gps"></span>
          <text>2,9km</text>
        </div>
        <label className="badge badge-primary">Frete Grátis</label>
      </div>
    </li>
  );
};

export default Petshop;
