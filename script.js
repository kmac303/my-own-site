const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

let test = document.getElementById("test");

test.addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    event.target.style.color = "purple";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
  
  // This handler will be executed every time the cursor
  // is moved over a different list item
  test.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);