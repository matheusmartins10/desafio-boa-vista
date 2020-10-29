import styled from 'styled-components'

export const Container = styled.div`
   max-width: 1024px;
   margin: 90px auto;

   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;

   @media(max-width: 764px){
       justify-content: center;
   }
`;

export const Image = styled.div`
   img {
       height: 300px;
   }

   @media(max-width: 764px){
       img {
           display: none;
       }
   }
`;
export const Welcome = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        height: 80px;
        margin: 0px auto;
    }

    h1 {
        font-size: 42px;

        margin: 30px auto;

    }

    a {
        color: #fff;
        background: #6C63FF;
        padding: 10px;
        border-radius: 8px;
    }

    a:hover {
        filter: brightness(80%);
    }

    @media(max-width: 764px){
        h1 {
            font-size: 32px;
        }
    }
`;
