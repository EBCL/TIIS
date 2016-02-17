
$("#leftNav a").on('click', function() {
	$(this).addClass('active').siblings().removeClass('active');
});

routie({
	'': function() {
		appendPage ("importFile.html");
    },
    'importFile': function() {
    	appendPage ("importFile.html");
    },
    'creatFile': function() {
    	appendPage ("creatFile.html");
    },
    'setting': function() {
    	appendPage ("setting.html");
    }
});


function appendPage (pageName,parentCon) {
	if (parentCon == null);
	parentCon = "rightCon";

	$.ajax({
		url: pageName,
		type: 'GET',
	})
	.done(function(data) {
		$("#"+ parentCon).empty();
		$("#"+ parentCon).append(data);
	})
	
	
}