import { Schema, model } from "mongoose"

const explorerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    expeditionsParticipated: {
        type: Number,
        required: true
    }
})

const Explorer = model('Explorer', explorerSchema)

export default Explorer