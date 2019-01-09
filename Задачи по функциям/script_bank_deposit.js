var calculateDeposit = function (firstSum, percent, time, capitalize) {
    var Sum = firstSum;
    if (capitalize) {
     for (var i = 1; i <= time; i++) {
      Sum = Sum + ((percent / 100) / 12) * Sum;  
     }
    } else {
     Sum = Sum + ((percent / 100) / 12) * time * Sum;
    }
    return Math.floor(Sum);
  };