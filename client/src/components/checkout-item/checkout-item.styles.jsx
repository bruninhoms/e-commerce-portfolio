import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
  
    img {
        width: 100%;
        height: 100%;
    }

`;

export const TextContainer = styled.span`
    width: 23%;
`;

export const Quantity = styled(TextContainer)`
    display: flex;

    span {
        margin: 0 10px;
        -webkit-touch-callout: none; 
        -webkit-user-select: none; 
         -khtml-user-select: none; 
           -moz-user-select: none; 
            -ms-user-select: none; 
                user-select: none; 
    }

    div {
        cursor: pointer;
        -webkit-touch-callout: none; 
        -webkit-user-select: none; 
         -khtml-user-select: none; 
           -moz-user-select: none; 
            -ms-user-select: none; 
                user-select: none; 
    }
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
    color: lightgrey;
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none; 
`;
