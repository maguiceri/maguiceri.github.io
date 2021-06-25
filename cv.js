const sections = document.querySelectorAll(".section-js");


const handleClick = (section) => () => {
    section.classList.toggle('sss');   
}

sections.forEach(section => { section.onclick = handleClick(section)})





