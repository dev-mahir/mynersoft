// lib/cloudinary.js
const cloudinary = require("cloudinary").v2;
console.log(process.env.CLOUDINARY_CLOUD_NAME);

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dxdrjruzm",
	api_key: process.env.CLOUDINARY_API_KEY || "273183453883972",
	api_secret: process.env.CLOUDINARY_API_SECRET || "r3dsmwfgufv3Ivg2EMz3a1rHC64",
});

module.exports = cloudinary;
