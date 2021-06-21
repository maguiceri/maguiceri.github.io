const sections = document.querySelectorAll(".section-js");


function handleClick(e) {
    let selected = e.target; 
    let lastChild = selected.lastElementChild;
    console.log(lastChild);
    let icon = lastChild.children[0];

    selected.classList.add('sss');
    icon.onclick = function dd () {
        selected.classList.remove("sss");
    }
    
   
}

sections.forEach(section => { section.onclick = handleClick})





