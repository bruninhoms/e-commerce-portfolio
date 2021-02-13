import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component.jsx';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: lightgrey;
    top: 90px;
    right: 40px;
    z-index: 5;
    animation: fade 0.2s linear forwards;

    @keyframes fade {
        from {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-20px);
        }
        to { 
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
      }
`;

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const Button = styled(CustomButton)`
    margin-top: auto;
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;