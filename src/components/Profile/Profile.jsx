import {Avatar, ProfileDescription, UserName, UserLocation, UserTag} from './Profile.styled';
import PropTypes from 'prop-types';
import { Stats } from 'components/Profile/Stats/Stats';

export const Profile = ({ username, tag, location, avatar, stats }) => {

    return <ProfileDescription >
            <Avatar
                src={avatar}
                alt={username}
            />
            <UserName>{username}</UserName>
            <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
        <Stats
            followers={stats.followers}
            views={stats.views}
            likes={stats.likes} />
        </ProfileDescription>
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};