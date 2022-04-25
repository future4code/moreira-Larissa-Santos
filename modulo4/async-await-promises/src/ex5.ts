import axios from "axios"
import { User } from "./ex3";


const sendNotification = async (users: User[], message: string): Promise<void> => {
    try {
        for (const user of users) {
            await axios.post(`https://labenews.herokuapp.com/notifications`, {
                userId: user.id,
                message
            })
        };
        console.log("Mensagens Enviadas")

    } catch (error: any) {
        console.log("Error")
    }
};