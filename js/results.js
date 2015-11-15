/**
 * Get the value of a querystring
 * @param  {String} field The field to get the value of
 * @param  {String} url   The URL to get the value from (optional)
 * @return {String}       The field value
 */
var getQueryString = function ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};

$(document).ready(function(){
	var muscle_id = getQueryString('muscle_id');
	$(".muscle_id").val(muscle_id);
	$.ajax({
	  method: "GET",
	  crossDomain: true,
	  url: "http://52.88.98.2:8000/muscle/"+muscle_id+"/"
	})
	  .done(function( data ) {
	    $("#muscle_group").html(data.muscle.name);

	    $.each(data.exercises, function( i, obj ) {
	    	$("#exercises").append('<li class="list-group-item text-capitalize">'+obj.name+'</br>'+obj.description+'<img class="img-responsive" src="'+obj.image+'"/></li>');
		});

		$.each(data.stretches, function( i, obj ) {
	    	$("#stretches").append('<li class="list-group-item text-capitalize">'+obj.name+'</br>'+obj.description+'<img class="img-responsive" src="'+obj.image+'"/></li>');
		});

		$.each(data.injuries, function( i, obj ) {
	    	$("#injuries").append('<li class="list-group-item text-capitalize">'+obj.name+'</br>'+obj.description+'<img class="img-responsive" src="'+obj.image+'"/></li>');
		});

	  });
});