import React, {useEffect} from 'react'

import { useHistory } from 'react-router-dom'

import { Container } from './styles'

import SuccessImage from '../../assets/success.svg'

const SuccessQuestion = () => {

    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            history.push('/')
        }, 4000)
    }, [])

    return (
        <Container>
           <img src={SuccessImage} alt="image" />
           <h1> Cadastro realizado com sucesso.</h1>
        </Container>
    )
}

export default SuccessQuestion
