import React from 'react'
import axios from 'axios'
import { BaseUrl } from '../constants/BaseUrl'
import { ResetMatch } from '../styles'

export default function ResetMatches() {

    const clearMatches = () => {

        if (window.confirm("Tem certeza que deseja deletar seus matches?")) {
            axios.put(`${BaseUrl}/clear`)
                .then(() => {
                    alert("Matches deletadas!")
                })
                .catch((error) => {
                    alert(error.response.data)
                })
        }
    }

    return (
        <ResetMatch>
            <button onClick={clearMatches}>Excluir matches</button>
        </ResetMatch>
    )
}