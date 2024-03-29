import React from 'react'
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'
import { FitThumbsUp } from 'react-icons'

const Card = () =>  {
  return (
    <CardContainer>
        <ImageBackground src='https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                <div>
                    <h4>Pablo Henrique</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp Dio ...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                     16
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }