import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
`;

export const App = styled.div`
    background-color: #6C63FF;
    color: #fff;

    width: 450px;
    min-height: 200px;
    height: min-content;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: space-evenly;
`

export const Question = styled.div`
    width: 100%;
    position: relative;
`;

export const QuestionText = styled.div`
  margin-bottom: 12px;
`;

export const AnswerSection = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   button {
    width: 100%;
    font-size: 16px;
    color: #000;
    background-color: #f4f4f4;
    border-radius: 15px;
    display: flex;
    padding: 5px;
    justify-content: flex-start;
    align-items: center;
    border: 5px solid #234668;
    cursor: pointer;
  }

  button:hover {
    background-color: #555e7d;
  }

  button:focus {
    outline: none;
  }

  button svg {
    margin-right: 5px;
  }
`
