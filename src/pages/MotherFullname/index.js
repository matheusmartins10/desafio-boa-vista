import React, {useState, useEffect} from 'react'

import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import { Container } from '../../styles/Container'



const Fullname = () => {

    const history = useHistory()

    const [motherFullname, setMotherFullname] = useState('')
    const [data, setData] = useState({})
    const [apiData, setApiData] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()

       try {
           const response = await api.post('motherfullname', {motherFullname})

           setMotherFullname('')

           const json = response.data

           setData(json)

           history.push('/kba')

       } catch(err){
           console.error(`${err}`)
           history.push('/error-de-cadastro')
       }
    }

    useEffect(() => {
        const { rg: rg  } = localStorage.getItem('rg')
        const {fullname: fullname} = localStorage.getItem('fullname')
        const {birth: birth} = localStorage.getItem('birth')
        const {motherfullname: motherfullname} = localStorage.getItem('motherfullname')

        if(rg && fullname && birth && motherfullname) {

            const dataAPI = {
                rg,
                fullname,
                birth,
                motherfullname
            }

            setApiData(JSON.parse(dataAPI))
        }
    }, [])


    useEffect(() => {
        const motherFullname = {data}
        localStorage.setItem('motherfullname', JSON.stringify(motherFullname.data))
    }, [data])

    return (
        <Container onSubmit={handleSubmit} >
            <label> Insira o nome completo da sua mãe </label>
            <input
            type="text"
            placeholder="Digite..."
            required
            value={motherFullname}
            onChange={(e) => setMotherFullname(e.target.value)}
            />
            <button type="submit"> Finalizar </button>
        </Container>
    )
}

export default Fullname
