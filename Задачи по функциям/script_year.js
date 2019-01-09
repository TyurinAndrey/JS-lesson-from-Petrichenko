var getYears = function (firstYear, lastYear, sumNumbers) {
    var goodYears = [];
    for (var i = firstYear; i <= lastYear; i++) {
      var arrYear = i.toString().split('');
      var sum = 0;
      for(var j = 0; j < arrYear.length; j++) {
        sum += Number(arrYear[j]);
      }
      if (sum === sumNumbers) {
        goodYears.push(i);
      }
    }
    return goodYears;
  };