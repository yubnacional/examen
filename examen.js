function examen() {
	alert("hola");
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var c = document.getElementById('c').value;
	var x1 = 0;
	var x2 = 0;
	var d = (b*b) - (4*a*c);


	a = parseInt(a);
	b = parseInt(b);
    c = parseInt(c);
    
    

	
	if (d==0) {
	alert ('no tiene solucion');
	}
	else {
		x1=(-(b)+Math.sqrt((b*b)-(4*a*c)))/(2*a);

		x2=(-(b)-Math.sqrt((b*b)-(4*a*c)))/(2*a);
		
		document.getElementById('x1').value=x1;
		document.getElementById('x2').value=x2;
		return false;

			
	}
}
 