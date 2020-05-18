var jimp = require('jimp');

jimp.read("image.jpg", (err, profile) => {
    if (err)
        throw err;
    profile
        .resize(256, 256) //resizing the image to 256,256
        .quality(80) //Quality of image will be reduced 
        .greyscale() //Greyscale effect for image will be done here
        .write("modified.jpg"); //The Modified image will be stored here.
});