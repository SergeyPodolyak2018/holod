function showMessageFromServer(response){
	let color=''
	switch (response.type) {		
		case 1:
			showAlarmMessage('#ff0000',response);
			break;
		case 2:
			showAlarmMessage('#ffda22',response);
			break;
		case 3:
			showAlarmMessage('#31d4e0',response);
			break;
		case 4:
			showAlarmMessage('#f6f1ec',response);
			break;
		case 5:
			addDeviceToDB(response);
			break;
		/*case 500:
			location.reload(true);
			break;*/
		default:
			// statements_def
			break;
	}
	
	

}
function showAlarmMessage(color,response){
	document.getElementById('message_from_server_content').style.backgroundColor = color;
	document.getElementById('message_from_server_message').innerText = response.message;
	document.getElementById('message_from_server').style.display = 'block';
}

function confirmMessageFromServer(){
	document.getElementById('message_from_server').style.display = 'none';	
}

function addDeviceToDB(response){
	console.log(response);
	add_equipment_open(response.bufer.name);
}