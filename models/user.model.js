const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema(
    {
        bio: { type: String },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        followers: [
            {
                id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
                username: String,
            },
        ],
        following: [
            {
                id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
                username: String,
            },
        ],
        name: { type: String, required: true },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
