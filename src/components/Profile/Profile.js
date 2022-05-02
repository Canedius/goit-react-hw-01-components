import PropTypes from 'prop-types';
import s from './Profile.module.css';
export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <div>
        <ul className={s.stats}>
          <li className={s.wrap}>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li className={s.wrap}>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li className={s.wrap}>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stast: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    avatlikesar: PropTypes.number,
  }),
};
