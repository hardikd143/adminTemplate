$(document).ready(function () {
  $(".wrapper").click(function () {
    $(this).toggleClass("showAns");
    let arrow = $(this).find('.arrow')
    // console.log(arrow);
    $ (arrow).toggleClass('close')
    let ans = $(this).children()[1];
    let ansHeight = ans.scrollHeight - 35;
    let para = $(ans).children()[0];

    if ($(this).hasClass("showAns")) {
      $(ans).css({
        "height": `${ansHeight}px`,
        'transition':'all 0.1s linear 0s'
      });
      $(para).css({
        top: "0",
        opacity: "1",
        'transition':'all 0.2s linear 0.1s'
      });
    } else {
      $(ans).css({
        "height":`0px`,
        'transition':'all 0.2s linear 0.1s'
      });
      $(para).css({
        top: "35px",
        opacity: "0",
        'transition':'all 0.1s linear 0s'
      });
    }
  });

  $(window).resize(function () {
    for (let i = 0; i < $(".wrapper").length; i++) {
      let wrapper = $(".wrapper")[i];
      let ans = $(wrapper).children()[1];
      if ($(wrapper).hasClass("showAns")) {
          $(ans).css({height: `auto`});
        }
    }
  });
});
