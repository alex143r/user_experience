$("button").click(function (e) {
  const form = $("form")[0];
  e.preventDefault();
  if (form.checkValidity()) {
    addCd();
  }
  form.reportValidity();
});

function addCd() {
  let divItem = `<div class="cd-item">
   <p>${$("#author").val()}</p>
   <p>${$("#title").val()}</p>
   <p>${$("#year").val()}</p>
   <button onclick="deleteItem()" class="delete-button">🗑️</button>
    </div>`;
  $(".cd-list").append(divItem);
}

function deleteItem() {
  target.parentElement.remove();
}
