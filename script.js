let container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
    let square = document.createElement('div'); 
    square.classList.add('square');   
    container.appendChild(square);

    square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = 'lightblue';
    });

    
    // square.addEventListener('mouseleave', () => {
    // square.style.backgroundColor = ''; 
    // });
}

