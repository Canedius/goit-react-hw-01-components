import PropTypes from 'prop-types';
import s from './Statistics.module.css';
export default function Statistics({ stats, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={s.item} key={id}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
  title: PropTypes.string,
};
