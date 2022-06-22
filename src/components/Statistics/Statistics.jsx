import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ data }) => {
    return <section>
        <h2>Upload stats</h2>

        <ul className={css.statList}>
            {data.map((item) => 
                <li key={item.id}>
                    <p>{item.label}</p>
                    <p>{item.percentage}</p>
                </li>
            )}
        </ul>
    </section>
}

Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
}