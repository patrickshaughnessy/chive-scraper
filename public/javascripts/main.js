$(document).ready(init);

function init(){

  $.get('/girls')
    .done(function(data){
      console.log(data)
    })
    .fail(function(err){
      console.log(err);
    })

  getNewGirls();

  $('#girl1').click(rankGirl1);
  $('#girl2').click(rankGirl2);

  $('#goToRankingsPage').click(function(){
    window.location.href = '/rankings';
  })
}

function rankGirl1(){
  var id = $('#girl1 img').data('id');
  $.post(`/girls/rank/${id}`)
    .done(function(data){
      location = location;
    })
    .fail(function(err){
      console.error(err);
    })
}
function rankGirl2(){
  var id = $('#girl2 img').data('id');
  $.post(`/girls/rank/${id}`)
    .done(function(data){
      location = location;
    })
    .fail(function(err){
      console.error(err);
    })
}

function getNewGirls(){
  $.get('/girls/new')
    .done(function(data){
      $('#girl1 img').attr('src', data[0].url).data('id', data[0]._id)
      $('#girl2 img').attr('src', data[1].url).data('id', data[1]._id)
    })
    .fail(function(err){
      console.error(err);
    })
}
