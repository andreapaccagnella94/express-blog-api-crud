/*
Esercizio
Milestone 1

Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers. 

All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi). 

Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.

Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima. 

Se tutto funziona, passiamo alla prossima milestone

Milestone 2

Per iniziare, creiamo una cartella data  in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato.  Importiamo questo file in cima al controller. 

Ora passiamo ad implementare le logiche delle nostre CRUD:

Index dovrà restituire la lista dei post in formato JSON
Show dovrà restituire un singolo post in formato JSON
Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.

Bonus
Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
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