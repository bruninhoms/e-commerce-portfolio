import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const Title = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    width: fit-content;

    &:hover {
        opacity: 0.5;
    }
`;

export const Preview = styled.div`
    display: flex;
    justify-content: space-between;
`;