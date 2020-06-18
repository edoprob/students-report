function Converter(){
	console.clear();

	let number = document.getElementById("number").value;
	let base = document.getElementById("base").value;
	let digit = new Array;
	let i = -1;
	document.getElementById("result").innerHTML = "";

	if (number != "" && (isNaN(number) || number.indexOf(".") > -1)) {
		document.getElementById("number").value = "";
		alert("Write a valid number!");
		throw new Error("dead");
	}

	console.log("number before: "+number);
	while (number != 0) {
          i++;
          digit[i] = number % base;
          number = Math.floor(number / base);  // divisão inteira, ex.: 15 / 2 = 7
        }

    while (i >= 0) with (document.getElementById("result")) {
    	switch (digit[i]) {
            // Na base 16, os dígitos maiores que 10 são representados por letras:
            case 10: { innerHTML += "A"; break }
            case 11: { innerHTML += "B"; break }
            case 12: { innerHTML += "C"; break }
            case 13: { innerHTML += "D"; break }
            case 14: { innerHTML += "E"; break }
            case 15: { innerHTML += "F"; break }
            default: { innerHTML += digit[i]; break }
          }
          console.log("i before: "+i);
          i--;
    }  
	console.log("base: "+base);
	console.log("digit: "+digit);
	console.log("i after: "+i);
}