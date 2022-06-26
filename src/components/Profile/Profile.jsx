import PropTypes from 'prop-types';
import { UserAvatar } from '../common/UserAvatar.styled';
import { ProfileContainer, Username, UserTag, UserLocation, StatsList, StatsListItem, StatsListLabel, StatsListValue } from './Profile.styled';

export const Profile = ({ user }) => {
    const { username, tag, location, avatar, stats } = user;
    return <ProfileContainer>
            <UserAvatar
                src={avatar}
                alt={username}
            />
            <Username>{username}</Username>
            <UserTag>@{tag}</UserTag>
            <UserLocation>{location}</UserLocation>
        <StatsList>
            <StatsListItem>
                <StatsListLabel>Followers</StatsListLabel>
                <StatsListValue>{stats.followers}</StatsListValue>
            </StatsListItem>
            <StatsListItem>
                <StatsListLabel>Views</StatsListLabel>
                <StatsListValue>{stats.views}</StatsListValue>
            </StatsListItem>
            <StatsListItem>
                <StatsListLabel>Likes</StatsListLabel>
                <StatsListValue>{stats.likes}</StatsListValue>
            </StatsListItem>
        </StatsList>
    </ProfileContainer>
}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
        })
    }).isRequired
}