import styled from '@emotion/styled';

export const TransactionHistoryContainer = styled.table`
    padding: 20px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.secondaryColor};
    box-shadow: 0 35px 80px rgba(0,0,0,0.15);
`;

export const TableData = styled.td`
    height: 30px;
    padding: 4px 0;
    text-align: center;
    background-color: ${props => props.theme.colors.secondaryColorShadeLight};
`;

export const TableHead = styled.th`
    width: 200px;
    height: 30px;
    padding: 4px 0;
    color: ${props => props.theme.colors.secondaryColor};
    background-image: linear-gradient(45deg, 
        ${props => props.theme.colors.accentColorPink},
        ${props => props.theme.colors.accentColorYellow}
    );
`;