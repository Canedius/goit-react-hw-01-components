import PropTypes from 'prop-types';
import FriendListitem from './FriendListItem';
import s from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={s.friendlist}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <FriendListitem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
