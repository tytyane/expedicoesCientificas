import { Schema, model, trusted } from "mongoose"

const expeditionsSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    participants: {
        type: [Schema.Types.ObjectId],
        ref: "Explorer",
        required: true
    },
    speciesFound: {
        type: [Schema.Types.ObjectId],
        ref: "Species",
        required: true
    }
})

const Expeditions = model('Expeditions', expeditionsSchema)

export default Expeditions