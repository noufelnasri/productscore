






/// filter processs 
// Filter Products 


let bringmetolife = "all this time i cant beleieve i couldnt see kept in the dark but you where there in front of me " ; 
let heartbeat = "put your phone over when its all ovver no set met down text go le screem you know better me down come wow " ; 
const spans = [...document.querySelectorAll(".filter-btns span")]; //seelct all the accureances of the categories . 
const items = [...document.querySelectorAll(".item")];

spans.forEach(filter => filter.addEventListener("click", () => {    // filter is the name of the one of the classification products example all or man woman..; 

  if (!filter) return;
  const id = filter.dataset.id;
  spans.forEach((span) => span.classList.remove("active"));
  filter.classList.add("active");

  items.forEach((item) => {
    item.style.display = "none" ;
    const targetId = item.dataset.id;

    if (targetId === id) {
      item.style.display = "flex" ;
      item.classList.remove("show") ; 
    } else if (id === "all") {
      item.style.display = "flex" ;
      item.classList.add("show") ; 
    }
  });
}));






/// filter processs end
// Filter Products end


//remove the scroll bar from producst section : 

const products = document.getElementById("products");

// Function to toggle the 'has-scrollbar' class
function toggleScrollbarClass() {
  if (window.innerWidth >= 550) {
    products.classList.remove("has-scrollbar");
  } else {
    products.classList.add("has-scrollbar");
  }
}

// Run the function initially
toggleScrollbarClass();

// Add event listener for window resize
window.addEventListener("resize", toggleScrollbarClass);

///////////////////////////////////////////////////