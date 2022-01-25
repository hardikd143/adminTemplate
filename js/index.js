$(document).ready(function () {
  
  // sorting employee name
  $(".empnameSorting").click(function () {
    let listObj = $(".employeeTableBody tr");
    let list = Object.entries(listObj);
    let rev_list = list.reverse();
    // removing first two element which is length of array and document
    rev_list.shift();
    rev_list.shift();
    console.log(rev_list);

    // empty the table
    $(".employeeTableBody").empty();

    // looping rev list in order to add Element in reverse order in table
    for (let i = 0; i < rev_list.length; i++) {
      let listItem = $(rev_list)[i];
      listItem.shift();
      console.log(listItem);
      $(listItem).removeAttr("data-cell");
      if (i <= 4) {
        $(listItem).attr("data-cell", "first_page");
      } else if (i > 4 && i <= 9) {
        $(listItem).attr("data-cell", "second_page");
      } else if (i > 9 && i <= 14) {
        $(listItem).attr("data-cell", "third_page");
      } else {
        $(listItem).attr("data-cell", "fourth_page");
      }

      $(".employeeTableBody").append(listItem);
    }
  });

  //   finding index of first and last tr from visible tr in table
  function findTRNum(first, last) {
    // console.log(first);
    // console.log(last);
    let list = $(".employeeTableBody tr");
    let fTR, lTR;
    for (let i = 0; i < list.length; i++) {
      if (list[i] == first) {
        fTR = i + 1;
      } else if (list[i] == last) {
        lTR = i + 1;
      }
    }

    $(".firstTR").text(fTR);
    $(".lastTR").text(lTR);
  }

  //   employee paging
  $(".pageBtnnum").click(function () {
    //   hiding all TR
    for (let i = 0; i < $(".employeeTableBody tr").length; i++) {
      let emp = $(".employeeTableBody tr")[i];
      $(emp).css("display", "none");
    }
    // removing active class
    for (let i = 0; i < $(".pageBtnnum").length; i++) {
      let btn = $(".pageBtnnum")[i];
      $(btn).removeClass("actemppage");
    }

    // getting clicked btn to make it active
    let activePage = $(this)[0];
    $(activePage).addClass("actemppage");

    // getting id of clicked btn
    let activePageId = $(this).attr("id");
    let employee = $(`.employeeTableBody tr[data-cell="${activePageId}"]`);
    $(employee).css("display", "table-row");
    let firstTR = $(employee)[0];
    let lastTR = $(employee)[parseInt($(employee).length) - 1];
    
    // function for finding index of tr 
    findTRNum(firstTR, lastTR);

    // enable disable btns
    if ($(activePage).attr("data-emppage") == "4") {
      $(".nextemppage").prop("disabled", true);
      $(".prevemppage").prop("disabled", false);
      $(".empnameSorting").prop("disabled", true);
    } else if ($(activePage).attr("data-emppage") == "1") {
      $(".prevemppage").prop("disabled", true);
      $(".empnameSorting").prop("disabled", false);
      $(".nextemppage").prop("disabled", false);
    } else {
      $(".empnameSorting").prop("disabled", true);
      $(".nextemppage , .prevemppage").prop("disabled", false);
    }
  });
  //   prev page
  $(".prevemppage").click(function () {
    $(".nextemppage").prop("disabled", false);
    let active = $(".pageBtnnum.actemppage")[0];

    let PrevNum = parseInt($(active).attr("data-emppage")) - 1;
    let PrevPage = $(".pageBtn")[PrevNum];
    $(PrevPage).click();
  });
  //   next page
  $(".nextemppage").click(function () {
    $(".prevemppage").prop("disabled", false);
    let active = $(".pageBtnnum.actemppage")[0];
    let NextNum = parseInt($(active).attr("data-emppage")) + 1;
    let NextPage = $(".pageBtn")[NextNum];
    $(NextPage).click();
  });

  // open chat
  $(".openPeopleList").click(function () {
    $(".people").toggleClass("peopleShow");
  });
  $(window).resize(function () {
    if ($(".popoutChat").hasClass("popIcon")) {
      $(".popoutChat").click();
    }
  });
  // popoutChat
  $(".popoutChat").click(function () {
    if (window.outerWidth > 1025) {
      $(this).toggleClass("popIcon");
      $(".chatting").toggleClass("chatpopout");
      $(".chatting .card").toggleClass("chattingCard");
      $(".people .chats, .message .history").toggleClass("height310");
      $("input.write-msg").toggleClass("inpWritemsg");
    }
  });

  // adjusting accor body height while window resize
  $(window).resize(function () {
    for (let i = 0; i < $(".accorHeading").length; i++) {
      let heading = $(".accorHeading")[i];
      if ($(heading).hasClass("open")) {
        let heading = $(".accorHeading")[i];
        let body = $(heading).next()[0]
        $(body).css("height", "auto");
      }
    }
  });
  // custom accordion
  $(".accorHeading").click(function () {
    $(this).toggleClass("open");
    let body = $(this).next()[0];
    let icon = $(this).prev()[0];
    let bodyheight = body.scrollHeight;
    if ($(this).hasClass("open")) {
      $(body).css({
        height: `${bodyheight}px`,
      });
      $(icon).removeClass("fa-plus").addClass("fa-minus");
    } else {
      $(body).css({
        height: "0",
      });
      $(icon).addClass("fa-plus").removeClass("fa-minus");
    }
  });
});
