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
  document.querySelector(".cd-list").insertAdjacentHTML("beforeend", divItem);
}

function deleteItem() {
  target.parentElement.remove();
}
