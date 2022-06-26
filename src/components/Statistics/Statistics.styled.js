import styled from '@emotion/styled';
import { getRandomHexColor } from '../../utils/getRandomColor';

export const StatisticsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.secondaryColor};
    box-shadow: 0 35px 80px rgba(0,0,0,0.15);
`;

export const StatisticsTitle = styled.h2`
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 20px;
`;

export const StatisticsList = styled.ul`
    display: flex;
    border-radius: 20px;
    overflow: hidden;
`;

export const StatisticsListItem = styled.li`
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: ${getRandomHexColor};
`;