import styled, { css } from "styled-components";

export const ColumnStyles = css`
    display: flex;
    flex-direction: column;
`;

export const RowStyles = css`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2%;
`;

export const Card = styled.div`
    width: 40%;
    background-color: rgb(52, 52, 52);
    border-radius: 2%;
    padding: 2%;

    @media (max-width: 768px) {
        width: 60%;
    }

    @media (max-width: 425px) {
        width: 100%;
    }
`;

export const Title = styled.p`
    color: white;
    font-size: 32px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 5%;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    ${RowStyles}
`;

export const InputLabel = styled.label`
    color: white;
    font-size: 12px;
`;

export const Input = styled.input`
    border: none;
    border-radius: 8px;
    padding: 1.2%;
`;

export const Button = styled.button``;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const DivContainer = styled.div`
    padding-bottom: 2.5%;
    color: red;
    ${ColumnStyles}
`;

export const Span = styled.span`
    color: red;
    border: 1px solid red;
    border-radius: 5px;
    background-color: rgba(255, 0, 0, 0.2);
    padding: 2%;
`;

export const Image = styled.img`
    width: 4%;
`;