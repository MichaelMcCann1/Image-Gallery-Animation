# Image-Gallery-Animation

An image gallery with an image transition animation I created using ReactJS. To use the image gallery you first need to put all images in the Images folder that is inside the Public folder. Then in `App.js` you must provide the file name of each image inside the `imageArray` array. You can also add an `alt` tag to each image. The code below shows how the array is set up.
``` javascript
const imageArray = [{src:'house1.jpg', alt:""}, {src:'house2.jpg', alt:""}, ... , {src:'house5.jpg', alt:""}]
```
A video demonstration of the animation is shown below.

https://user-images.githubusercontent.com/81657333/134071411-6c33cc6d-a156-4f2c-b056-fb7fc09c0cb7.mp4


## Code Explination
### Markup
The markup for the code is shown below. The image gallery sits inside a `div` element with a class of "gallery". Inside the `div` are two `div` elements. One with a class name of "left" and the other with a class name of "right". The "left" `div` takes up the left half of the screen and the "right" div takes up the right side of the screen. Inside those `div` elements is where the images are located. Each image is placed inside both the "left" and "right" `div` elements. Only half of each image is shown but they are put next to each other to give the appearance of the entire image. When the user clicks the arrow button one side of the image will slide up and the other will slide down.

```HTML
<div className="gallery">
  <div className="left">
    <img>
    .
    .
    .
  </div>
  <div className="right">
    <img>
    .
    .
    .
  </div>
</div>
```

### CSS
The import styles for the images are shown below. The images are positioned absolutely and then transformed to be centered directly in the middle of the screen. 
```CSS
.left > img {
  display: block;
  position: absolute;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%); 
}
```

The styles for the "left" and "right" container `div` elements are shown below. They are both given a width of 50% so that they each take up half the screen. The most important style to point out for this image gallery is how overflow is set to hidden. This hides the right half of the image in the "left" `div` and it hides the left half of the image in the "right" `div`. With both half of the images side-by-side it creates the appearance of the entire image.
```CSS
.left, .right {
  width: 50%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
```


### Animation
To create the animation effect for the image gallery the `top` property is used to move the images into and out of the screen. A click event handler is attached to both the scroll buttons. This handler changes the value of a state variable called `top`. The top style of the images depends on this variable. When the user clicks on the scroll buttons then the position of each image will change accordingly. 
```javascript
<div className="upArrow" onClick={moveUp}>
  <IoMdArrowDropupCircle/>
</div>
<div className="downArrow" onClick={moveDown}>
  <IoMdArrowDropdownCircle/>
</div>
```

The `<img>` elements for each image are added dynamically using the `.map` arraymethod. The markup is shown below. Each element in the `imageArray` is looped through to create an `<img>` element. The src and alt attributes of the image come from the data in `imageArray`. The top property of each image is a multiple of 100%. This stacks the images on top of each other. When the value of `top` changes then the images will shift by 100% in the appropriate direction. 
```javascript
{imageArray.map((item, index) => (
  <img key={index} style={{top: `${index*100+top}%`}} src={`Images/${item.src}`} alt={item.alt}></img>
))}
```
