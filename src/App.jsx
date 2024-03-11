import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";

const App = () => {
  return (
    <div className="app-container">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
