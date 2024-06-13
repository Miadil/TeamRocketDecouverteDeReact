function DisplayCard({ name, image }) {
  return (
    <div className="globalCard">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default DisplayCard;
