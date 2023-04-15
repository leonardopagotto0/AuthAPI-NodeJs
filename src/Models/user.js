import mongoose from "mongoose";
import * as uuid from "uuid";

const userSchema = new mongoose.Schema({
    _id: { type: String, default: uuid.v4()},
    name: String,
    email: { type: String, unique: true },
    password: String,
    createdAt: { type: Date, default: Date.now() }
}, {
    autoCreate: true
});

export default mongoose.model("User", userSchema);