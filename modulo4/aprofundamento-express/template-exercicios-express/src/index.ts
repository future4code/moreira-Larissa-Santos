import express,{Request, Response} from 'express'
import { productsBeleza } from './data'
import { AddressInfo } from "net"

const app = express();

app.use(express.json());

const port = process.env.PORT || 3333;


/**============================================= */

 app.get("/test", (req: Request, res: Response) => {
    return res.status(200).json({ message: "successful" })
})

app.post('/productsBeleza', (req: Request, res: Response) => {
    try {
        const { name, price } = req.body
        const id = productsBeleza.length + 1

        if (price <= 0) { throw new Error('Preço não pode ser menor ou igual a zero.') }
        if (!name || !price) { throw new Error('Parâmetros name ou price estão faltando.') }

        productsBeleza.push({
            id: id,
            name: name,
            price: price
        })

        res.status(200).send(productsBeleza)
    }
    catch (error: any) {
        switch (error.message) {
            case 'Parâmetros name ou price estão faltando.':
                res.statusCode = 422
            case 'Preço não pode ser menor ou igual a zero.':
                res.statusCode = 422
            default:
                res.statusCode = 500
        }

        res.send(error.message)
    }

})

app.get('/productsBeleza', (req: Request, res: Response) => {
    try { res.status(200).send(productsBeleza) }
    catch (error: any) { res.status(500).send('Ocorreu um erro inesperado') }
})

app.put('/product/:id', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const { price } = req.body

        if (!id) { throw new Error('id não informado') }
        if (price <= 0) { throw new Error('O preço não pode ser menor ou igual a zero') }
        if (typeof (price) !== typeof (1)) { throw new Error('O preço informado deve ser um número') }
        if (!price) { throw new Error('Está faltando informar o preço no body') }

        let isProductFound = false

        productsBeleza.forEach(product => {
            if (product.id === id) {
                product.price = price
                isProductFound = true
            }
        })

        if (!isProductFound) { throw new Error('Produto não encontrado') }

        res.status(200).send(productsBeleza)

    } catch (error: any) {
        switch (error.message) {
            case 'Id do produto não informado':
                res.statusCode = 422
            case 'Preço não pode ser menor ou igual a zero':
                res.statusCode = 422
            case 'Preço informado deve ser um número':
                res.statusCode = 422
            case 'Está faltando informar o preço no body':
                res.statusCode = 422
            case 'Produto não encontrado':
                res.statusCode = 404
            default:
                res.statusCode = 500
        }

        res.send(error.message)
    }
})

app.delete('/product/:id', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        let isProductFound = false

        const productIndex = productsBeleza.findIndex(product => {
            if (product.id === id) {
                isProductFound = true
                return product}
        })

        if (!isProductFound) {throw new Error('Produto não encontrado')}

        productsBeleza.splice(productIndex, 1)

        res.status(200).send(productsBeleza)

    } catch (error: any) {
        switch (error.message) {
            case 'Produto não encontrado':
                res.statusCode = 404
            default:
                res.statusCode = 500
        }
    }
})
/**============================================= */
const server = app.listen(port, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});