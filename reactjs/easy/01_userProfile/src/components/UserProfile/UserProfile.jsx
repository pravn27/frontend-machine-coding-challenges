import { useState } from "react";
import "./styled.css";

const UserProfile = ({ userProfileInfo }) => {
  const [isShowBio, setIsShowBio] = useState(false);
  const { name, userImage, bio } = userProfileInfo;

  const handleShowHideBio = () => {
    setIsShowBio(!isShowBio);
  };

  const renderBioButtonText = isShowBio ? "Hide Bio" : "Show Bio";

  return (
    <div className="user-profile-container">
      <img
        src={userImage}
        alt="user profile image"
        className="user-profile-avatar"
      />
      <h1 className="user-profile-name">{name}</h1>
      <button className="showHideBioBtn" onClick={handleShowHideBio}>
        {renderBioButtonText}
      </button>
      {isShowBio && <p className="user-profile-bio">{bio}</p>}
    </div>
  );
};

export default UserProfile;
