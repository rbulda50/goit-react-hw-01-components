import PropTypes from 'prop-types';
import { StatList } from './StatList/StatList';
import { Title, StatisticsSection } from './Statistics.styled';

export const Statistics = ({ title, statsData }) => {
    return (
        <StatisticsSection>
                {title && <Title>{title}</Title>}
                <StatList statsData={statsData} />
        </StatisticsSection>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    statsData: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};



