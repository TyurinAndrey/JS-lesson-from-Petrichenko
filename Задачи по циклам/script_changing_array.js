var indicators = ['сила', 'гибкость', 'выносливость', 'скорость', 'ловкость'];
var levels = [8, 15, 9, 12, 11];
var trainingTime = 30;

if (trainingTime <= 30) {
  levels[indicators.indexOf('скорость')] = levels[indicators.indexOf('скорость')] + 3;
  levels[indicators.indexOf('ловкость')] = levels[indicators.indexOf('ловкость')] + 3;
} else if (trainingTime <= 60) {
  levels[indicators.indexOf('гибкость')] = levels[indicators.indexOf('гибкость')] + 3;
} else {
   levels[indicators.indexOf('сила')] = levels[indicators.indexOf('сила')] + 2;
   levels[indicators.indexOf('выносливость')] = levels[indicators.indexOf('выносливость')] + 2;
}
