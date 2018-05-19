
import express from 'express'
import Home from '../controllers/home.js'
const router = express.Router()

/* GET home page. */
router.get('/', Home.home)

module.exports = router
