import * as MODEL from "../model/model.js";

function init() {
  $("nav a").click(function (e) {

    let btnId = e.currentTarget.id;
    let contentID = "MODEL." + btnId + "();";
    console.log("clicked ", btnId);

    $("#app").html(eval(contentID));
    init();
  });

  $(".gallery-promo a").click(function (e) {
    let btnId = e.currentTarget.id;
    let contentID = "MODEL." + btnId + "();";
    console.log("clicked ", btnId);

    $("#app").html(eval(contentID));
    init();
  });

  $(".blog-promo a").click(function (e) {
    let btnId = e.currentTarget.id;
    let contentID = "MODEL." + btnId + "();";
    console.log("clicked ", btnId);

    $("#app").html(eval(contentID));
    init();
  });
}

$(document).ready(function () {
  init();
});