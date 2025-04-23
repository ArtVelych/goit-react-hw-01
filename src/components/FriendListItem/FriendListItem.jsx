import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.friendListItem}>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="80" />
      <p className={css.friendName}>{name}</p>
      {isOnline ? (
        <p
          className={clsx(css.friendStatus, {
            [css.friendIsOnline]: isOnline,
          })}
        >
          Online
        </p>
      ) : (
        <p className={css.friendStatus}>Offline</p>
      )}
    </li>
  );
}
