import { useNavigate } from "react-router-dom";


export const GoToSignupPage = (navigate) => {
    navigate("/Signup")
}

export const GoToFeedPage = (navigate) => {
    navigate("/FeedPage")
}

export const GoToPostPage = (navigate, id) =>{
    navigate(`/posts/${id}/comments`)
}

export const GoToLoginPage = (navigate) =>{
    navigate("/")
}