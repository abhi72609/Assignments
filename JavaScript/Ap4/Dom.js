let tName = document.querySelector("h1").style.color = 'white';
console.log(tName);

let AllTagName = document.querySelectorAll("ul");
AllTagName.forEach(ul => {
    ul.style.color = 'white';
});

let TagName = document.querySelector("h1");
console.log(TagName.innerText);
console.log(TagName.textContent);

TagName.textContent = 'Hello'
console.log(TagName.textContent);