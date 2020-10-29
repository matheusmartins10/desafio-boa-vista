import React, {useState, useEffect} from 'react'

import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import { Container } from '../../styles/Container'

const Birth = () => {

    const history = useHistory()

    const [birth, setBirth] = useState('')
    const [data, setData] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()

       try {
           const response = await api.post('birth', {birth})

           setBirth('')

           const json = response.data

           setData(json)

           history.push('/nome-da-mae-completo')

       } catch(err){
           console.error(`${err}`)
           history.push('/error-de-cadastro')
       }
    }


    useEffect(() => {
        const birth = {data}
        localStorage.setItem('birth', JSON.stringify(birth.data))
    }, [data])

    return (
        <Container onSubmit={handleSubmit} >
            <label> Insira a sua data de nascimento </label>
            <input
            type="text"
            placeholder="xx/xx/xx"
            required
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            />
            <button type="submit"> Continuar </button>
        </Container>
    )
}

export default Birth
