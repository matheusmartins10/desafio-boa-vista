import styled from 'styled-components'

export const Container = styled.div`
   max-width: 1024px;
   margin: 60px auto;

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   h1 {
      margin: 30px 0;
   }

   img {
      height: 300px;
   }

   @media(max-width: 764px){
       img {
           display: none;
       }
   }
`
