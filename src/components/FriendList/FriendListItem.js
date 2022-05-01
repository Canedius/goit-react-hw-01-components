import PropTypes from 'prop-types';
import s from './FriendList.module.css';
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={s.wrap}>
      {isOnline ? (
        <span className={s.online}>{isOnline}online</span>
      ) : (
        <span className={s.ofline}>{isOnline}ofline</span>
      )}
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>co
    </div>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
