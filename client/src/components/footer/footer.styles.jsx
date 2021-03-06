import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    margin-bottom: 5px;
    border-top: 1px solid rgba(128, 128, 128, 0.5);
    align-items: flex-start;

    @media screen and (max-width: 800px) {
        margin: 0;
        width: auto;
    }
`;

export const SocialContainer = styled.div`
    flex-direction: row;
    margin: auto;
    width: fit-content;

    &:first-child {
        margin-top: 20px;
    }

    img{
        width: 32px;
        padding-right: 10px;
    }

    span{
        color: gray;
        font-size: medium;
    }

    @media screen and (max-width: 800px) {
    }
`;