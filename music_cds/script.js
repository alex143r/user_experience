document.querySelector("#submit").addEventListener("click", saveElem);

function saveElem() {
  let divItem = ` <div class="item">
         <h3>${document.querySelector("#artist").value}</h3>
         <h3>${document.querySelector("#title").value}</h3>
        <h3>${document.querySelector("#year").value}</h3>
     <button class="trash">🗑️</button>
    </div>`;
  document.querySelector("#cds").insertAdjacentHTML("beforeend", divItem);
  document.querySelector(".trash").addEventListener("click", deleteItem);
}

function deleteItem() {
  console.log("yo");
}
