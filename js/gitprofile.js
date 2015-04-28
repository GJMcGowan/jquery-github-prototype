$(document).ready(function() {

  $('.gitprofile').on('submit', function(e) {
    
    e.preventDefault();

    var url = 'https://api.github.com/users/' + $('input.username').val();

    var template = $('template').html();

    $.get(url, function(info) {
      console.log(info);
      item = info;
      console.log(item);
      $('.container').prepend(Mustache.render(template, info));
    }).fail(failureMessage()).always(function() {
      $('input.username').val('');
    });
  });

  function failureMessage(){
      $('.container').prepend("User not found");
  };
});
