$(document).ready(function(){

	var right = 0
	var incorrect = 0
	var questionsAnswered = 0
	var result = ''
	var timerRunning = false
	var timeLeft = 60
	var intervalId;

	$('#start').on('click', function time() {
		intervalId = setInterval(decrement, 1000);
	});

	$('.question').one('click', function playerChoice() {
		if ($(this).val() === '#correct') {
			result = true;
			right++;
			questionsAnswered++;
			console.log(correct);
		}
		else {
			result = false;
			incorrect++;
			questionsAnswered++;
			console.log(incorrect);
		}
	});

	function decrement() {
		timeLeft--;
		$('#timer').text(timeLeft);

		 if (timeLeft === 0 || questionsAnswered === 3) {
		 	stop();
		 	$('.incorrect').hide(2000);
		 	$('#result').text('You scored: ' + right + ' out of 3!');
		 	// ^^ This doesn't work right.  For some reason it's not recording how many correct/incorrect answers there were.
		 }
	}


	function stop() {
		clearInterval(intervalId);
	}

	$('#reset').on('click', function () {
		right = 0
		incorrect = 0
		timeLeft = 60
		$('.incorrect').show();
		$('#result').empty();
		$('#timer').empty();
	})


	// console.log(timeLeft);
	console.log(questionsAnswered);
	console.log(right);
	console.log(incorrect);






	// 1. develop questions and answers
	// 2. win/loss (time sensitive)
	// 3. display results (and correct answers)

})