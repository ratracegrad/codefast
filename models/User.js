import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
	},
	email: {
		type: String,
		trim: true,
		lowercase: true,
	},
	image: {
		type: String,
	},
	boards: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Board',
	}],
});

export default mongoose.model.User || mongoose.model('User', userSchema);