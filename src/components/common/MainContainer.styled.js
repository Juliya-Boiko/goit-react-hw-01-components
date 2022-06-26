import styled from '@emotion/styled';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background-image: linear-gradient(45deg, 
        ${props => props.theme.colors.accentColorPink},
        ${props => props.theme.colors.accentColorYellow}
    );
`;