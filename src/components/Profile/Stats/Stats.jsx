import { StatsContainer, StatsItem, Followers, Views, Itemkes } from './Stats.styled';
import PropTypes from 'prop-types';

export const Stats = ({ followers, views, likes }) => {
    return <StatsContainer>
        <StatsItem>
            <Followers>Followers</Followers>
            <Followers>{followers}</Followers>
        </StatsItem>
        <StatsItem>
            <Views>Views</Views>
            <Views>{views}</Views>
        </StatsItem>
        <StatsItem>
            <Itemkes>StatsItemkes</Itemkes>
            <Itemkes>{likes}</Itemkes>
        </StatsItem>
    </StatsContainer>
};

Stats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};