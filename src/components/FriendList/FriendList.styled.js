import styled from '@emotion/styled';

export const FriendListContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.secondaryColor};
    box-shadow: 0 35px 80px rgba(0,0,0,0.15);
`;

export const FriendListItem = styled.li`
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const OnLineStatus = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-bottom: 20px;
    background-color: ${props => props.children ? props.theme.colors.isOnline : props.theme.colors.notOnline};
`;
export const Avatar = styled.img`
    display: block;
    width: 50px;
    margin-bottom: 20px;
`;