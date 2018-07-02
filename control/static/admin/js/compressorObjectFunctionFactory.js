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

	this.window_tex_settings 	= document.getElementsByClassName('compressor_tex_settings')[0].cloneNode(true);
	this.window_settings 		= document.getElementsByClassName('all_settings')[0].cloneNode(true);
	prepareForm(this.window_settings);
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
	
};
getNewObjectOfCompressor.prototype.open_sensors = sensors_open;
getNewObjectOfCompressor.prototype.close_sensors = sensors_close;

getNewObjectOfCompressor.prototype.open_settings = settings_open;
getNewObjectOfCompressor.prototype.close_settings = settings_close;
getNewObjectOfCompressor.prototype.save_settings = settings_save;
getNewObjectOfCompressor.prototype.get_settings =settings_get;

getNewObjectOfCompressor.prototype.open_tex_settings = tex_settings_open;
getNewObjectOfCompressor.prototype.close_tex_settings = tex_settings_close;
getNewObjectOfCompressor.prototype.save_tex_settings = tex_settings_save;
getNewObjectOfCompressor.prototype.get_tex_settings =tex_settings_get;


//-----------------------------------------------------------------------------------------------------------------------------------
//Конструктор объектов ресивер
function getNewObjectOfReceiver(objectFromSvg,name){

	this.name 					= name;	
	this.status 				= objectFromSvg.querySelector('.status');
	this.pressureIndicator 		= objectFromSvg.getElementsByClassName('pressure1')[0];
	this.levelIndicator 		= objectFromSvg.getElementsByClassName('level1')[0];
	this.levelSensor1			= objectFromSvg.getElementsByClassName('LevelSensor1')[0];
	this.levelSensor2			= objectFromSvg.getElementsByClassName('LevelSensor2')[0];
	this.levelSensor3			= objectFromSvg.getElementsByClassName('LevelSensor3')[0];
	this.iconAlarm 				= objectFromSvg.querySelector('.attention');
	this.valve 					= new getNewObjectInsideGate(objectFromSvg.getElementsByClassName('gate')[0]);
	this.motoValve 				= new getNewObjectInsideMotoGate(objectFromSvg.getElementsByClassName('motoGate')[0]);
	

	this.window_settings 	= document.getElementsByClassName('receiver_settings')[0].cloneNode(true);
	this.window_tex_settings 	= document.getElementsByClassName('receiver_tex_settings')[0].cloneNode(true);
	this.window_analog_settings = document.getElementsByClassName('settings_analog_dat')[0].cloneNode(true);
	prepareForm(this.window_analog_settings);
	prepareForm(this.window_settings);

	this.window_sensors = document.getElementsByClassName('receiver_sensors')[0].cloneNode(true);

	this.intervalLockation;

	this.s 		= 0;	 	//статус
    this.i 		= 0;	 	//инфо     

    this.sensors={"i_l171": 0,		//Датчик уровня аварийный
        		  "i_l172": 0,		//Датчик уровня аварийный
        		  "i_l15": 0,		//Датчик уровня аварийный
        		  "i_pre": "0.00",	//давление
        		  "i_lel": "0.00"	//уровень
    			};    										

	this.setStatus=function(){		
		console.log('set status Motogate');

		switch (this.s) {
			case 0:				
				
				  this.status.removeAttribute("style");
				
				break;
			case 1:				
				
				  this.status.style.cssText='fill:#00ff00;'
				
				break;
			case 2:				
				
				  this.status.style.cssText='fill:#ff0000;'
				
				break;
			/*case 3:				
				
				  this.status.style.cssText='fill:#ff0000;'
				
				break;	*/
			default:
				// statements_def
				break;
		}
	}

	this.setStatusIndicator=function(){		
		console.log('set setStatusIndicator');
		this.pressureIndicator.innerHTML 	= this.sensors.i_pre;
		this.levelIndicator.innerHTML 		= this.sensors.i_lel;		
		//this.set_sensores();
	}

	this.setLevelIndicator1=function(){		
		
		switch (this.sensors.i_l171) {
			case 0:
				  this.levelSensor1.removeAttribute("style");
				break;
			case 1:
				  this.levelSensor1.style.cssText='fill:#ff0000;';
				break;			
			default:
				// statements_def
				break;
		}
	}
	this.setLevelIndicator2=function(){		
		
		switch (this.sensors.i_l172) {
			case 0:
				  this.levelSensor2.removeAttribute("style");
				break;
			case 1:
				  this.levelSensor2.style.cssText='fill:#ff0000;';
				break;			
			default:
				// statements_def
				break;
		}
	}

	this.setLevelIndicator3=function(){		
		
		switch (this.sensors.i_l15) {
			case 0:
				  this.levelSensor3.removeAttribute("style");
				break;
			case 1:
				  this.levelSensor3.style.cssText='fill:#ffff00;';
				break;			
			default:
				// statements_def
				break;
		}
	}
	
	this.set_sensores_status=function(){
		console.log('привет из cooler set_sensores_status');
		let valveSensors = this.valve.getSensors();
		let motoValveSensors = this.motoValve.getSensors();
		let re1=/i_pre/;
		let re2=/i_lel/;
		let re3=/i_pos/;
		let re4=/i_spos/;
		
		for (let i in this.sensors) {			
			if(!i.match(re1) && !i.match(re2)){						
				if (this.sensors[i] == 1) {
					this.window_sensors.getElementsByClassName(''+i)[0].style.cssText='background:#00FF00;box-shadow:0 0 25px #00FF00;'+
																					  '-webkit-box-shadow:0 0 25px #00FF00';                    
	            }else{                   	
	                this.window_sensors.getElementsByClassName(''+i)[0].removeAttribute("style");
	            }
	        }else{this.window_sensors.getElementsByClassName(''+i)[0].innerHTML=this.sensors[i];}
		}

		for (let i in valveSensors) {			
								
			if (valveSensors[i] == 1) {
				this.window_sensors.getElementsByClassName('g-'+i)[0].style.cssText='background:#00FF00;box-shadow:0 0 25px #00FF00;'+
																					  '-webkit-box-shadow:0 0 25px #00FF00';                    
	        }else{                   	
	            this.window_sensors.getElementsByClassName('g-'+i)[0].removeAttribute("style");
	        }	        
		}
		for (let i in motoValveSensors) {			
			if(!i.match(re3) && !i.match(re4)){						
				if (motoValveSensors[i] == 1) {
					this.window_sensors.getElementsByClassName('mg-'+i)[0].style.cssText='background:#00FF00;box-shadow:0 0 25px #00FF00;'+
																					  '-webkit-box-shadow:0 0 25px #00FF00';                    
	            }else{                   	
	                this.window_sensors.getElementsByClassName('mg-'+i)[0].removeAttribute("style");
	            }
	        }else{this.window_sensors.getElementsByClassName('mg-'+i)[0].innerHTML=motoValveSensors[i]}
		}		
	}

	this.setEror=function(){		
		let maskNorm=2;
		let maskRemont=4;
		if((this.i & maskNorm)>0){			
			this.iconAlarm.style.cssText='display:none;'			
		}else{			
			this.iconAlarm.removeAttribute("style");			
		}
		
	}
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectOfReceiver.prototype.myStatus = function(state){	
	console.log('привет из Resiver');
	console.log(state);

	if(this.s!==state.s){
		this.s=state.s;
		this.setStatus();
	}
	if(this.i!==state.i){
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
		this.sensors.i_l15 = state.i_l15;

		this.valve.myStatus(state.val); 			
		this.motoValve.myStatus(state.valr);
		this.setLevelIndicator1();
		this.setLevelIndicator2();
		this.setLevelIndicator3();	
};
getNewObjectOfReceiver.prototype.open_sensors = sensors_open;
getNewObjectOfReceiver.prototype.close_sensors = sensors_close;

getNewObjectOfReceiver.prototype.open_settings = settings_open;
getNewObjectOfReceiver.prototype.close_settings = settings_close;
getNewObjectOfReceiver.prototype.save_settings = settings_save;
getNewObjectOfReceiver.prototype.get_settings =settings_get;

getNewObjectOfReceiver.prototype.open_tex_settings = tex_settings_open;
getNewObjectOfReceiver.prototype.close_tex_settings = tex_settings_close;
getNewObjectOfReceiver.prototype.save_tex_settings = tex_settings_save;
getNewObjectOfReceiver.prototype.get_tex_settings =tex_settings_get;

//-------------------------------------------------------------------------------------------------------------------------
//Конструктор объектов внутренних - клапан
function getNewObjectInsideGate(objectFromSvg){	
	
	this.gate		= objectFromSvg.getElementsByClassName('status');
	this.iconAlarm 	= objectFromSvg.getElementsByClassName('attention');	
	
	this.s 		= 0;		//статус       
    this.i 		= 0;		//ошибка
    this.sensors={'i_po':0,	//питание
    			  'i_au':0, //режим   			  
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
				  item.style.cssText='fill:#ff0000;'
				});
				break;
			case 3:				
				[...this.gate].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ffff00;'
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
	
	this.status		= objectFromSvg.getElementsByClassName('status');
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
				[...this.status].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				break;
			case 1:				
				[...this.status].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 2:				
				[...this.status].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				break;
			case 3:				
				[...this.status].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ffff00;'
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
		this.position.innerHTML = this.sensors.i_pos;
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
//Конструктор объектов груповой насос
function getNewObjectOfPumpGroup(objectFromSvg,name){

	this.name 					= name;	
	
	this.temperatureIndicators	= { 'd1':objectFromSvg.getElementsByClassName('temperature1')[0],
									'd2':objectFromSvg.getElementsByClassName('temperature2')[0],
									'd3':objectFromSvg.getElementsByClassName('temperature3')[0],
									'd4':objectFromSvg.getElementsByClassName('temperature4')[0],
									'd5':objectFromSvg.getElementsByClassName('temperature5')[0],
									'd6':objectFromSvg.getElementsByClassName('temperature6')[0],
									'd7':objectFromSvg.getElementsByClassName('temperature7')[0],
									'd8':objectFromSvg.getElementsByClassName('temperature8')[0]
									};																				
	
	this.pump1 					= new getNewObjectInsidePump(objectFromSvg.getElementsByClassName('pump1')[0]);
	this.pump2 					= new getNewObjectInsidePump(objectFromSvg.getElementsByClassName('pump2')[0]);

	this.window_settings 		= document.getElementsByClassName('pumpGroup_settings')[0].cloneNode(true);
	this.window_tex_settings 	= document.getElementsByClassName('pumpGroup_tex_settings')[0].cloneNode(true);
	this.window_analog_settings = document.getElementsByClassName('settings_analog_dat')[0].cloneNode(true);
	prepareForm(this.window_analog_settings);
	prepareForm(this.window_settings);

	this.window_sensors 		= document.getElementsByClassName('pumpGroup1_sensors')[0].cloneNode(true);

	this.intervalLockation;


    this.sensors={"d1": "0.00",		//Индикатор температуры
          		  "d2": "0.00",		//Индикатор температуры
          		  "d3": "0.00",		//Индикатор температуры
          		  "d4": "0.00",		//Индикатор температуры
          		  "d5": "0.00",		//Индикатор температуры
          		  "d6": "0.00",		//Индикатор температуры
          		  "d7": "0.00",		//Индикатор температуры
          		  "d8": "0.00" 		//Индикатор температуры
    			};    										

	
	this.setStatusIndicator=function(name){		
		console.log('set setStatusIndicator');
		if(this.temperatureIndicators[name]){
			this.temperatureIndicators[name].innerHTML 	= this.sensors[name];
		}	
	}

	this.set_sensores_status=function(){
		console.log('привет из PumpGroup set_sensores_status');
		let pump1Sensors = this.pump1.getSensors();
		let pump2Sensors = this.pump2.getSensors();
		let re1=/i_tew/;
		let re2=/i_pred/;
		

		for (let i in this.sensors) {
	        this.window_sensors.getElementsByClassName(''+i)[0].innerHTML=this.sensors[i];
		}		
		for (let i in pump1Sensors) {			
			if(i!=='s' && i!=='i'){
				if(!i.match(re1) && !i.match(re2)){						
					if (pump1Sensors[i] == 1) {
						this.window_sensors.getElementsByClassName('p1-'+i)[0].style.cssText='background:#00FF00;box-shadow:0 0 25px #00FF00;'+
																						  '-webkit-box-shadow:0 0 25px #00FF00';                    
		            }else{                   	
		                this.window_sensors.getElementsByClassName('p1-'+i)[0].removeAttribute("style");
		            }
		        }else{this.window_sensors.getElementsByClassName('p1-'+i)[0].innerHTML=pump1Sensors[i]}
			}
		}
		for (let i in pump2Sensors) {
			if(i!=='s' && i!=='i'){
				if(!i.match(re1) && !i.match(re2)){						
					if (pump1Sensors[i] == 1) {
						this.window_sensors.getElementsByClassName('p2-'+i)[0].style.cssText='background:#00FF00;box-shadow:0 0 25px #00FF00;'+
																						  '-webkit-box-shadow:0 0 25px #00FF00';                    
		            }else{                   	
		                this.window_sensors.getElementsByClassName('p2-'+i)[0].removeAttribute("style");
		            }
		        }else{this.window_sensors.getElementsByClassName('p2-'+i)[0].innerHTML=pump2Sensors[i]}
			}
		}		
	}
	
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectOfPumpGroup.prototype.myStatus = function(state){	
	console.log('привет из PumpGroup');
	console.log(state);
	this.pump1.myStatus(state.pu1);
	this.pump2.myStatus(state.pu2);
	for(let i in state.td){
		if (this.sensors[i] !== state.td[i]){
			this.sensors[i] = state.td[i]
			this.setStatusIndicator(i);
		}
	}	
};
getNewObjectOfPumpGroup.prototype.open_sensors = sensors_open;
getNewObjectOfPumpGroup.prototype.close_sensors = sensors_close;

getNewObjectOfPumpGroup.prototype.open_settings = settings_open;
getNewObjectOfPumpGroup.prototype.close_settings = settings_close;
getNewObjectOfPumpGroup.prototype.save_settings = settings_save;
getNewObjectOfPumpGroup.prototype.get_settings =settings_get;

getNewObjectOfPumpGroup.prototype.open_tex_settings = tex_settings_open;
getNewObjectOfPumpGroup.prototype.close_tex_settings = tex_settings_close;
getNewObjectOfPumpGroup.prototype.save_tex_settings = tex_settings_save;
getNewObjectOfPumpGroup.prototype.get_tex_settings =tex_settings_get;
//--------------------------------------------------------------------------------------------------------------------------------------
//Конструктор объектов внутренних - motoклапан
function getNewObjectInsidePump(objectFromSvg){	
	
	this.status		= objectFromSvg.getElementsByClassName('status');
	this.iconAlarm 	= objectFromSvg.getElementsByClassName('attention')[0];	
	this.pressure 	= objectFromSvg.getElementsByClassName('pressure1')[0];
	
    this.sensors={"s": 0,
          		  "i": 0,
          		  "i_po": 0,
          		  "i_au": 0,
          		  "i_km": 0,
          		  "q_km": 0,
          		  "i_tew": "0.00",
          		  "i_pred": "0.00"
    			};	

	this.setStatus=function(){		
		console.log('set status Motogate');

		switch (this.sensors.s) {
			case 0:				
				[...this.status].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				break;
			case 1:				
				[...this.status].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 2:				
				[...this.status].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				break;
			case 3:				
				[...this.status].forEach(function(item, i, arr) {
				  item.style.cssText='fill:magenta;'
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
		if((this.sensors.i & maskNorm)>0){
			this.iconAlarm.style.cssText='display:none;';			
		}else{
			this.iconAlarm.removeAttribute("style");
		}
	}
	this.getSensors=function(){		
		return this.sensors;
	}

	this.setStatusIndicator=function(){		
		console.log('set setStatusIndicator');		
		this.pressure.innerHTML = this.sensors.i_pred;		
	}
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectInsidePump.prototype.myStatus = function(state){	
	console.log('привет из InsidePump');
	for(let i in state){
		if(i=='s'){
			if (this.sensors[i] !== state[i]){
				this.sensors[i] = state[i];
				this.setStatus();
				continue;
			}	
		}
		if(i=='i'){
			if (this.sensors[i] !== state[i]){
				this.sensors[i] = state[i];
				this.setEror();
				continue;
			}	
		}
		if(i=='i_pred'){
			if (this.sensors[i] !== state[i]){
				this.sensors[i] = state[i];
				this.setStatusIndicator();
				continue;
			}	
		}
		if (this.sensors[i] !== state[i]){			
			this.sensors[i] = state[i]			
		}
	}
};
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//Конструктор объектов простой ресивер
function getNewObjectOfJar(objectFromSvg,name){

	this.name 					= name;

	this.levelSensor 	 		= { 'i_lmax':objectFromSvg.getElementsByClassName('LevelSensor1')[0],
									'i_lmin':objectFromSvg.getElementsByClassName('LevelSensor2')[0],
									
									};
	this.window_settings 		= document.getElementsByClassName('jar_settings')[0].cloneNode(true);
	prepareForm(this.window_settings);
	//this.window_sensors 	= document.getElementById('coller_sensors');

	this.intervalLockation;	//хранилище циклической функции

    this.sensors={"i_lmin": 0,
          		  "i_lmax": 0
    			};    										

	

	this.setStatusIndicator1=function(){		
		console.log('set setStatusIndicator');
		switch (this.sensors.i_lmax) {
			case 0:
				  this.levelSensor.i_lmax.removeAttribute("style");
				break;
			case 1:
				  this.levelSensor.i_lmax.style.cssText='fill:#ff0000;';
				break;			
			default:
				// statements_def
				break;
		}
	}
	this.setStatusIndicator2=function(){		
		console.log('set setStatusIndicator');
		switch (this.sensors.i_lmin) {
			case 0:
				  this.levelSensor.i_lmin.removeAttribute("style");
				break;
			case 1:
				  this.levelSensor.i_lmin.style.cssText='fill:#00ff00;'
				break;
			
			default:
				// statements_def
				break;
		}
	}
	
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

	
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectOfJar.prototype.myStatus = function(state){	
	console.log('привет из Resiver');
	console.log(state);

	if(this.sensors.i_lmin !== state.i_lmin){ 
		this.sensors.i_lmin = state.i_lmin;		
        this.setStatusIndicator2();
    }
    if(this.sensors.i_lmax !== state.i_lmax){ 
		this.sensors.i_lmax = state.i_lmax;		
        this.setStatusIndicator1();
    }
		
};

getNewObjectOfJar.prototype.open_settings = settings_open;
getNewObjectOfJar.prototype.close_settings = settings_close;
getNewObjectOfJar.prototype.save_settings = settings_save;
getNewObjectOfJar.prototype.get_settings =settings_get;


//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//Конструктор объектов простой ресивер
function getNewObjectOfRefrejerator(objectFromSvg,name){

	this.name 					= name;
	this.status		= objectFromSvg.getElementsByClassName('status');

	
	this.window_settings 		= document.getElementsByClassName('refrejirator_settings')[0].cloneNode(true);
	prepareForm(this.window_settings);
	//this.window_sensors 	= document.getElementById('coller_sensors');

	this.intervalLockation;	//хранилище циклической функции

      

    this.sensors={	"s": 0,
          			"i": 0,
          			"i_ru": 0,
          			"i_e": 0,
          			"q_km": 0
    			};    										

	this.setStatus=function(){		
		console.log('set status Motogate');

		switch (this.s) {
			case 0:				
				
				  this.status.removeAttribute("style");
				
				break;
			case 1:				
				
				  this.status.style.cssText='fill:#00ff00;'
				
				break;
			case 2:				
				
				  this.status.style.cssText='fill:#00ff00;'
				
				break;
			case 3:				
				
				  this.status.style.cssText='fill:#ff0000;'
				
				break;	
			default:
				// statements_def
				break;
		}
	}								

	

	
	

	
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectOfJar.prototype.myStatus = function(state){	
	for(let i in state){
		if(i=='s'){
			if (this.sensors[i] !== state[i]){
				this.sensors[i] = state[i];
				this.setStatus();
				continue;
			}	
		}
		
		if (this.sensors[i] !== state[i]){			
			this.sensors[i] = state[i]			
		}
	}
		
};

getNewObjectOfRefrejerator.prototype.open_settings = settings_open;
getNewObjectOfRefrejerator.prototype.close_settings = settings_close;
getNewObjectOfRefrejerator.prototype.save_settings = settings_save;
getNewObjectOfRefrejerator.prototype.get_settings =settings_get;




//--------------------------------------------------------------------------------------------------------------------
//Конструктор объектов управление компрессором
function getNewObjectOfCManager(objectFromSvg,name){

	this.name 					= name;
	this.statusText 			= objectFromSvg.getElementsByClassName('text');
	this.status 	 			= objectFromSvg.getElementsByClassName('status');

	let SVG = document.getElementById("start_compressor_button").getSVGDocument();

	this.startButton = SVG.getElementsByClassName('startCompressor');
	this.stopButton = SVG.getElementsByClassName('stopCompressor');


	
	this.startButton[0].addEventListener('click',function(){start_stop_mex(this.name,1);}.bind(this),false);
	this.stopButton[0].addEventListener('click',function(){start_stop_mex(this.name,2);}.bind(this),false);

	this.window_settings 		= document.getElementsByClassName('all_settings')[0].cloneNode(true);
	prepareForm(this.window_settings);
	
	this.window_tex_settings 	= document.getElementsByClassName('CManager_tex_settings')[0].cloneNode(true);
	//this.window_sensors 	= document.getElementById('coller_sensors');

	this.intervalLockation;	//хранилище циклической функции
	this.sensors={"s": 0,
          		  "i": 0,          		  
    			};	

	this.setStatus=function(){		
		console.log('set status CManager');

		switch (this.sensors.s) {
			case 0:				
				[...this.status].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				[...this.statusText].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				  item.innerHTML = 'Остановлена';
				});
				[...this.startButton].forEach(function(item, i, arr) {
				  item.removeAttribute("style");			  
				});
				[...this.stopButton].forEach(function(item, i, arr) {
				  item.removeAttribute("style");			  
				});
				break;
			case 1:				
				[...this.status].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ffff00;'
				});
				[...this.statusText].forEach(function(item, i, arr) {
				  item.style.cssText='fill:black;';
				  item.innerHTML = 'Запускается...';
				});
				[...this.startButton].forEach(function(item, i, arr) {
				  item.style.cssText='display:none;';				  
				});
				[...this.stopButton].forEach(function(item, i, arr) {
				  item.style.cssText='display:block;';				  
				});
				break;
			case 2:				
				[...this.status].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.statusText].forEach(function(item, i, arr) {
				  item.style.cssText='fill:black;';
				  item.innerHTML = 'Авария';
				});
				[...this.startButton].forEach(function(item, i, arr) {
				  item.style.cssText='display:block;';				  
				});
				[...this.stopButton].forEach(function(item, i, arr) {
				  item.style.cssText='display:none;';				  
				});
				break;
			case 3:				
				[...this.status].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				[...this.statusText].forEach(function(item, i, arr) {
				  item.style.cssText='fill:black;';
				  item.innerHTML = 'В работе';
				});
				[...this.startButton].forEach(function(item, i, arr) {
				  item.style.cssText='display:none;';				  
				});
				[...this.stopButton].forEach(function(item, i, arr) {
				  item.style.cssText='display:block;';				  
				});
				break;				
			default:
				break;
		}
	}	
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectOfCManager.prototype.myStatus = function(state){	
	console.log('привет из CManager');
	for(let i in state){
		if(i=='s'){
			if (this.sensors[i] !== state[i]){
				this.sensors[i] = state[i];
				this.setStatus();
				continue;
			}	
		}
		if(i=='i'){
			if (this.sensors[i] !== state[i]){
				this.sensors[i] = state[i];
				//this.setEror();
				continue;
			}	
		}		
	}
};

getNewObjectOfCManager.prototype.open_settings = settings_open;
getNewObjectOfCManager.prototype.close_settings = settings_close;
getNewObjectOfCManager.prototype.save_settings = settings_save;
getNewObjectOfCManager.prototype.get_settings =settings_get;

getNewObjectOfCManager.prototype.open_tex_settings = tex_settings_open;
getNewObjectOfCManager.prototype.close_tex_settings = tex_settings_close;
getNewObjectOfCManager.prototype.save_tex_settings = tex_settings_save;
getNewObjectOfCManager.prototype.get_tex_settings =tex_settings_get;