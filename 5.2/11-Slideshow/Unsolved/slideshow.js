// Slideshow Activity
// Students: follow the instructions below:

// TODO: Put links to our images in this image array.
var images = ['<a href="https://cdn-images-1.medium.com/max/640/1*kkXbE9GlS73U7x1iXHP_vQ.png"></a>','<a herf="https://www.tristatetechnology.com/blog/wp-content/uploads/2016/09/MEAN-Stack-Development.jpg"</a>'];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$('#start').click(startSlideshow);

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$('#stop').click(startSlideshow);

// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {

  // TODO: Increment the count by 1.
  count+=1;


  // TODO: Show the loading gif in the "image-holder" div.

setTimeout(displayImage, 5000);
  // TODO: Use a setTimeout to run displayImage after 1 second.
if (count == images.length) {
  count =0;
}

  // TODO: If the count is the same as the length of the image array, reset the count to 0.

}
function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
showImage = setInterval(nextImage,5000);
}
function stopSlideshow() {

  // TODO: Put our clearInterval here:
stopSlideshow = clearInterval(invalid)
}

// This will run the display image function as soon as the page loads.
displayImage();
