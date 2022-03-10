import React from 'react'
import { ProfileCard } from '../styles'
import reject from '../images/reject.png'
import heart from '../images/heart.png'

export default function Profile(props) {

    return (
        <ProfileCard>
            {props.profile.photo ?
                (
                    <div id='info-container'>
                        <div id='img-container'  >
                            <div id='img-blur' style={{ backgroundImage: `url(${props.profile.photo})` }}></div>
                            <img src={props.profile.photo} alt='Foto do Perfil' />
                        </div>
                        <div id='text-container'>
                            <h2>{props.profile.name}, {props.profile.age}</h2>
                            <p>{props.profile.bio}</p>
                        </div>
                    </div>
                ) :
                
                <div id='info-container'> <p>Carregando...</p></div>
            }
            <div id='button-container'>
                <button onClick={props.getProfileToChoose}><img src={reject} alt='Icone Rejeitar' /></button>
                <button onClick={() => props.choosePerson(props.profile.id)}><img src={heart} alt='Icone Aceitar' /></button>
            </div>
        </ProfileCard>)
}