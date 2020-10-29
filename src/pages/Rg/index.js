import React, {useState, useEffect} from 'react'

import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import { Container } from '../../styles/Container'

import Button from '../../components/Button'
import Label from '../../components/Label/index'


const Rg = () => {

    const history = useHistory()

    const [rg, setRG] = useState('')
    const [data, setData] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

       try {
        const response = await api.post('rg', {rg})
        setRG('')

        const json = response.data

        setData(json)

        history.push('/nome')

       } catch(err){
          console.error(`${err}`)
          history.push('/error-de-cadastro')
       }
    }


    useEffect(() => {
       const {rg} = data
       localStorage.setItem('rg', JSON.stringify(rg))
    }, [data])



    return (
        <Container onSubmit={handleSubmit} >
            <Label> Informe o seu RG </Label>
            <input
            type="text"
            placeholder="Digite..."
            required
            value={rg}
            onChange={(e) => setRG(e.target.value)}
            />
            <Button type="submit">Continuar</Button>

        </Container>
    )
}

export default Rg
