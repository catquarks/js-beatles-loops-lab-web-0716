function theBeatlesPlay(musicians, instruments){
	var sentences = []
	for (var i = 0; i < musicians.length; i++){
		sentences.push(`${musicians[i]} plays ${instruments[i]}`)
	}
	return sentences
}

function johnLennonFacts(array){
	var sentences = []
	var i = 0
	while (i < array.length){
		sentences.push(array[i] + '!!!');
		i++
	};
	return sentences
}

function iLoveTheBeatles(num){
	var array = ["I love the Beatles!"];
	if (num < 15) {
		var i = 0;
		do {
			array.push("I love the Beatles!")
			i += 1
		}
		while (i < num);
	}
	return array
}