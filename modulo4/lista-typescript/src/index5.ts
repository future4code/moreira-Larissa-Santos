//5

type Usuario = {
    name: string,
    email: string,
    role: string
}

const users: Usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const emailAdm = (usuarios: Usuario[]) => {
    const emaiL: string[] = [];
    usuarios.filter((user) => {
        if (user.role === 'admin') {
            emaiL.push(user.email);
        }
    });
    return emaiL;
};
console.log(emailAdm(users));