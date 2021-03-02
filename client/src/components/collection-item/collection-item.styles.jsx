import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component.jsx';

export const CollectionItemDiv = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 500px;
    align-items: center;
    position: relative;
    margin: 0 5px;

    &:hover {
        .image {
          opacity: 0.8;
        }
    
        button {
          opacity: 0.85;
          display: flex;
        }
      }
    
    @media screen and (max-width: 800px) {
        width: 40vw;

        &:hover {
            .image {
              opacity: unset;
            }
        
            button {
              opacity: unset;
            }
          }
    }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 90%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 370px;
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;
    }
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const Name = styled.span`
    width: 85%;
    margin-bottom: 15px;
`;

export const Price = styled.span`
    width: 15%;
`;

export const NameDiscount = styled.span`
    width: 60%;
    margin-bottom: 15px;
`;

export const PriceDiscount = styled.span`
    width: 40%;
    margin-left: 6px;

    &:first-child{
        font-size: 14px;
      }
`;

export const PriceDiscountStrike = styled.span`
    width: 40%;
    margin-left: 6px;
    text-decoration: line-through;

    &:first-child{
        font-size: 14px;
      }
`;