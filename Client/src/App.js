import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
function App() {
  const clientid =
    "723817271422-g0beesp0f0769untnf2aulpchhtfk630.apps.googleusercontent.com";
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientid: clientid,
        scope: "",
      });
      gapi.load("client:auth2", initClient);
    };
  }, []);
  const onSuccess = (res) => {
    setProfile(res.profileObj);
    console.log(profile);
    console.log(profile.length);
    console.log(res, "success");
  };
  const onFailure = (res) => {
    console.log(res, "failed");
  };
  const logout = () => {
    setProfile(null);
  };
  return (
    <div className="App">
      <h1>Google login</h1>
      <br />
      {(profile.length !== 0 && (
        <div>
          <img src={profile.imageUrl} alt="user image" />
          <h2>Name: {profile.name}</h2>
          <h2>Email: {profile.email}</h2>
          <br />
          <br />
          <GoogleLogout
            clientId={clientid}
            buttonText="Log out"
            onLogoutSuccess={logout}
          />
        </div>
      )) || (
        <GoogleLogin
          clientId={clientid}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )}
    </div>
  );
}

export default App;
