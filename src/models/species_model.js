import { Schema, model } from "mongoose"

const speciesSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    discoveryLocation: {
        type: String,
        required: true
    },
    rarity: {
        type: Number,
        required: true
    },
    documented: {
        type: Boolean,
        default: false,
        required: true
    }
})

const Species = model('Species', speciesSchema)

export default Species