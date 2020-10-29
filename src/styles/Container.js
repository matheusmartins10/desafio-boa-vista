import styled from 'styled-components'

export const Container = styled.form`
   max-width: 1024px;
   margin: 120px auto;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

    label {
       font-size: 32px;
       font-weight: bold;
       text-align: center;
   }

   input {
       background: #f4f4f4;
       border: 2px solid #252525;
       border-radius: 20px;
       padding: 10px;
       margin: 30px auto;
       width: 300px;
   }

   button {
       background: #6C63FF;
       color: #fff;
       padding: 10px;
       width: 300px;
       line-height: 32px;
       border-radius: 20px;
   }

   @media(max-width: 764px){
       margin: 60px auto;
   }
`;
