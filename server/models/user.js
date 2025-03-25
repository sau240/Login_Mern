import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    resetToken: { type: String, default: null },
    resetTokenExpiry: { type: Date, default: null }
});

export default mongoose.model("User", UserSchema);
