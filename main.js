$(document).ready(function(){
  var bet = 0;
  var correctpayout = 0;

  function hidefeedbackareas() {
    $('#feedbacktellme').css("display", "none");
    $('#feedbackfail').css("display", "none");
    $('#feedbacksuccess').css("display", "none");
  }

  function setBet(){
    bet = ((Math.floor(Math.random() * 1000)+1)*5);
    correctpayout = bet*19/20;
    $('#bet').html(bet);
    $('#payout').html(0);
    hidefeedbackareas();
  }

  function updatePayout(chipValue) {
    var payoutvalue = parseFloat($('#payout').html());
      if ((payoutvalue + chipValue)>=0) {
        $('#payout').html( payoutvalue + chipValue );
      }
  }

  setBet();

  $('.chip-btn').click(function(event){
      event.preventDefault();
      //window.console && console.log(event.currentTarget);
      let targetButton = event.currentTarget;
      let targetValue = parseFloat(targetButton.getAttribute("data-value"));
      updatePayout(targetValue);
  });

  $('#checkpleasebutton').click(function(event){
      event.preventDefault();
      hidefeedbackareas();
      //alert('correct payout: '+correctpayout+' - type: '+typeof(correctpayout));
      var attempt = parseFloat($('#payout').html());
      //alert('attempt: '+attempt+' - type: '+typeof(attempt))
      var reply = "";
      if ( attempt == correctpayout ) {
        $('#feedbacksuccess').css("display", "block");
      }
      if ( attempt != correctpayout ) {
        $('#feedbackfail').css("display", "block");
      }
  });

  $('#tellmebutton').click(function(event){
      event.preventDefault();
      hidefeedbackareas();
      var tellme = "Correct payout is "+correctpayout;
      $('#feedbacktellme').css("display", "block");
      $('#feedbacktellme').html(tellme);
  });

  $('#resetbutton').click(function(event){
      event.preventDefault();
      setBet();
  });

  $('#tryAgain').click(function(event){
      event.preventDefault();
      $('#payout').html(0);
      hidefeedbackareas();
  });

});