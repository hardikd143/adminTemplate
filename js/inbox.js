$(document).ready(function () {
  // mail categories
  $(".mail-categories").click(function () {
    $(this).toggleClass("open");
    if ($(this).hasClass("open")) {
      $(".mailOptDropDown").css("height", "105px");
      $(".mail-categories .fa-angle-right").css("transform", "rotate(90deg)");
    } else {
      $(".mail-categories .fa-angle-right").css("transform", "rotate(0deg)");
      $(".mailOptDropDown").css("height", "0px");
    }
  });

  //   select all msg
  //   function SlctAll() {
  //     if ($("#selectAllMsg").checked == true) {
  //     }
  // }
  $("#selectAllMsg").click(function () {
    let chckBox = $(".msgcheckbox");
    for (let i = 0; i < chckBox.length; i++) {
      let box = $(chckBox)[i];
      $(box).prop("checked", true);
    }
  });
  // delete msg
  $(".deleteBtn.funcButton").click(function () {
    let allTD = $("table.inbox-msgs td");
    for (let i = 0; i < $("table.inbox-msgs td").length; i++) {
      let td = allTD[i];
      let sMail = $(allTD[i]).children().children()[0];
      let chckBox = $(sMail).children()[0];
      if (chckBox.checked == true) {
        $(td).css("display", "none");
      }
    }
  });
  // mark as msg
  $(".markreadBtn.funcButton").click(function () {
    let allTD = $("table.inbox-msgs td");
    for (let i = 0; i < $("table.inbox-msgs td").length; i++) {
      let sMail = $(allTD[i]).find(".selectMail")[0];
      let Sender = $(allTD[i]).find(".msgSender")[0];
      let SenderText = $(Sender).children()[0];
      let mainMsg = $(allTD[i]).find(".mainMsg")[0];
      let strong = $(mainMsg).find("strong")[0];
      let chckBox = $(sMail).children()[0];
      if (chckBox.checked == true) {
        $(SenderText).css("font-weight", "normal");
        $(strong).css("font-weight", "normal");
      }
    }
  });
  // msg options
  $(".msgOptions").click(function () {
    $(this).toggleClass("opened");
    let icon = $(this).children()[0];
    if ($(this).hasClass("opened")) {
      $(icon).addClass("fa-times").removeClass("fa-ellipsis-v");
    } else {
      $(icon).removeClass("fa-times").addClass("fa-ellipsis-v");
    }
    let dropDown = $(this).children()[1];
    $(dropDown).toggleClass("DropDownToggle");
  });

  // delete particular msg
  $("table.inbox-msgs td").click(function (e) {
    // console.log(e.target);
    // console.log($(e.target).attr('class'))
    if ($(e.target).hasClass("dltmsg")) {
      $(this).css("display", "none");
    }
  });
});
