import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
`

export const DisplayContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    width: 375px;
    border-radius: 15px;
    background-color: #FF1493;
    color: #020102;
    font-family: 'Rubik', sans-serif;
`

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    h3 {
        margin: 0;
        display: inline;
    }
    button {
        border: none;
        cursor: pointer;
        background-color: transparent;
    }
    img {
        height: 40px;
        width: 40px;
    }
   
`

export const ProfileCard = styled.div`
    display: flex;
    justify-content: column;
    flex-direction: column;
    height: calc(100% - 80px);
    #info-container {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        height: calc(100% - 70px - 1.5rem);
        position: relative;
     
        #img-container {
            flex-grow: 1;
            height: calc(100% - 120px);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative; 
            width: 100%;
            overflow: hidden;
            >div{
                position: absolute;
                background-size: 100% 100%;
                height: 110%;
                width: 110%;
                filter: blur(20px);
                -webkit-filter: blur(8px);
                background-color: transparent;
            }
            >img {
                max-width: 100%;
                max-height: 100%;
                z-index: 1;
            }
        }  
        #text-container {
            width: 100%;
            justify-self: flex-end;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0.5rem 1rem 0.5rem 1rem;        
        }
    }
    #button-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0.5rem;
            button {
                height: 70px;
                width: 70px;
                border: none;
                cursor: pointer;
                border-radius: 35px;
                border: 3px #000000	 solid;
            }
            img {
            height: 50px;
            width: 50px;
        }
    }
`

export const MatchCard = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    padding: 10px 20px;
    width: 100%;
    img {
        height: 60px;
        width: 60px;
        border-radius: 30px;
        margin-right: 20px;
    }
    &:hover{
        background-color: #DCDCDC;
    }
        
`

export const ResetMatch = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
`

export const MatchCards = styled.div`
    width: 100%;
    height: calc(100% - 70px);
    overflow-y: auto;
`