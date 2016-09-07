var m=parseInt(prompt("Ingrese numero inicial"));
var n=parseInt(prompt("Cantidad de segundos:"));
var p=n*1000;
function execute(m){
	if(m<100){
		setInterval(function(){
			document.write(m++ + "..");
		},p)
	}
}
execute(m)