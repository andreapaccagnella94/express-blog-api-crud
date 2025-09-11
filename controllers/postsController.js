const foodPosts = require('../data/posts')

function index(req, res) {
    // console.log(req);
    // res.send('Show a list of Posts');
    //res.json(foodPosts);

    // migliorato con il filtraggio tramite query string


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
    res.send('Create e new post')
}

function update(req, res) {
    res.send('Update the entire single post with ID: ' + req.params.id)
}

function modify(req, res) {
    res.send('Partial update for the single post with ID: ' + req.params.id)
}

function destroy(req, res) {
    res.send('Delete the single post with ID: ' + req.params.id)
}



module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}