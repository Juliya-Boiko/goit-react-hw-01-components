import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.secondaryColor};
    box-shadow: 0 35px 80px rgba(0,0,0,0.15);
`;

export const Username = styled.p`
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 20px;
`;

export const UserTag = styled.p`
    margin-bottom: 20px;
    font-weight: 700;
    color: ${props => props.theme.colors.secondaryColorShadeDark};
`;

export const UserLocation = styled.p`
    margin-bottom: 20px;
    color: ${props => props.theme.colors.secondaryColorShadeDark};
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
    color: ${props => props.theme.colors.secondaryColorShadeDark};
`;

export const StatsListLabel = styled.p`
    margin-bottom: 5px;
`;

export const StatsListValue = styled.p`
    font-weight: 700;
`;