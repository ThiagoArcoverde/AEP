//10 - importanto a classe App ja instanciada de app.ts
import app from './app'

//11 - Criamos uma func main() que ira executar os metodos de app e iniciar 
//a aplicacao. Essa func sera a primeira a ser executada em nossa aplicacao.
function main() {
    try {
        //12 - utilizamos o metodo listen de express() para criar um servidor
        //passando como parametro: a porta 3000, o "dominio" localhost e uma
        //func assincrona e anonima que ira printar uma mensagem ao ser executada.
        app.listen(3000, 'localhost', async () => {
            console.log('Starting server at port 3000...')
        })

    } catch (err) {
        // no catch estamos capturando qualquer erro que possa acontecer ao
        //criar o servidor e printando o mesmo no console.
        console.error('Starting server error: ', err)
    }
}

//13 - Estamos executando a func main()
main()