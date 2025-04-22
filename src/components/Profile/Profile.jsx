import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileContainer}>
      <div className={css.basicInfo}>
        <div className={css.profileAvatarContainer}>
          <img className={css.profileAvatar} src={image} alt="User avatar" />
        </div>
        <p className={css.userNameTitle}>{name}</p>
        <p className={css.basicInfoText}>@{tag}</p>
        <p className={css.basicInfoText}>{location}</p>
      </div>
      <ul className={css.userStatsInfo}>
        <li className={css.userStatsInfoItem}>
          <span className={css.userStatsInfoText}>Followers</span>
          <span className={css.userStatsInfoValue}>{stats.followers}</span>
        </li>
        <li className={css.userStatsInfoItem}>
          <span className={css.userStatsInfoText}>Views</span>
          <span className={css.userStatsInfoValue}>{stats.views}</span>
        </li>
        <li className={css.userStatsInfoItem}>
          <span className={css.userStatsInfoText}>Likes</span>
          <span className={css.userStatsInfoValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
