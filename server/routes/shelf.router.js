const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { 
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const { Pool } = require('pg');
//all routes are using rejectUnauthenticated 
/**
 * Get all of the items on the shelf 
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `SELECT * FROM "item"`;
  pool.query(query)
  .then((results) => res.send(results.rows))
  .catch((error) => {
    console.log('Error getting all items: ', error);
    res.sendStatus(500);
  })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  const item = req.body;
  const query = `insert into "item"("description","image_url","user_id")
	values ($1, $2, $3);`

  pool.query(query, [item.description, item.image_url, req.user.id])
  .then(results => res.sendStatus(201))
  .catch(error => {
    console.log("Error adding item: ", error);
    res.sendStatus(500);
  })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM "item"
                  WHERE "id" = $1 AND "user_id" = $2;`;
    
  pool.query(query, [id, req.user.id])
  .then(results => res.sendStatus(202))
  .catch(error => {
    console.log("Error deleting item: ", error);
    res.sendStatus(500);
  })
});
// ******* STRETCH GOALS ************
/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
