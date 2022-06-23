import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticsTitle, StatisticsList, StatisticsListItem } from './Statistics.styled';

export const Statistics = ({ data }) => {
    return <StatisticsContainer>
        <StatisticsTitle>Upload stats</StatisticsTitle>
        <StatisticsList>
            {data.map(({id, label, percentage}) => 
                <StatisticsListItem key={id}>
                    <p>{label}</p>
                    <p>{percentage}</p>
                </StatisticsListItem>
            )}
        </StatisticsList>
    </StatisticsContainer>
}

Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
}