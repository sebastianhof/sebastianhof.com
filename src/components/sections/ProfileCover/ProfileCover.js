import React from "react";
import cover from "../../../images/cover-image.jpg";

const ProfileCover = () => {
  return (
    <div className="h-60 w-full">
      <img
        src={cover}
        alt="cover"
        className="w-full h-full object-cover object-center"
      />
      {/* Photo by <a href="https://unsplash.com/@anikeevxo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vladimir Anikeev</a> on <a href="https://unsplash.com/s/photos/cloud?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
    </div>
  );
};

export default ProfileCover;
