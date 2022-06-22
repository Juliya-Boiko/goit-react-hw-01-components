import PropTypes from 'prop-types';
import { ProfileContainer, Avatar, Username, UserTag, UserLocation, StatsList, StatsListItem, StatsListLabel, StatsListValue } from './Profile.styled';

export const Profile = ({ user }) => {
    return <ProfileContainer>
            <Avatar
                src={user.avatar}
                alt={user.username}
            />
            <Username>{user.username}</Username>
            <UserTag>@{user.tag}</UserTag>
            <UserLocation>{user.location}</UserLocation>
        <StatsList>
            <StatsListItem>
                <StatsListLabel>Followers</StatsListLabel>
                <StatsListValue>{user.stats.followers}</StatsListValue>
            </StatsListItem>
            <StatsListItem>
                <StatsListLabel>Views</StatsListLabel>
                <StatsListValue>{user.stats.views}</StatsListValue>
            </StatsListItem>
            <StatsListItem>
                <StatsListLabel>Likes</StatsListLabel>
                <StatsListValue>{user.stats.likes}</StatsListValue>
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
// //=================STULES
// // import styles from './UserInfo.module.css';

//     // <div class="description">
//     //     <img
//     //     src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//     //     alt="User avatar"
//     //     class="avatar"
//     //     />
//     //     <p class="name">Petra Marica</p>
//     //     <p class="tag">@pmarica</p>
//     //     <p class="location">Salvador, Brasil</p>
//     // </div>