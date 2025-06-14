import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDNINARY_CLOUD_NAME,
  api_key: process.env.CLOUDNINARY_API_KEY,
  api_secret: process.env.CLOUDNINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloud = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File is uploaded", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export default uploadOnCloud;
