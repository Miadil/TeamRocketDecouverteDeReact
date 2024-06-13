import { Link } from "react-router-dom";

function DisplayCard({ name, image, id }) {
  const urlCharacter = `/characters/${id}`;
  return (
    <Link to={urlCharacter}>
      <div className="globalCard">
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
    </Link>
  );
}

export default DisplayCard;
