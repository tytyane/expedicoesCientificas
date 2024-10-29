import Expeditions from "../models/expedition_model.js"

export const store = async (req, res) => {
    try {
        const expedition = await Expeditions.create(req.body)
        res.status(201).json(expedition)
    } catch(error){
        res.status(400).send(error)
    }
}