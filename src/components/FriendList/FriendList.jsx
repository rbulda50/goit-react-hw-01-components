import { FriendListItem } from './FriendListItem/FriendListItem';
import { Friends } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (<Friends>
                <FriendListItem friends={friends} />
        </Friends>)
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};