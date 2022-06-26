import styled from '@emotion/styled';
import { getRandomHexColor } from '../../utils/getRandomColor';

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