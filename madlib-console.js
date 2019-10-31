var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupY = ['kittens', 'going to the bathroom', 'people with really bad haircuts', 'orangutans', 'jerk faces', 'incarcerated billionaires', 'professional hot dog eating competitors', 'people who are half human/half animal',];
var favorites = []

$('#create').click(function(){

  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));

  $('#xForY').text('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + '.');

  // console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
});

$('#save').click(function(){

  favorites.push($('#xForY').text());

  console.log(favorites);
});

$('#print').click(function(){

  for (var i = 0; i < favorites.length; i++) {
    $('#favorites').append('<div>' + favorites[i] + '</div>');
  }

});
