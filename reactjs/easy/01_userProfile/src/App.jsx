import "./App.css";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  const userProfileInfo = {
    name: "Jane Doe",
    bio: "Frontend developer who loves React and coffee ☕️, loves to create beautiful and functional user interfaces. Passionate about learning new technologies and sharing knowledge with others.",
    userImage:
      "https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg",
  };
  return (
    <div className="app-container">
      <UserProfile userProfileInfo={userProfileInfo} />
    </div>
  );
}

export default App;
