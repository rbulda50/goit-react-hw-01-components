import { getRandomHexColor } from "../getRandomHexColor"
import PropTypes from 'prop-types';
import { Item, Label, Percents } from './StatItem.styled';

export const StatItem = ({ statsData }) => {
    return statsData.map(({ id, label, percentage }) => (
        <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{label}</Label>
            <Percents>{percentage}%</Percents>
        </Item>
    ))
};

StatItem.propTypes = {
    statsData: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};

