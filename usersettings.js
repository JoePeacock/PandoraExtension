var settings;

function pushInfo(value) {
	settings = {
		user : value
	};
}

$(document).ready(function(){	
		$('#save').click(function() {
			if ($('#ttuser').val() != '') {
				if ($('#everySong').is(':checked')) {
			        var everySong = true;
			    } else {
			    	everySong = false;
			    }
			    var value = $('#ttuser').val() + " " + everySong;
			    console.log(value);
			    pushInfo(value);
			} else {
				console.log("Error:Username was blank");
			}	
	});
});