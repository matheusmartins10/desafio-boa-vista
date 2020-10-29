import React, {useEffect} from 'react'

import { useHistory } from 'react-router-dom'

import { Container } from './styles'

import ErrorImage from '../../assets/error.svg'

const ErrorQuestion = () => {

    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            history.push('/kba')
        }, 3000)
    }, [])

    return (
        <Container>
           <h1> Parece que a sua resposta está incorreta  </h1>
           <img src={ErrorImage} alt="image" />
        </Container>
    )
}

export default ErrorQuestion
