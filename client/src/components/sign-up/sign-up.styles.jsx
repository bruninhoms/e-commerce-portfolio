import styled from 'styled-components';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    @media screen and (max-width: 800px) {
        width: 90vw;
        margin: 0px 2px 5px 2px;
    }
`;

export const Title = styled.h2`
    margin: 10px 0;
`;