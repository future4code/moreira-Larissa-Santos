import { useState } from "react"
import { useHistory } from "react-router-dom"
import { changePage } from "../../Router/routerGPS"
import { StyledHeader } from "./style"



export const CompHeader = () => {
    const [firmino, set_firmino] = useState(false)

    const history = useHistory()


    return(
        <StyledHeader>
            <div className="header-text">
                <h2 onClick={() => changePage(history, "/")}>TMDB</h2>

                <div onMouseLeave={() => set_firmino(false)} className="firmino">
                    <span onClick={() => {set_firmino(!firmino)}}> 
                        {firmino ?
                        <a href="https://www.linkedin.com/in/larissafirmino/" target="_blank"><ion-icon name="logo-linkedin" /></a>
                        :
                        <></>    
                    }
                    </span>
                    {
                        firmino ?
                        <h3>Larissa Firmino</h3>
                        :
                        <h3></h3>
                    }
                </div>
            </div>
        </StyledHeader>
    )
}