// import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.basicInfo}>
        <div className={css.profileAvatarContainer}>
          <img className={css.profileAvatar} src={image} alt="User avatar" />
        </div>
        <p className={css.userNameTitle}>{name}</p>
        <p className={css.basicInfoText}>{`@${tag}`}</p>
        <p className={css.basicInfoText}>{location}</p>
      </div>
      <ul className={css.userStatsInfo}>
        <li className={css.userStatsInfoItem}>
          <span>Followers</span>
          <span className={css.userStatsInfoValue}>{stats.followers}</span>
        </li>
        <li className={css.userStatsInfoItem}>
          <span>Views</span>
          <span className={css.userStatsInfoValue}>{stats.views}</span>
        </li>
        <li className={css.userStatsInfoItem}>
          <span>Likes</span>
          <span className={css.userStatsInfoValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
