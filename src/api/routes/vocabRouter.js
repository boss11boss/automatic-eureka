const router = require('express').Router()
const {CreateVocabService,ReadVocabService,SingleVocabService} = require('../services/vocabservice')


router.post('/create',CreateVocabService)

router.get('/read',ReadVocabService)

router.post('/singlevocab/:id',SingleVocabService)


module.exports = router