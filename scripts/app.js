$(document).ready(function(){

	console.log("DOM loaded");

  var URL = 'http://api.giphy.com/v1/gifs/search';

  $('#gifForm').on('submit', function(event) {
  	// console.log("Form submited");
    $('.col-sm-3').remove();
  	event.preventDefault();
    var whatGif = $('#whatGif').val();
    // console.log('A:' + 'q=' + whatGif + '&api_key=dc6zaTOxFJmzC');
    // console.log('B:' + $("form").serialize());
  	$.ajax({
  		method: 'GET',
  		url: URL,
      data: $("form").serialize(),
  		// data: 'q=' + whatGif + '&api_key=dc6zaTOxFJmzC',
  		dataType: 'json',
  		success: onClickReqSuccess
  	})
  });

  function onClickReqSuccess (responseData) {
  	console.log("*** success ***");
    var picObjs = responseData.data;
    for (var i = 0; i<picObjs.length; i++) {
      var newString = '<div class="col-sm-3"><img src="' + picObjs[i].images.fixed_width.url + '"></div>';
      // console.log("New string: " + newString);
      $('#picsHere').append(newString);
    }
    // console.log(responseData);
  }


});			// on load
