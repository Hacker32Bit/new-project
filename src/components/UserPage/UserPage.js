import "./user-page.css";

function UserPage(props) {

  const { username, email, image } = props.userData;

  const style = {}

  if (props.theme){
    style.backgroundColor = "#dcdde1"
    style.color = "black"
  }

  return (
    <div className="container" style={style}>
      <h1>Welcome back, {username}!</h1>
      <img
        className="profile-photo"
        alt="profile"
        src={image ? image : require("../../img/guest-photo.png")}
      ></img>
      <h3>Your email: {email}</h3>
      <button onClick={props.onLogout}>LogOut</button>
    </div>
  );
}

export default UserPage;
