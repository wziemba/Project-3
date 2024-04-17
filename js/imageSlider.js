document.querySelectorAll(".image_container").forEach((image_container) => {
  const items = image_container.querySelectorAll(".slider_img");
  const buttonsHTML = Array.from(items, () => {
    return `<span class="image_button"></span>`;
  });
  
  image_container.insertAdjacentHTML(
  "beforeend", 
  `
    <div class="image_nav">
      ${buttonsHTML.join("")}
    </div>
  `
 );
    
  const buttons = image_container.querySelectorAll(".image_button");
  
  buttons.forEach((button, i) => {
    button.addEventListener("click",() => {
     //un-select all the items
     items.forEach((item) => item.classList.remove("slider_img--selected"));
     buttons.forEach((button) => button.classList.remove("image_button--selected"));
     
     items[i].classList.add("slider_img--selected");
     button.classList.add("image_button--selected");
    });
  });
  
  // Select the first item on page load
  items[0].classList.add("slider_img--selected");
  buttons[0].classList.add("image_button--selected");
});