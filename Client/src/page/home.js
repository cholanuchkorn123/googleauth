import React from "react";
import { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
export function Home({ setProfile, profile }) {
  const clientid =
    "723817271422-g0beesp0f0769untnf2aulpchhtfk630.apps.googleusercontent.com";
  const imgbg = (img) => {
    if (img == null) {
      return "https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    } else return img;
  };
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientid: clientid,
        scope: "",
      });
      gapi.load("client:auth2", initClient);
    };
  }, [profile]);
  const onSuccess = (res) => {
    setProfile(res.profileObj);
    console.log(res, "success");
  };
  const onFailure = (res) => {
    console.log(res, "failed");
  };
  const logout = () => {
    setProfile([]);
  };
  console.log(profile.length);
  return (
    <div className="bg-[#f0e5c0] w-screen h-screen flex items-center flex-col ">
      <h1 className="text-[#4a473d] text-[35px] font-semibold mt-[50px] mb-[30px]">
        Google login
      </h1>
      <br />
      {(profile.length !== 0 && (
        <div className="flex flex-col gap-[20px] items-center">
          <img
            src={imgbg(profile.imageUrl)}
            alt="user image"
            className="w-[150px] h-[150px] rounded-[50%]"
          />
          <h2 className="text-[#4a473d] text-[20px] font-medium">
            Name: {profile.name}
          </h2>
          <h2 className="text-[#4a473d] text-[20px] font-medium">
            Email: {profile.email}
          </h2>
          <br />
          <br />
          <GoogleLogout
            clientId={clientid}
            buttonText="Log out"
            onLogoutSuccess={logout}
          />
        </div>
      )) ||
        (profile.length == 0 && (
          <GoogleLogin
            className=" bg-[#fff7d9] items-center"
            clientId={clientid}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        ))}
    </div>
  );
}
