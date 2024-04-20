const dropdown = document.querySelector('.dropdown-bar');
const dropdownContent = document.querySelector('.dropdown-contents');

dropdown.addEventListener('click',()=>{
    if(dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    }
    else {
        dropdownContent.style.display = "block"
    }
});