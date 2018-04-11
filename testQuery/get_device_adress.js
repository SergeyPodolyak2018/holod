
const getDeviceAdress=(data)=>{		
		let splitName=data.NameShort.split('-');			
		let wayToTarget={
			
			'NameLong':'',
			'NameShort':'',
			'EIndex':0,
			'EType':0,
			'EFlags':0,
			'aFloor':0,
			'aHeatingLounger':0,
			'aCamera':0,
			'aInletValve':0,
			'aHeatingPipes':0,			
			'aAirCooler':0
		}
		let re1=/([A-Z])/g;
		let re2=/(\d)/g;
		
		for(let i in splitName){			
			let reRezName=splitName[i].match(re1)[0];
			let reIndex=parseInt(splitName[i].match(re2)[0]);
			if(reRezName=='F'){
				wayToTarget.aFloor=reIndex;
			}
			if(reRezName=='H' & i<2){
				wayToTarget.aHeatingLounger=reIndex;
			}
			if(reRezName=='B'){
				wayToTarget.aCamera=reIndex;
			}
			if(reRezName=='H' & i>1){
				wayToTarget.aHeatingPipes=reIndex;
			}
			if(reRezName=='G'){
				wayToTarget.aInletValve=reIndex;
			}
			if(reRezName=='C'){
				wayToTarget.aAirCooler=reIndex;
			}
		}
		
		wayToTarget.NameLong=data.NameLong;
		wayToTarget.NameShort=data.NameShort;		
		wayToTarget.EType=parseInt(data.EType);



		return wayToTarget;
}



exports.getDeviceAdress=getDeviceAdress;