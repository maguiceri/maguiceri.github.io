const sections = document.querySelectorAll(".section-js");

const handleClick = (section) => () => {
  const page = section.getElementsByClassName("page")[0];
  if (page.style.maxHeight) {
    page.style.padding = "0";
    page.style.maxHeight = null;
  } else {
    page.style.padding = "10px 0";
    page.style.maxHeight = page.scrollHeight + "px";
  }
};

sections.forEach((section) => {
  section.onclick = handleClick(section);
});
