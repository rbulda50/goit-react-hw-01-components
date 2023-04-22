import { StatItem } from "../StatItem/StatItem";
import PropTypes from 'prop-types';
import { Stats } from './StatList.styled';

export const StatList = ({ statsData }) => {
    return (
        <Stats>
            <StatItem statsData={statsData}></StatItem>
        </Stats>
    )
};

StatList.propTypes = {
    statsData: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};