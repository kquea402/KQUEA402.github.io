$(function(){
	var endpoints = [
		"https://kquea402.github.io/api.json",
		"https://glics998.github.io/api.json",
		"https://colindharrington.github.io/api.json",
		"https://hoant626.github.io/api.json",
		"https://karla772.github.io/api.json",
		"https://leeh779.github.io/api.json",
		"https://lis874.github.io/api.json",
		"https://phoebechloee.github.io/api.json",
		"https://luw779.github.io/api.json",
		"https://pana005.github.io/api.json",
		"https://raos130.github.io/api.json",
		"https://samsj948.github.io/api.json",
		"https://Mwedd9.github.io/api.json",
	];
		$('.button').click(function() {
			console.log( $(this) );
			var url = $(this).data('url');
			console.log(url);

			$.get(url, function(data){
				  console.log(data);
				  $('.word-adjective-1').html(data.adjective1);
				  $('.word-adjective-2').html(data.adjective2);
				  $('.word-art-Supply').html(data.artSupply);
				  $('.word-computer-Software').html(data.computerSoftware);
				  $('.word-website-Name').html(data.websiteName);
				  $('.word-artist-Name').html(data.artistName);
				  $('.word-celebrity-Name').html(data.celebrityName);
				  $('.word-noun-1').html(data.noun1);
				  $('.word-noun-2').html(data.noun2);
				  $('.word-plural-Noun-1').html(data.pluralNoun1);
				  $('.word-plural-Noun-2').html(data.pluralNoun2);
				  $('.word-plural-Noun-3').html(data.pluralNoun3);
				  $('.word-verb-Ending-In-Ing').html(data.verbEndingInIng);
				  $('.word-place-In-New-York').html(data.placeInNewYork);
				  $('.word-body-part').html(data.bodyPart);
				  $('.word-numbers').html(data.numbers);
				  $('.word-foods').html(data.foods);

			})

		})

		.fail(function() {
	  	console.log('Error in GET request. Handle the error gracefully.');
	});
});