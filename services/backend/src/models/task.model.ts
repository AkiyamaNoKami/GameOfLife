import mongoose, { Schema, Document } from "mongoose";


interface ITask extends Document {
    title: string;
    description: string;
    category: string;
}

const TaskSchema: Schema = new Schema({
    title: {'type': String, required: true, maxlength: 100},
    description: {'type': String, required: true, maxlength: 350},
    category: {'type': String, required: true},
})

export default mongoose.model<ITask>('Task', TaskSchema);