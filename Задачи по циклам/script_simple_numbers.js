var number = 10000;

nextTime:
for (var i = 2; i < number; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) continue nextTime;
    }

    console.log(i);
  
}