import "./styles.css";

import MarkerIcon from "../../assets/marker.png";
import MarkerIconSelected from "../../assets/marker-selected.png";

const Marker = () => {
  return (
    <div>
      <img src={MarkerIconSelected} alt="marker" />
      <img
        src="https://avatars.githubusercontent.com/u/4692034?s=400&v=4"
        alt="petlove logo"
        className="img-fluid img-marker"
      />
    </div>
  );
};

export default Marker;
