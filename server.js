/*
Esercizio
Creare  le rotte necessario per l'entità post all'interno di server.js e creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)

Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.

Ad esempio: 

Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;

Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”

e via dicendo…



Nota:

Avete anche l’array dei post che vi abbiamo fornito, salvatelo da qualche parte.
Ci servirà per i prossimi step.
Per oggi vi può servire in caso vogliate provare i bonus.

Bonus
Provare a restituire la lista dei post dalla rotta index, in formato json
Provare a restituire un singolo post dalla rotta show, sempre in formato json
*/
// SECONDA CONSEGNA
/*
Creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.

All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)

Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.

Ad esempio: 

Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;

Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”

e via dicendo…

Registrare il router dentro app.js con il prefisso posts/.
*/

const express = require('express')
const app = express()
const PORT = 3000
// importo la rotta post
const postsRouter = require('./routers/posts')


// procedure iniziali express 
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Server is runnig on http://localhost:${PORT}`)
})

// inizio il routing delle operazioni CRUD secondo le convezioni REST
// Post API server Routes
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

// ora tutte le mie operazioni CRUD sono nel file della rotta specifica in questo caso posts
// ora gli faccio vedere la cartella routers in cui ci saranno tutti le rotte una per file
app.use('/api/posts', postsRouter)