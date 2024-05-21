let text;
let output = document.getElementById("output-field");

document.querySelector(".uppercase").addEventListener("click", () => {

  text = document.querySelector("#input-field").value;
  output.textContent = text.toUpperCase();
});

document.querySelector(".lowercase").addEventListener("click", () => {
  text = document.querySelector("#input-field").value;
  output.textContent = text.toLowerCase();
});

document.querySelector(".capitalize").addEventListener("click", () => {
    text = document.querySelector("#input-field").value;
    let words = text.split(" ");
    let capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
        );
        let capitalizedString = capitalizedWords.join(" ");
        output.textContent = capitalizedString;
  
});

document.querySelector(".bold").addEventListener("click", () => {
  text = document.querySelector("#input-field").value;
  output.textContent = text
  output.style.fontWeight = 'bold'
});

document.querySelector(".italic").addEventListener("click", () => {
  text = document.querySelector("#input-field").value;
  output.textContent = text
  output.style.fontStyle = 'italic'
});

document.querySelector(".underline").addEventListener("click", () => {
  text = document.querySelector("#input-field").value;
  output.textContent = text
  output.style.textDecoration = 'underline'
});
