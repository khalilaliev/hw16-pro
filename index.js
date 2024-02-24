const button = document.getElementById("btn");
button.addEventListener("click", () => {
  const input = prompt("Enter elements of array!");
  const value = input.split(",").map((item) => {
    return parseInt(item.trim());
  });
  value.sort((x, y) => {
    return x - y;
  });

  value.splice(1, 3);
  arrToHtml(value);
});

function arrToHtml(arr) {
  const divEl = document.getElementById("container");
  divEl.innerHTML = `<p> Result: ${arr.join(", ")} </p>`;
}
