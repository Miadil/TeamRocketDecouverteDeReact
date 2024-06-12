/* eslint-disable react/prop-types */
import "./Commande.css";

// function Commande(props) {
function Commande({ nbCommande, nbBiere, marque, nbTable }) {
  // console.log("props Commande :", props);

  // const { nbCommande, nbBiere, marque, nbTable } = props;

  return (
    <div className="globalCommande">
      <h3> numero de commande {nbCommande}</h3>
      <ul>
        <li>nombre de biere :{nbBiere}</li>
        <li>marque : {marque} </li>
        <li>numero de table : {nbTable}</li>
      </ul>
    </div>
  );
}
export default Commande;
