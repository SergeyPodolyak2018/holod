var bottons=require('./menuButtons');
const getButtons=(name)=>{
		let wayToTarget=name.split('-');
		let re=/([A-Z])/;
		let elementType=wayToTarget[wayToTarget.length-1].match(re)[1];
		
		
		return bottons.jsontable[elementType];
}



exports.getButtons=getButtons;