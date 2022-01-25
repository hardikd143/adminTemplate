$(document).ready(function () {
  // mini sidebar
  $(".MiniSidebarBtn").click(function () {
    $(this).css("display", "none");
    let sideSpan = $(".side-links span");
    for (let i = 0; i < sideSpan.length; i++) {
      let span = $(sideSpan)[i];
      $(span).css({
        "padding-left": "0",
        width: "0px",
      });
    }
    $(".sidebar").css("width", "60px");
    $(".main-content").css("margin-left", "60px");
    $(".MaxsideBarBtn").removeClass("rotate180");
  });
  // max sidebar
  $(".MaxsideBarBtn").click(function () {
    $(this).toggleClass("rotate180");
    if ($(this).hasClass("rotate180")) {
      $(".MiniSidebarBtn").css("display", "grid");
      let sideSpan = $(".side-links span");

      for (let i = 0; i < sideSpan.length; i++) {
        let span = $(sideSpan)[i];
        $(span).css({
          "padding-left": "10px",
          width: "180px",
        });
      }
      $(".sidebar").css("width", "240px");
      $(".main-content").css("margin-left", "240px");
    } else {
      $(".MiniSidebarBtn").click();
    }
  });
  $(window).on("resize", function () {
    if (window.outerWidth < 640) {
      let sideSpan = $(".side-links span");
      $(".main-content").css("margin-left", "0");
      $(".MaxSidebarBtn").removeClass("rotate180");
      for (let i = 0; i < sideSpan.length; i++) {
        let span = $(sideSpan)[i];
        $(span).css({
          "padding-left": "10px",
          width: "180px",
        });
      }
      $(".sidebar").css("width", "240px");
    } else {
      if ($(".sidebar").css("width") == "240px") {
        $(".main-content").css("margin-left", "240px");
      }
    }
  });
  // open sidebar
  $(".collapse-sidebar").click(function () {
    $(this).toggleClass("open-sidebar");
    if ($(this).hasClass("open-sidebar")) {
      $(this).css("transform", "rotateY(180deg)");
      $(".sidebar").css("transform", "translateX(0)");
    } else {
      $(this).css("transform", "rotateY(0deg)");
      $(".sidebar").css("transform", "translateX(-100%)");
    }
  });
  $(window).resize(function () {
    if (window.outerWidth > 640) {
      $(".collapse-sidebar").css("transform", "rotateY(180deg)");
      $(".sidebar").css("transform", "translateX(0)");
    } else {
      $(".collapse-sidebar").css("transform", "rotateY(0deg)");
      $(".sidebar").css("transform", "translateX(-100%)");
      $(".collapse-sidebar").removeClass("open-sidebar");
    }
  });
  //  dropdown in sidebar
  $(".open-side-dropdown").click(function () {
    $(this).toggleClass("open");
    let ul = $(this).next()[0];
    let a = $(this).children()[1];
    let icon = $(a).children()[0];
    if ($(this).hasClass("open")) {
      $(ul).css("height", `${ul.scrollHeight}px`);
      $(icon).css("transform", "rotate(90deg)");
    } else {
      $(ul).css("height", "0");
      $(icon).css("transform", "rotate(0deg)");
    }
  });

  //  see more Notification
  $(" .notificationseemore").click(function () {
    $(this).toggleClass("show");
    if ($(this).hasClass("show")) {
      $(".notificationDropdown .notificationMsg.seeMore").css({
        height: "65px",
        "padding-top": "10px",
        "padding-bottom": "10px",
      });
      $(this).children().text("See less");
    } else {
      $(".notificationDropdown .notificationMsg.seeMore").css({
        height: "0px",
        "padding-top": "0",
        "padding-bottom": "0",
      });
      $(this).children().text("See all");
    }
  });
  // comment see more
  $(" .commentseemore").click(function () {
    $(this).toggleClass("show");
    if ($(this).hasClass("show")) {
      $(".commentDropdown .notificationMsg.seeMore").css({
        height: "65px",
        "padding-top": "10px",
        "padding-bottom": "10px",
      });
      $(this).children().text("See less");
    } else {
      $(".commentDropdown .notificationMsg.seeMore").css({
        height: "0px",
        "padding-top": "0",
        "padding-bottom": "0",
      });
      $(this).children().text("See all");
    }
  });

  // open Notification
  $(".openNotification").click(function () {
    $(".openComment , .openProfile").removeClass("open");
    $(".commentDropdown , .mainprofileDropdown").css("display", "none");
    $(this).toggleClass("open");
    if ($(this).hasClass("open")) {
      $(".notificationDropdown").css("display", "block");
    } else {
      $(".notificationDropdown").css("display", "none");

      //   removing see more functionality
      $(".notificationseemore").removeClass("show");
      $(".notificationDropdown .notificationMsg.seeMore").css({
        height: "0px",
        "padding-top": "0",
        "padding-bottom": "0",
      });
      $(".notificationseemore").children().text("See all");
    }
  });
  // open Comment
  $(".openComment").click(function () {
    $(".openNotification , .openProfile").removeClass("open");
    $(".notificationDropdown , .mainprofileDropdown").css("display", "none");
    $(this).toggleClass("open");
    if ($(this).hasClass("open")) {
      $(".commentDropdown").css("display", "block");
    } else {
      $(".commentDropdown").css("display", "none");

      //   removing see more functionality
      $(".commentseemore").removeClass("show");
      $(".commentDropdown .notificationMsg.seeMore").css({
        height: "0px",
        "padding-top": "0",
        "padding-bottom": "0",
      });
      $(".commentseemore").children().text("See all");
    }
  });

  // open profile
  $(".openProfile").click(function () {
    $(".openNotification , .openComment").removeClass("open");
    $(".commentDropdown , .notificationDropdown").css("display", "none");
    $(this).toggleClass("open");
    if ($(this).hasClass("open")) {
      $(".mainprofileDropdown").css("display", "block");
    } else {
      $(".mainprofileDropdown").css("display", "none");
    }
  });

  // scroll btn
  $(".scrollTopBtn").click(function () {
    $(window).scrollTop(0);
  });
  $(window).on("scroll", function () {
    let scrolled = $(window).scrollTop();
    if (scrolled > 1100) {
      $(".scrollTopBtn").css("display", "grid");
    } else {
      $(".scrollTopBtn").css("display", "none");
    }
  });
});

