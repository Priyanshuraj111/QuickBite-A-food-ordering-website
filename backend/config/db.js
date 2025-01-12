import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Use your actual MongoDB connection string here.
    await mongoose.connect('mongodb+srv://pr2512ssm:Pdmuskt5geJoruQQ@cluster0.uoynf.mongodb.net/QuikBite', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("DB Connection Error: ", error.message);
    process.exit(1);  // Exit process with failure
  }
};
