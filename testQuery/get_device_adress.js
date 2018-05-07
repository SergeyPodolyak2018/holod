
const getDeviceAdress=(data)=>{		
		let splitName=data.NameShort.split('-');			
		let wayToTarget={
			
			'NameLong':'',
			'NameShort':'',
			'EIndex':0,
			'EType':0,
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
			'aCapasitor':0,
			'aCompControl':0,


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
			if(reRezName=='H' && i<2){
				wayToTarget.aHeatingLounger=reIndex;
				wayToTarget.EType=2;
				continue;
			}
			if(reRezName=='B'){
				wayToTarget.aCamera=reIndex;
				if (i<2){
					wayToTarget.EType=4;
				}
				continue;
			}
			if(reRezName=='H' && i>1){
				wayToTarget.aHeatingPipes=reIndex;
				wayToTarget.EType=2;
				continue;
			}
			if(reRezName=='G'){
				wayToTarget.aInletValve=reIndex;
				wayToTarget.EType=3;
				continue;
			}
			if(reRezName=='C'){
				wayToTarget.aAirCooler=reIndex;
				wayToTarget.EType=1;
				continue;
			}
			if(reRezName=='S'){
				wayToTarget.aComp=reIndex;
				wayToTarget.EType=5;
				continue;
			}
			if(reRezName=='R'){
				wayToTarget.aVessel=reIndex;
				wayToTarget.EType=6;
				continue;
			}
			if(reRezName=='P'){
				wayToTarget.aPumpsGroup=reIndex;
				wayToTarget.EType=7;
				continue;
			}
			if(reRezName=='J'){
				wayToTarget.aReceiver=reIndex;
				wayToTarget.EType=8;
				continue;
			}
			if(reRezName=='Rf'){
				wayToTarget.aCapasitor=reIndex;
				wayToTarget.EType=9;
				continue;
			}
			if(reRezName=='M'){
				wayToTarget.aCompControl=reIndex;
				wayToTarget.EType=10;
				continue;
			}
		}
		
		wayToTarget.NameLong=data.NameLong;
		wayToTarget.NameShort=data.NameShort;		

		return wayToTarget;
}

exports.getDeviceAdress=getDeviceAdress;