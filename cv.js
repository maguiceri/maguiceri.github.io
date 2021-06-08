const sections = document.querySelectorAll(".section-js");


function handleClick(e) {
    console.log(e)
    let selected = e.target; 
    selected.classList.add('sss');
    let lastChild = selected.lastElementChild;
    lastChild.classList.add('opacity');
    let icon = lastChild.children[0];
    icon.onclick = function dd () {
        selected.classList.remove("sss");
    }
    
   
}

sections.forEach(section => { section.onclick = handleClick})





