import { useSelector } from "react-redux";

import MarkerIcon from "../../assets/marker.png";
import MarkerIconSelected from "../../assets/marker-selected.png";

import "./styles.css";

const Marker = ({ petshop }) => {
  const { petshopMapSelected } = useSelector((state) => state.shop);

  return (
    <div>
      <img
        src={
          petshopMapSelected === petshop._id ? MarkerIconSelected : MarkerIcon
        }
        alt="marker"
      />
      <img
        src={petshop.logo}
        alt="petlove logo"
        className="img-fluid img-marker"
      />
    </div>
  );
};

export default Marker;
