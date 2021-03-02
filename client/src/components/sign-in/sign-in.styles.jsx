import styled from 'styled-components';

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        width: 90vw;
        margin: 0px 2px 20px 2px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;