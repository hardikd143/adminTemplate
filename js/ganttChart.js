$(document).ready(function () {
  // getting start and end date
  sdate = new Date($(".sDate").text());
  edate = new Date($(".stoDate").text());
  // console.log(sdate, stodate);
  function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    // get all dates between start and stop date
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format("DD-MM-YYYY"));
      currentDate = moment(currentDate).add(1, "days");
    }
    return dateArray;
  }
  let dateaRR = getDates(sdate, edate);
  // console.log(dateaRR);
  for (let i = 0; i < dateaRR.length; i++) {
    let d = dateaRR[i];
    // console.log(d);
    // split date , month and year into array
    newArr = d.split("-");
    for (let j = 0; j < newArr.length; j++) {
      let ele = newArr[j];
      ele = parseInt(ele);
      newArr[j] = ele;
    }

    // for getting day and month in words
    let newD = new Date(newArr[2], newArr[1] - 1, newArr[0]);
    // above method will get date in below format ---
    // Sun Jan 09 2022 00:00:00 GMT+0530 (India Standard Time)

    let str = newD.toString();
    day = str.substring(0, 3);
    weekDay = str.substring(0, 1);
    month = str.substring(4, 7);
    let dateSpan = `<span class="date" data-day="${day}" data-month="${month}">${newArr[0]}</span>`;
    let daySpan = `<span class="day" data-weekday="${day}" >${weekDay}</span>`;
    $(".weekDates").append($(dateSpan));
    $(".weekdays").append($(daySpan));
  }

  // $("#calendar").slimScroll({
  //   railOpacity: 1,
  //   axis: "x",
  //   color: "green",
  //   alwaysVisible: true,
  //   size: "8px",
  //   width: "100%",
  //   height: "100%",
  //   railVisible: true,
  //   railColor: "#303030",
  //   railOpacity: 0.5,
  // });
});
