// let cdCount = 0;

document.querySelector("button").addEventListener("click", function (e) {
  const form = document.querySelector("form");
  e.preventDefault();
  if (form.checkValidity()) {
    addCd();
  }
  form.reportValidity();
});

function addCd() {
  let divItem = `<div class="cd-item">
   <p>${document.querySelector("#author").value}</p>
   <p>${document.querySelector("#title").value}</p>
   <p>${document.querySelector("#year").value}</p>
   <button onclick="deleteItem()" class="delete-button">🗑️</button>
    </div>`;
  console.log(divItem);
  document.querySelector(".cd-list").insertAdjacentHTML("beforeend", divItem);
  // document
  //   .querySelector(`.delete-button[data-cd-index="${cdCount}"]`)
  //   .addEventListener("click", deleteItem);
  // cdCount++;
  // <button data-cd-index="${cdCount}" class="delete-button">🗑️</button>
  //   </div>`
}

function deleteItem() {
  event.target.parentElement.remove();
}
