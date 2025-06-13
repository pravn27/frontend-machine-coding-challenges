import { useState } from "react";
import "./styled.css";

const UserProfile = () => {
  const [isShowBio, setIsShowBio] = useState(false);
  const userProfileInfo = {
    name: "Jane Doe",
    bio: "Frontend developer who loves React and coffee ☕️, loves to create beautiful and functional user interfaces. Passionate about learning new technologies and sharing knowledge with others.",
    image: "https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg",
  };

  const handleShowHideBio = () => {
    setIsShowBio(!isShowBio);
  };

  const renderBioButtonText = isShowBio ? "Hide Bio" : "Show Bio";

  return (
    <div className="user-profile-container">
      <img
        src={userProfileInfo.image}
        alt="user profile image"
        className="user-profile-avatar"
      />
      <h1 className="user-profile-name">{userProfileInfo.name}</h1>
      <button className="showHideBioBtn" onClick={handleShowHideBio}>
        {renderBioButtonText}
      </button>
      {isShowBio && <p className="user-profile-bio">{userProfileInfo.bio}</p>}
    </div>
  );
};

export default UserProfile;
