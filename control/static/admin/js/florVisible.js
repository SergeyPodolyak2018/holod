
/*Function discription
	function show and hide elements:

	number - number of the flor
	flors - global variable vith object flors

*/
function showFlor (number) {
	
	for (let i in flors) {
		
		if(i===number.toString()){
			
			flors[i].classList.toggle('florHiden',false);
			flors[i].classList.toggle('flor',true);

		}else{
			
			flors[i].classList.toggle('flor',false);
			flors[i].classList.toggle('florHiden',true);		
		}
	}	
}