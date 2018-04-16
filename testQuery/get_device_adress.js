
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
			'aAirCooler':0,
			'aComp':0,
			'aVessel':0,
			'aPumpsGroup':0,
			'aReceiver':0,
			'aCapasitor':0

		}
		let re1=/([a-zA-Z]{1,})/g;
		let re2=/(\d)/g;
		
		for(let i in splitName){			
			let reRezName=splitName[i].match(re1)[0];
			let reIndex=parseInt(splitName[i].match(re2)[0]);
			if(reRezName=='F'){
				wayToTarget.aFloor=reIndex;
				continue;
			}
			if(reRezName=='H' & i<2){
				wayToTarget.aHeatingLounger=reIndex;
				continue;
			}
			if(reRezName=='B'){
				wayToTarget.aCamera=reIndex;
				continue;
			}
			if(reRezName=='H' & i>1){
				wayToTarget.aHeatingPipes=reIndex;
				continue;
			}
			if(reRezName=='G'){
				wayToTarget.aInletValve=reIndex;
				continue;
			}
			if(reRezName=='C'){
				wayToTarget.aAirCooler=reIndex;
				continue;
			}
			if(reRezName=='S'){
				wayToTarget.aComp=reIndex;
				continue;
			}
			if(reRezName=='R'){
				wayToTarget.aVessel=reIndex;
				continue;
			}
			if(reRezName=='P'){
				wayToTarget.aPumpsGroup=reIndex;
				continue;
			}
			if(reRezName=='J'){
				wayToTarget.aReceiver=reIndex;
				continue;
			}
			if(reRezName=='Rf'){
				wayToTarget.aCapasitor=reIndex;
				continue;
			}
		}
		
		wayToTarget.NameLong=data.NameLong;
		wayToTarget.NameShort=data.NameShort;		
		wayToTarget.EType=parseInt(data.EType);



		return wayToTarget;
}



exports.getDeviceAdress=getDeviceAdress;