// importo express 
const express = require('express');
// istanza router
const router = express.Router();

const postsController = require('../controllers/postsController')
// CRUD operazioni dei miei: post
// IMPORTANTE PER CONVEZIONE METTIAMO SEMPRE COME PERCOSO PRIMA API E DOPO IL NOME DELLA MIA DIRECTORY CHE STO SVILUPPANDO

// index (R)
router.get('/', postsController.index)

// show (R)
router.get('/:id', postsController.show)

// store (C)
router.post('/', postsController.store)

// update (U)
router.put('/:id', postsController.update)

// modify (U)
router.patch('/:id', postsController.modify)

// destroy (D)
router.delete('/:id', postsController.destroy)


// export
module.exports = router;