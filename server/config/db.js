import { connect } from "mongoose";

const connectDB = async () => {
	try {
    	await connect("mongodb://localhost:27017/AlfaDb");
    	console.log("MongoDB Connected");
	} catch (err) {
    	console.error(err.message);
    	process.exit(1);
	}
};

export default connectDB;
