export default function logout(props) {
  props.setIsAuthenticated(true);

  fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/logout", {
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      props.setIsAuthenticated(false);
      // data.status = "Status: Logged Out Via API";
    })
    .catch((err) => {
      console.error("Login Error: ", err);
      props.setIsAuthenticated(false);
      // data.status = "Status: Logged Out";
    });
}
