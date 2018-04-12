"use strict"
//------------------------------------------------------------------------------------------------------------
//Конструктор объектов охладитель
function getNewObjectOfCompressor(objectFromSvg,name){
	this.name 					= name;	
	this.compressor				= objectFromSvg.getElementsByClassName('status');									//статус
	this.pressureSensors 		= { 'pressureSensor1':objectFromSvg.getElementsByClassName('pressureSensor1')[0],
									'pressureSensor2':objectFromSvg.getElementsByClassName('pressureSensor2')[0],
									'pressureSensor3':objectFromSvg.getElementsByClassName('pressureSensor3')[0],
									'pressureSensor4':objectFromSvg.getElementsByClassName('pressureSensor4')[0],
									'pressureSensor5':objectFromSvg.getElementsByClassName('pressureSensor5')[0],
									'pressureSensor6':objectFromSvg.getElementsByClassName('pressureSensor6')[0]
									};																				//статус
	this.pressureIndicators		= { 'pressure1':objectFromSvg.getElementsByClassName('pressure1')[0],
									'pressure2':objectFromSvg.getElementsByClassName('pressure2')[0],
									'pressure3':objectFromSvg.getElementsByClassName('pressure3')[0],
									'pressure4':objectFromSvg.getElementsByClassName('pressure4')[0],
									'pressure5':objectFromSvg.getElementsByClassName('pressure5')[0],
									'pressure6':objectFromSvg.getElementsByClassName('pressure6')[0]
									};																				//статус
	this.temperatureIndicators	= { 'temperature1':objectFromSvg.getElementsByClassName('temperature1')[0],
									'temperature2':objectFromSvg.getElementsByClassName('temperature2')[0],
									'temperature3':objectFromSvg.getElementsByClassName('temperature3')[0],
									'temperature4':objectFromSvg.getElementsByClassName('temperature4')[0]									
									};
	this.diferentialPressure	= objectFromSvg.getElementsByClassName('dPressure1')[0];
	
	//this.window_sensors 	= document.getElementById('coller_sensors');
	this.intervalLockation;	  
	this.s 		= 0;																								//статус
    this.i 		= 0;																								//ошибка
    

    /*this.sensors={'d1'		:0,
				  'd2'		:0,
				  'd3'		:0,    			  
    			  'h_i_po'	:0,
    			  'h_i_au'	:0,
    			  'h_i_km'	:0,
    			  'q_km'	:0,
    			  'i_au'	:0,
    			  'i_po'	:0,
    			  'v1_i_km'	:0,
    			  'v2_i_km'	:0,

    			};    			*/							

	this.setStatusMain=function(){		
		console.log('set setStatusMain');
		switch (this.s) {
			case 0:				
				[...this.compressor].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				break;
			case 1:				
				[...this.compressor].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 2:				
				[...this.compressor].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 3:				
				[...this.compressor].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				break;	
			default:
				// statements_def
				break;
		}

	}
	/*this.setStatusTd=function(){		
		console.log('set setStatusTd');
		this.set_sensores();
		this.coolerTemperature1[0].innerHTML=this.td.d1;
		this.coolerTemperature2[0].innerHTML=this.td.d2;
		this.coolerTemperature3[0].innerHTML=this.td.d3;

	}*/
	/*this.setStatusAirch=function(){		
		console.log('set setStatusAirch');
		this.set_sensores();
		switch (this.airch.s) {
			case 0:
				[...this.coolerHiterManual].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				[...this.coolerHiterAuto].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				break;
			case 1:
				[...this.coolerHiterManual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				[...this.coolerHiterAuto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 2:
				[...this.coolerHiterManual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.coolerHiterAuto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 3:
				[...this.coolerHiterManual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.coolerHiterAuto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				break;	
			default:
				// statements_def
				break;
		}
	}*/
	/*this.setStatusAircvo1=function(){		
		console.log('set setStatusAircvo1');
		this.set_sensores();
		switch (this.aircvo1.s) {
			case 0:
				[...this.coolerVent1Manual].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				[...this.coolerVent1Auto].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				break;
			case 1:
				[...this.coolerVent1Manual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				[...this.coolerVent1Auto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 2:
				[...this.coolerVent1Manual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.coolerVent1Auto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 3:
				[...this.coolerVent1Manual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.coolerVent1Auto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				break;	
			default:
				// statements_def
				break;
		}
	}*/
	/*this.setStatusAircvo2=function(){		
		console.log('set setStatusAircvo2');
		this.set_sensores();
	}*/

	/*this.set_sensores=function(){
		console.log('привет из cooler set_sensores');
		this.sensors.d1		=this.td.d1;		//set sensor
		this.sensors.d2		=this.td.d2;		//set sensor
		this.sensors.d3		=this.td.d3;		//set sensor
		this.sensors.h_i_po	=this.airch.i_po;	//set sensor
    	this.sensors.h_i_au	=this.airch.i_au;	//set sensor
    	this.sensors.h_i_km	=this.airch.i_km;	//set sensor
    	this.sensors.h_q_km	=this.airch.q_km;	//set sensor
    	this.sensors.q_km	=this.q_km;			//set sensor
    	this.sensors.i_au	=this.i_au;			//set sensor
    	this.sensors.i_po	=this.i_po;			//set sensor
    	this.sensors.v1_i_km=this.aircvo1.i_km;	//set sensor
    	this.sensors.v2_i_km=this.aircvo2.i_km;	//set sensor

		console.log(this.sensors);		
	}*/

	/*this.set_sensores_status=function(){
		console.log('привет из cooler set_sensores_status');
		let re=/d[0-9]/;		
		for (let i in this.sensors) {			
			if(!i.match(re)){						
				if (this.sensors[i] == 1) {
					this.window_sensors.getElementsByClassName(''+i)[0].style.cssText='background:#00FF00;box-shadow:0 0 25px #00FF00;'+
																					  '-webkit-box-shadow:0 0 25px #00FF00';                    
	            }else{                   	
	                this.window_sensors.getElementsByClassName(''+i)[0].style.cssText='background:#e9e9e9;box-shadow:0 0 25px #e9e9e9;'+
	                																  '-webkit-box-shadow:0 0 25px #e9e9e9';
	            }
	        }else{this.window_sensors.getElementsByClassName(''+i)[0].innerHTML=this.sensors[i]}
		}		
	}*/

	/*this.setEror=function(){		
		let maskNorm=2;
		let maskRemont=4;
		if((this.e & maskNorm)>0){			
			[...this.iconAlarm].forEach(function(item, i, arr) {
				item.style.cssText='display:none;'
			});
		}else{			
			[...this.iconAlarm].forEach(function(item, i, arr) {
				item.removeAttribute("style");
			});
		}
		if((this.e & maskRemont)>0){			
			[...this.iconRemont].forEach(function(item, i, arr) {				  
				item.removeAttribute("style");
			});
		}else{			
			[...this.iconRemont].forEach(function(item, i, arr) {				  
				item.style.cssText='display:none;'
			});
		}
	}*/
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectOfCompressor.prototype.myStatus = function(state){	
	console.log('привет из Compressor');
	console.log(state);

	if(this.s!=state.s){
		this.s=state.s;
		this.setStatusMain();
	}
	if(this.i!=state.i){
		this.i=state.i;
		//this.setEror();
	}
	/*if(this.e!=state.e){
		this.e=state.e;
		this.setEror();
	}
	if(this.i_po!=state.aircva.i_po){
		this.i_po=state.aircva.i_po;
		//this.setStatus();
	}	
	if(this.i_au!=state.aircva.i_au){
		this.i_au=state.aircva.i_au;
		//this.setStatus();
	}	
	if(this.q_km!=state.aircva.q_km){
		this.q_km=state.aircva.q_km;
		//this.setStatus();
	}
	if(JSON.stringify(this.td)!==JSON.stringify(state.td)){
        this.td=Object.assign({}, state.td);
        this.setStatusTd();
    }
    if(JSON.stringify(this.airch)!==JSON.stringify(state.airch)){
        this.airch=Object.assign({}, state.airch);
        this.setStatusAirch();
    }
    if(JSON.stringify(this.aircvo1)!==JSON.stringify(state.aircva.aircvo1)){
        this.aircvo1=Object.assign({}, state.aircva.aircvo1);
        this.setStatusAircvo1();
    }
    if(JSON.stringify(this.aircvo2)!==JSON.stringify(state.aircva.aircvo2)){
        this.aircvo2=Object.assign({}, state.aircva.aircvo2);
        this.setStatusAircvo2();
    }	*/
};
getNewObjectOfCompressor.prototype.open_sensors = sensors_open;
getNewObjectOfCompressor.prototype.close_sensors = sensors_close;


//-----------------------------------------------------------------------------------------------------------------------------------
//Конструктор объектов ресивер
function getNewObjectOfReceiver(objectFromSvg,name){

	this.name 					= name;	
	this.receiver				= objectFromSvg.querySelector('.status');
	this.pressureIndicator 		= objectFromSvg.getElementsByClassName('pressure1')[0];
	this.levelIndicator 		= objectFromSvg.getElementsByClassName('level1')[0];
	this.levelSensor1			= objectFromSvg.getElementsByClassName('LevelSensor1')[0];
	this.levelSensor2			= objectFromSvg.getElementsByClassName('LevelSensor2')[0];
	this.levelSensor3			= objectFromSvg.getElementsByClassName('LevelSensor3')[0];
	this.iconAlarm 				= objectFromSvg.querySelector('.attention');
	this.valve 					= new getNewObjectInsideGate(objectFromSvg.getElementsByClassName('gate')[0]);
	this.motoValve 				= new getNewObjectInsideMotoGate(objectFromSvg.getElementsByClassName('motoGate')[0]);

	
	
	//this.window_sensors 	= document.getElementById('coller_sensors');

	this.intervalLockation;	//хранилище циклической функции

	this.s 		= 0;	 	//статус
    this.i 		= 0;	 	//инфо     

    this.sensors={"i_l171": 0,		//Датчик уровня аварийный
        		  "i_l172": 0,		//Датчик уровня аварийный
        		  "i_l175": 0,		//Датчик уровня аварийный
        		  "i_pre": "0.00",	//давление
        		  "i_lel": "0.00"	//уровень
    			};    										

	this.setStatusMain=function(){		
		console.log('set setStatusMain');
		switch (this.s) {
			case 0:
				  receiver.removeAttribute("style");
				break;
			case 1:
				  receiver.style.cssText='fill:#00ff00;'
				break;
			case 2:
				  receiver.style.cssText='fill:#00ff00;'
				break;
			case 3:
				  receiver.style.cssText='fill:#ff0000;'
				break;	
			default:
				// statements_def
				break;
		}

	}
	this.setStatusIndicator=function(){		
		console.log('set setStatusIndicator');
		this.pressureIndicators.innerHTML 	= this.sensors.i_pre;
		this.levelIndicator.innerHTML 		= this.sensors.i_lel;		
		//this.set_sensores();
	}
	/*this.setStatusAirch=function(){		
		console.log('set setStatusAirch');
		this.set_sensores();
		switch (this.airch.s) {
			case 0:
				[...this.coolerHiterManual].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				[...this.coolerHiterAuto].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				break;
			case 1:
				[...this.coolerHiterManual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				[...this.coolerHiterAuto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 2:
				[...this.coolerHiterManual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.coolerHiterAuto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 3:
				[...this.coolerHiterManual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.coolerHiterAuto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				break;	
			default:
				// statements_def
				break;
		}
	}*/
	/*this.setStatusAircvo1=function(){		
		console.log('set setStatusAircvo1');
		this.set_sensores();
		switch (this.aircvo1.s) {
			case 0:
				[...this.coolerVent1Manual].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				[...this.coolerVent1Auto].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				break;
			case 1:
				[...this.coolerVent1Manual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				[...this.coolerVent1Auto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 2:
				[...this.coolerVent1Manual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.coolerVent1Auto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 3:
				[...this.coolerVent1Manual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.coolerVent1Auto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				break;	
			default:
				// statements_def
				break;
		}
	}*/
	/*this.setStatusAircvo2=function(){		
		console.log('set setStatusAircvo2');
		this.set_sensores();
	}*/

	/*this.set_sensores=function(){
		console.log('привет из cooler set_sensores');
		this.sensors.d1		=this.td.d1;		//set sensor
		this.sensors.d2		=this.td.d2;		//set sensor
		this.sensors.d3		=this.td.d3;		//set sensor
		this.sensors.h_i_po	=this.airch.i_po;	//set sensor
    	this.sensors.h_i_au	=this.airch.i_au;	//set sensor
    	this.sensors.h_i_km	=this.airch.i_km;	//set sensor
    	this.sensors.h_q_km	=this.airch.q_km;	//set sensor
    	this.sensors.q_km	=this.q_km;			//set sensor
    	this.sensors.i_au	=this.i_au;			//set sensor
    	this.sensors.i_po	=this.i_po;			//set sensor
    	this.sensors.v1_i_km=this.aircvo1.i_km;	//set sensor
    	this.sensors.v2_i_km=this.aircvo2.i_km;	//set sensor

		console.log(this.sensors);		
	}*/

	/*this.set_sensores_status=function(){
		console.log('привет из cooler set_sensores_status');
		let re=/d[0-9]/;		
		for (let i in this.sensors) {			
			if(!i.match(re)){						
				if (this.sensors[i] == 1) {
					this.window_sensors.getElementsByClassName(''+i)[0].style.cssText='background:#00FF00;box-shadow:0 0 25px #00FF00;'+
																					  '-webkit-box-shadow:0 0 25px #00FF00';                    
	            }else{                   	
	                this.window_sensors.getElementsByClassName(''+i)[0].style.cssText='background:#e9e9e9;box-shadow:0 0 25px #e9e9e9;'+
	                																  '-webkit-box-shadow:0 0 25px #e9e9e9';
	            }
	        }else{this.window_sensors.getElementsByClassName(''+i)[0].innerHTML=this.sensors[i]}
		}		
	}*/

	this.setEror=function(){		
		let maskNorm=2;
		let maskRemont=4;
		if((this.e & maskNorm)>0){			
			iconAlarm.style.cssText='display:none;'			
		}else{			
			iconAlarm.removeAttribute("style");			
		}
		/*if((this.e & maskRemont)>0){			
			[...this.iconRemont].forEach(function(item, i, arr) {				  
				item.removeAttribute("style");
			});
		}else{			
			[...this.iconRemont].forEach(function(item, i, arr) {				  
				item.style.cssText='display:none;'
			});
		}*/
	}
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectOfReceiver.prototype.myStatus = function(state){	
	console.log('привет из Resiver');
	console.log(state);

	if(this.s!=state.s){
		this.s=state.s;
		this.setStatusMain();
	}
	if(this.i!=state.i){
		this.i=state.i;
		this.setEror();
	}
	if(this.sensors.i_pre !== state.i_pre || this.sensors.i_lel !== state.i_lel){ 
		this.sensors.i_pre = state.i_pre;
		this.sensors.i_lel = state.i_lel;
        this.setStatusIndicator();
    }
		this.sensors.i_l171 = state.i_l171;
		this.sensors.i_l172 = state.i_l172;
		this.sensors.i_l175 = state.i_l175;	
};
getNewObjectOfReceiver.prototype.open_sensors = sensors_open;
getNewObjectOfReceiver.prototype.close_sensors = sensors_close;

//-------------------------------------------------------------------------------------------------------------------------
//Конструктор объектов внутренних - клапан
function getNewObjectInsideGate(objectFromSvg){	
	
	this.gate		= objectFromSvg.getElementsByClassName('status');
	this.iconAlarm 	= objectFromSvg.getElementsByClassName('attention');	
	
	this.s 		= 0;		//статус       
    this.i 		= 0;		//ошибка
    this.sensors={'i_po':0,	//питание
    			  'i_au':0,    			  
    			  'q_km':0	//обратная связь
    			};	

	this.setStatus=function(){		
		console.log('set status gate=',this.name);

		switch (this.s) {
			case 0:				
				[...this.gate].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				break;
			case 1:				
				[...this.gate].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 2:				
				[...this.gate].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 3:				
				[...this.gate].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				break;	
			default:
				// statements_def
				break;
		}

	}

	

	this.setEror=function(){		
		let maskNorm=2;
		let maskRemont=4;
		if((this.i & maskNorm)>0){			
			[...this.iconAlarm].forEach(function(item, i, arr) {
				  item.style.cssText='display:none;'
			});
		}else{			
			[...this.iconAlarm].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
			});
		}
	}
	this.getSensors=function(){		
		return this.sensors;
	}
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectInsideGate.prototype.myStatus = function(state){	
	console.log('привет из ReceiverGate');
	if(this.s!=state.s){
		this.s=state.s;
		this.setStatus();
	}
	if(this.i!=state.i){
		this.i=state.i;
		this.setEror();
	}
	this.sensors.i_po=state.i_po;
	this.sensors.q_km=state.q_km;
	this.sensors.i_au=state.i_au;	

};

//--------------------------------------------------------------------------------------------------------------------------------------
//Конструктор объектов внутренних - motoклапан
function getNewObjectInsideMotoGate(objectFromSvg){	
	
	this.gate		= objectFromSvg.getElementsByClassName('status');
	this.iconAlarm 	= objectFromSvg.getElementsByClassName('attention');	
	this.position 	= objectFromSvg.getElementsByClassName('position1')[0];
	this.s 		= 0;		//статус       
    this.i 		= 0;		//ошибка
    this.sensors={"i_po": 0,
          		  "i_e": 0,
          		  "i_op": 0,
          		  "i_cl": 0,
          		  "i_pos": 0,
          		  "i_spos": 0
    			};	

	this.setStatus=function(){		
		console.log('set status Motogate');

		switch (this.s) {
			case 0:				
				[...this.gate].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				break;
			case 1:				
				[...this.gate].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 2:				
				[...this.gate].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 3:				
				[...this.gate].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				break;	
			default:
				// statements_def
				break;
		}

	}

	

	this.setEror=function(){		
		let maskNorm=2;
		let maskRemont=4;
		if((this.i & maskNorm)>0){			
			[...this.iconAlarm].forEach(function(item, i, arr) {
				  item.style.cssText='display:none;'
			});
		}else{			
			[...this.iconAlarm].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
			});
		}
	}
	this.getSensors=function(){		
		return this.sensors;
	}

	this.setStatusIndicator=function(){		
		console.log('set setStatusIndicator');		
		this.position.innerHTML 		= this.sensors.i_pos;
		//this.set_sensores();
	}
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectInsideMotoGate.prototype.myStatus = function(state){	
	console.log('привет из ReceiverGate');
	if(this.s!=state.s){
		this.s=state.s;
		this.setStatus();
	}
	if(this.i!=state.i){
		this.i=state.i;
		this.setEror();
	}
	if(this.sensors.i_pos!=state.i_pos){
		this.sensors.i_pos=state.i_pos;
		this.setStatusIndicator();
	}	
		  this.sensors.i_po = state.i_po;
          this.sensors.i_e = state.i_e;
          this.sensors.i_op = state.i_op;
          this.sensors.i_cl = state.i_cl;          
          this.sensors.i_spos = state.i_spos;
};

//-----------------------------------------------------------------------------------------------------------------------
//Конструктор объектов ресивер
function getNewObjectOfPumpGroup(objectFromSvg,name){

	this.name 					= name;	
	this.receiver				= objectFromSvg.querySelector('.status');
	this.pressureIndicator 		= objectFromSvg.getElementsByClassName('pressure1')[0];
	this.levelIndicator 		= objectFromSvg.getElementsByClassName('level1')[0];
	this.levelSensor1			= objectFromSvg.getElementsByClassName('LevelSensor1')[0];
	this.levelSensor2			= objectFromSvg.getElementsByClassName('LevelSensor2')[0];
	this.levelSensor3			= objectFromSvg.getElementsByClassName('LevelSensor3')[0];
	this.iconAlarm 				= objectFromSvg.querySelector('.attention');
	this.valve 					= new getNewObjectInsideGate(objectFromSvg.getElementsByClassName('gate')[0]);
	this.motoValve 				= new getNewObjectInsideMotoGate(objectFromSvg.getElementsByClassName('motoGate')[0]);

	
	
	//this.window_sensors 	= document.getElementById('coller_sensors');

	this.intervalLockation;	//хранилище циклической функции

	this.s 		= 0;	 	//статус
    this.i 		= 0;	 	//инфо     

    this.sensors={"i_l171": 0,		//Датчик уровня аварийный
        		  "i_l172": 0,		//Датчик уровня аварийный
        		  "i_l175": 0,		//Датчик уровня аварийный
        		  "i_pre": "0.00",	//давление
        		  "i_lel": "0.00"	//уровень
    			};    										

	this.setStatusMain=function(){		
		console.log('set setStatusMain');
		switch (this.s) {
			case 0:
				  receiver.removeAttribute("style");
				break;
			case 1:
				  receiver.style.cssText='fill:#00ff00;'
				break;
			case 2:
				  receiver.style.cssText='fill:#00ff00;'
				break;
			case 3:
				  receiver.style.cssText='fill:#ff0000;'
				break;	
			default:
				// statements_def
				break;
		}

	}
	this.setStatusIndicator=function(){		
		console.log('set setStatusIndicator');
		this.pressureIndicators.innerHTML 	= this.sensors.i_pre;
		this.levelIndicator.innerHTML 		= this.sensors.i_lel;		
		//this.set_sensores();
	}
	/*this.setStatusAirch=function(){		
		console.log('set setStatusAirch');
		this.set_sensores();
		switch (this.airch.s) {
			case 0:
				[...this.coolerHiterManual].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				[...this.coolerHiterAuto].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				break;
			case 1:
				[...this.coolerHiterManual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				[...this.coolerHiterAuto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 2:
				[...this.coolerHiterManual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.coolerHiterAuto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 3:
				[...this.coolerHiterManual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.coolerHiterAuto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				break;	
			default:
				// statements_def
				break;
		}
	}*/
	/*this.setStatusAircvo1=function(){		
		console.log('set setStatusAircvo1');
		this.set_sensores();
		switch (this.aircvo1.s) {
			case 0:
				[...this.coolerVent1Manual].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				[...this.coolerVent1Auto].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				break;
			case 1:
				[...this.coolerVent1Manual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				[...this.coolerVent1Auto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 2:
				[...this.coolerVent1Manual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.coolerVent1Auto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 3:
				[...this.coolerVent1Manual].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.coolerVent1Auto].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				break;	
			default:
				// statements_def
				break;
		}
	}*/
	/*this.setStatusAircvo2=function(){		
		console.log('set setStatusAircvo2');
		this.set_sensores();
	}*/

	/*this.set_sensores=function(){
		console.log('привет из cooler set_sensores');
		this.sensors.d1		=this.td.d1;		//set sensor
		this.sensors.d2		=this.td.d2;		//set sensor
		this.sensors.d3		=this.td.d3;		//set sensor
		this.sensors.h_i_po	=this.airch.i_po;	//set sensor
    	this.sensors.h_i_au	=this.airch.i_au;	//set sensor
    	this.sensors.h_i_km	=this.airch.i_km;	//set sensor
    	this.sensors.h_q_km	=this.airch.q_km;	//set sensor
    	this.sensors.q_km	=this.q_km;			//set sensor
    	this.sensors.i_au	=this.i_au;			//set sensor
    	this.sensors.i_po	=this.i_po;			//set sensor
    	this.sensors.v1_i_km=this.aircvo1.i_km;	//set sensor
    	this.sensors.v2_i_km=this.aircvo2.i_km;	//set sensor

		console.log(this.sensors);		
	}*/

	/*this.set_sensores_status=function(){
		console.log('привет из cooler set_sensores_status');
		let re=/d[0-9]/;		
		for (let i in this.sensors) {			
			if(!i.match(re)){						
				if (this.sensors[i] == 1) {
					this.window_sensors.getElementsByClassName(''+i)[0].style.cssText='background:#00FF00;box-shadow:0 0 25px #00FF00;'+
																					  '-webkit-box-shadow:0 0 25px #00FF00';                    
	            }else{                   	
	                this.window_sensors.getElementsByClassName(''+i)[0].style.cssText='background:#e9e9e9;box-shadow:0 0 25px #e9e9e9;'+
	                																  '-webkit-box-shadow:0 0 25px #e9e9e9';
	            }
	        }else{this.window_sensors.getElementsByClassName(''+i)[0].innerHTML=this.sensors[i]}
		}		
	}*/

	this.setEror=function(){		
		let maskNorm=2;
		let maskRemont=4;
		if((this.e & maskNorm)>0){			
			iconAlarm.style.cssText='display:none;'			
		}else{			
			iconAlarm.removeAttribute("style");			
		}
		/*if((this.e & maskRemont)>0){			
			[...this.iconRemont].forEach(function(item, i, arr) {				  
				item.removeAttribute("style");
			});
		}else{			
			[...this.iconRemont].forEach(function(item, i, arr) {				  
				item.style.cssText='display:none;'
			});
		}*/
	}
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectOfPumpGroup.prototype.myStatus = function(state){	
	console.log('привет из PumpGroup');
	console.log(state);

	if(this.s!=state.s){
		this.s=state.s;
		this.setStatusMain();
	}
	if(this.i!=state.i){
		this.i=state.i;
		this.setEror();
	}
	if(this.sensors.i_pre !== state.i_pre || this.sensors.i_lel !== state.i_lel){ 
		this.sensors.i_pre = state.i_pre;
		this.sensors.i_lel = state.i_lel;
        this.setStatusIndicator();
    }
		this.sensors.i_l171 = state.i_l171;
		this.sensors.i_l172 = state.i_l172;
		this.sensors.i_l175 = state.i_l175;	
};
getNewObjectOfReceiver.prototype.open_sensors = sensors_open;
getNewObjectOfReceiver.prototype.close_sensors = sensors_close;
