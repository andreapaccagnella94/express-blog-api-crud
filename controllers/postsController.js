const foodPosts = require('../data/posts')

function index(req, res) {
    // console.log(req);
    // res.send('Show a list of Posts');
    //res.json(foodPosts);

    // migliorato con il filtraggio tramite query string
    let filteredPosts = foodPosts;
    // se c'è una query string allora filtro la lista di post
    if (req.query.content) {
        filteredPosts = foodPosts.filter(post => post.content.includes(req.query.content))
    }
    // se non è presente niente if 
    // comunque restitusco la lista di post aggiornata che sia aggionata o meno
    res.json(filteredPosts)
}

function show(req, res) {
    // res.send('Show the single post with ID: ' + req.params.id)

    // prendo dalla mia richiesta i dato dell'->id 
    const { id } = req.params
    console.log(id);
    // trovo il post con il mio id corrispondente
    const post = foodPosts.find(item => item.id === parseInt(id));
    console.log(post);
    // condizione nel caso in cui non si trovi nulla undefined
    if (!post) {
        return res.status(404).json({
            error: true,
            message: 'Resource not found'
        })
    }
    res.json(post);
}

function store(req, res) {
    // res.send('Create e new post')
    // incremento dell'ultimo id
    const newId = foodPosts[foodPosts.length - 1].id + 1;

    // nuovo oggetto
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        img: req.body.img,
        tags: req.body.tags,
    }
    foodPosts.push(newPost);
    console.log(foodPosts);
    res.status(201)
    res.json(newPost)
}

function update(req, res) {
    // res.send('Update the entire single post with ID: ' + req.params.id)
    const { id } = req.params
    console.log(id);
    // trovo il post con il mio id corrispondente
    const post = foodPosts.find(item => item.id === parseInt(id));
    console.log(post);
    // condizione nel caso in cui non si trovi nulla undefined
    if (!post) {
        return res.status(404).json({
            error: true,
            message: 'Resource not found'
        })
    }
    post.title = req.body.title
    post.content = req.body.content
    post.img = req.body.img
    post.tags = req.body.tags

    console.log(foodPosts);
    res.json(post) // non serve cambiare stato è una modifica
}

function modify(req, res) {
    // res.send('Partial update for the single post with ID: ' + req.params.id)
    // molto simile alla updatre ma con un verbo diverso e non modifico tutti i parametri dei miei elementi
    const { id } = req.params
    console.log(id);
    // trovo il post con il mio id corrispondente
    const post = foodPosts.find(item => item.id === parseInt(id));
    console.log(post);
    // condizione nel caso in cui non si trovi nulla undefined
    if (!post) {
        return res.status(404).json({
            error: true,
            message: 'Resource not found'
        })
    }

    // post.title = req.body.title ??
    // post.content = req.body.content ??
    // post.img = req.body.img ??
    // post.tags = req.body.tags ??

    console.log(foodPosts);
    res.json(post) // non serve cambiare stato è una modifica
}

function destroy(req, res) {
    // res.send('Delete the single post with ID: ' + req.params.id)
    const { id } = req.params
    console.log(id);
    // trovo il post con il mio id corrispondente
    const post = foodPosts.find(item => item.id === parseInt(id));
    console.log(post);
    // condizione nel caso in cui non si trovi nulla undefined
    if (!post) {
        return res.status(404).json({
            error: true,
            message: 'Resource not found'
        })
    }
    // aggiungo splice
    foodPosts.splice(foodPosts.indexOf(post), 1)
    res.sendStatus(204);
}



module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}