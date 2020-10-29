import React, {useEffect} from 'react'

import { useHistory } from 'react-router-dom'

import { Container } from './styles'

import ErrorImage from '../../assets/error.svg'

const ErrorQuestion = () => {

    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            history.push('/')
        }, 3000)
    }, [])

    return (
        <Container>
           <h1> Houve um problema no cadastro! Tente novamente.  </h1>
           <img src={ErrorImage} alt="image" />
        </Container>
    )
}

export default ErrorQuestion
