//props are not meant to be changed
function MugshotCard(props) {
  return (
    <>
      <h3>MugshotCard {props.name}</h3>
      <p>{props.role ? props.role : "No role"}</p>
    </>
  );
}
export default MugshotCard;
