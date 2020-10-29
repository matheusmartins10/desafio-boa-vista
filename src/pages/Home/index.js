import React from 'react'

import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from 'react-icons/fa'

import { Container, Image, Welcome } from './styles'

import ImageHome from '../../assets/wallpaper.svg'
import ProfileImage from '../../assets/profile.svg'

const Home = () => {
    return (
        <Container>
           <Image>
              <img  src={ImageHome} alt="image"/>
           </Image>
           <Welcome>

              <img src={ProfileImage} alt="profile" />

              <h1> Olá, seja bem-vindo! </h1>

              <Link to="/rg" >
                 Registrar  <FaArrowCircleRight size={14} />
              </Link>

           </Welcome>
        </Container>
    )
}

export default Home
