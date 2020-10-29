import React, {useState, useEffect} from 'react'

import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import { Container } from '../../styles/Container'


const Fullname = () => {

    const history = useHistory()

    const [fullname, setFullname] = useState('')
    const [data, setData] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()

       try {
          const response = await api.post('fullname', {fullname})
  
          setFullname('')
  
          const json = response.data
  
          setData(json)
  
          history.push('/data-de-nascimento')

       } catch(err){
          console.error(`${err}`)
          history.push('/error-de-cadastro')
       }
    }


    useEffect(() => {
        const fullname = {data}
        localStorage.setItem('fullname', JSON.stringify(fullname.data))
    }, [data])

    return (
        <Container onSubmit={handleSubmit} >
            <label> Informe o seu nome completo </label>
            <input
            type="text"
            placeholder="Digite..."
            required
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            />
            <button type="submit"> Continuar </button>
        </Container>
    )
}

export default Fullname
