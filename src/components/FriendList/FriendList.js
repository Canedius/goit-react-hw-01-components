import PropTypes from 'prop-types';
import FriendListitem from './FriendListItem';
import s from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={s.friendlist}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={s.item} key={id}>
          <FriendListitem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
