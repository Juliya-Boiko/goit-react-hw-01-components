import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 20px;
    background-color: #ffffff;
    box-shadow: 0 35px 80px rgba(0,0,0,0.15);
`;

export const Avatar = styled.img`
    display: block;
    height: 100px;
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0,0,0,0.35);
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
    border-radius: 20px;
    overflow: hidden;
`;

export const StatsListItem = styled.li`
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #eee;
`;

export const StatsListLabel = styled.p`
    margin-bottom: 5px;
    color: grey;
`;

export const StatsListValue = styled.p`
    font-weight: 700;
`;