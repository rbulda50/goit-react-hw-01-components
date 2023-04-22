import PropTypes from 'prop-types';
import { Item, StatusOffline, StatusOnline, Name, Avatar } from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
    return (
        friends.map(({ avatar, name, isOnline, id }) =>
            <Item key={id}>
                {isOnline ? <StatusOnline /> : <StatusOffline />}
                <Avatar src={avatar} alt={name} width="48" />
                <Name>{name}</Name>
            </Item>
        )
    )
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};

