const bachelorMenu = $("#aPBA");
const academyMenu = $("#aAP");
const bachelorDropdown = $("#PBAMenu");
const academyDropdown = $("#APMenu");

if (window.matchMedia("(min-width: 768px)").matches) {
  console.log("rat big");
  bachelorMenu.hover(function () {
    bachelorDropdown.show();
    bachelorDropdown.css({ left: 291 });
    academyDropdown.hide();
  });
  academyMenu.hover(function () {
    academyDropdown.show();
    academyDropdown.css({ left: 85 });
    bachelorDropdown.hide();
  });

  $("main").mouseenter(function () {
    bachelorDropdown.hide();
    academyDropdown.hide();
  });
} else {
  bachelorMenu.click(function () {
    bachelorDropdown.toggle();
    academyDropdown.hide();
  });
  academyMenu.click(function () {
    academyDropdown.toggle();
    bachelorDropdown.hide();
  });
}
$("#aCS").click(function () {
  setNav();
  const navName = this.id;
  const navArticle = navName.substring(1);
  setText(navArticle);
});
$("#PBAMenu > a").click(function () {
  setNav();
  const articleIdFromNav = this.id;
  const newArticleId = articleIdFromNav.substring(1);
  setText(newArticleId);
});

function setNav() {
  $("#breadcrumbs").html(
    `${event.target.parentElement.previousSibling.previousSibling.innerHTML} / ${event.target.innerHTML}`
  );
}
function setText(newArticleId) {
  console.log(event.target);
  $("#main > article:visible").hide();
  $(`#${newArticleId}`).show();
  $(".subject > main").hide();
}

$(".subject > header").click(function (e) {
  console.log($(e.target).next().html());
  console.log($(e.target).next().is(":visible"));
  if ($(e.target).next().is(":visible")) {
    $(".subject > main").hide();
  } else {
    $(".subject > main").hide();
    $(e.target).next().show();
  }
});
