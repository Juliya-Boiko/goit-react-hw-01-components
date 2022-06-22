import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    outline: 1px solid red;
`;

export const Avatar = styled.img`
    display: block;
    height: 120px;
    margin-bottom: 20px;
    border-radius: 50%;
    border: 1px solid green;
`;

export const Username = styled.p`
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 20px;
`;

export const UserTag = styled.p`
    margin-bottom: 20px;
    font-weight: 700;
    color: grey;
`;

export const UserLocation = styled.p`
    margin-bottom: 20px;
    color: grey;
`;

export const StatsList = styled.ul`
    display: flex;
`;

export const StatsListItem = styled.li`
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #eee;
    border: 1px solid grey;
`;

export const StatsListLabel = styled.p`
    margin-bottom: 5px;
    color: grey;
`;

export const StatsListValue = styled.p`
    font-weight: 700;
`;