import Species from "../models/species_model.js"

export const store = async (req, res) => {
    try {
        const species = await Species.create(req.body)
        res.status(201).json(species)
    } catch(error){
        res.status(400).send(error)
    }
}

export const index = async (req, res) => {
    try {
        const species = await Species.find().exec()
        res.status(200).json(species)
    } catch(error){
        res.status(400).send(error)
    }
}

export const show = async (req, res) => {
    try{
        const species = await Species.findById(req.params.id).exec()
        if(!species){
            res.status(404).json({erro: "Espécie não encontrada"})
        }
        res.json(species)
    }catch(error){
        res.status(400).send(error)
    }
}

export const update = async (req, res) => {
    try {
        const species = await Species.findByIdAndUpdate(
            req.params.id,req.body).exec()
        if(!species){
            res.status(404).json({erro: "Espécie não encontrada"})
        }
        res.json(species)
    } catch(error){
        res.status(400).send(error)
    }
}

export const destroy = async (req, res) => {
    try{
        const species = await Species.findByIdAndDelete(req.params.id).exec()
        if(!species){
            res.status(404).json({erro: "Espécie não encontrada"})
        }
        res.json(species)
    } catch(error){
        res.status(400).send(error)
    }
}