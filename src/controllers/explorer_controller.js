import Explorer from "../models/explorer_model.js"

export const store = async (req, res) => {
    try {
        const explorer = await Explorer.create(req.body)
        res.status(201).json(explorer)
    } catch(error){
        res.status(400).send(error)
    }
}

export const index = async (req, res) => {
    try {
        const explorer = await Explorer.find().exec()
        res.status(200).json(explorer)
    } catch(error){
        res.status(400).send(error)
    }
}

export const show = async (req, res) => {
    try{
        const explorer = await Explorer.findById(req.params.id).exec()
        if(!explorer){
            res.status(404).json({erro: "Explorador não encontrada"})
        }
        res.json(explorer)
    }catch(error){
        res.status(400).send(error)
    }
}

export const update = async (req, res) => {
    try {
        const explorer = await Explorer.findByIdAndUpdate(
            req.params.id,req.body).exec()
        if(!explorer){
            res.status(404).json({erro: "Explorador não encontrada"})
        }
        res.json(explorer)
    } catch(error){
        res.status(400).send(error)
    }
}

export const destroy = async (req, res) => {
    try{
        const explorer = await Explorer.findByIdAndDelete(req.params.id).exec()
        if(!explorer){
            res.status(404).json({erro: "Explorador não encontrada"})
        }
        res.json(explorer)
    } catch(error){
        res.status(400).send(error)
    }
}