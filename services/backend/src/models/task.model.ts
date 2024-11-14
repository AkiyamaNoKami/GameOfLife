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
    is_done: {'type': Boolean, default: false},
    is_dropped: {'type': Boolean, default: false},
})

TaskSchema.pre('save', function(next) {
    if (this.is_done) {
       this.is_dropped = false;
    }
    if (this.is_dropped) {
        this.is_done = false;
    }
    next();
})

export default mongoose.model<ITask>('Task', TaskSchema);