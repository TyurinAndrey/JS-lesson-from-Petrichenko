var getProfitableDeposit = function (firstSum, time, percentSimple, percentCapitalize) {
  var Sum1 = firstSum;
  var Sum2 = firstSum;
 for (var i = 1; i <= time; i++) {
    Sum1 = Sum1 + ((percentCapitalize / 100) / 12) * Sum1;  
   }
    Sum2 = Sum2 + ((percentSimple / 100) / 12) * time * Sum2;
  
  if (Sum1 > Sum2) {
    
   return  ('Выбирай капитализацию. Заработаешь ' + Math.floor(Sum1));
  } else {
    
   return ('Выбирай обычный вклад. Заработаешь ' + Math.floor(Sum2));
  }
}