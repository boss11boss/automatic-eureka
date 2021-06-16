const Vocab = require('../models/vocabModel')


exports.CreateVocabService=(req,res)=>{
    const {iddd,etymologies,definitions,synonyms,examples} = req.body
    const newVocab = new Vocab({iddd,etymologies,definitions,synonyms,examples})
    
    return new Promise((resolve, reject) =>{
        Vocab.findOne({iddd})
        .then(vo=>{
            if(vo) return res.send('Vocabulary Already Exist')

            newVocab.save()
            .then(vocabCreated=>res.status(201).json({message:'New Recipe Created',vocabCreated}))

            .catch(err=>res.status(501).json({message:'Something Went Wrong',err}))
            
        })
        .catch(err=>res.status(501).json({message:'Something Went Wrong',err}))


    })
        
        
}

exports.ReadVocabService=(req,res)=>{
    
    return new Promise((resolve, reject) =>{
        Vocab.find()
        .then(vocabFound=>res.status(201).json({message:'All vocabs found',vocabFound}))
        .catch(err=>res.status(501).json({message:'Something Went Wrong',err}))
        })
}

exports.SingleVocabService=(req,res)=>{
    let idd = req.params.id
    return new Promise((resolve, reject) =>{
        Vocab.findOne({_id:idd})
        .then(vocabFound=>res.status(201).json({message:'vocabulary found successfully',vocabFound}))
        .catch(err=>res.status(501).json({message:'Something Went Wrong',err}))
    })
        
        
}