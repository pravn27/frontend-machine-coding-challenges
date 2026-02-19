import { profileCard_mockData } from "../mock-data.js";

const ProfileCardBase = ({ name, role, avatarUrl }) => {
  return (
    <div className="profile-card-container">
      <h2>{name}</h2>
      <p className="profile-role">{role}</p>
      <img
        src={avatarUrl}
        alt="profile photo of Praveen S"
        style={{
          width: "80px",
          height: "80px",
          border: "2px solid blue",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

const ProfileCard = () => {
  const { name, role, avatarUrl } = profileCard_mockData;
  return (
    <>
      <h1>Challenge 2</h1>
      <ProfileCardBase name={name} role={role} avatarUrl={avatarUrl} />
    </>
  );
};

export default ProfileCard;
