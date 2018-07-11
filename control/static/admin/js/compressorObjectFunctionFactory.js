"use strict"
//------------------------------------------------------------------------------------------------------------
//Конструктор объектов охладитель
function getNewObjectOfCompressor(objectFromSvg,name){
	this.name 					= name;	
	this.compressor				= objectFromSvg.getElementsByClassName('status');									//статус
	this.IconSensors 			= { 'p_suc':objectFromSvg.getElementsByClassName('pressure1')[0],
									'p_dis':objectFromSvg.getElementsByClassName('pressure2')[0],
									'p_o':objectFromSvg.getElementsByClassName('pressure3')[0],
									'p_cra':objectFromSvg.getElementsByClassName('pressure4')[0],
									'p_int':objectFromSvg.getElementsByClassName('pressure5')[0],
									'p_int':objectFromSvg.getElementsByClassName('pressure6')[0],
									'p_int':objectFromSvg.getElementsByClassName('pressure7')[0],
									
									't_ig':objectFromSvg.getElementsByClassName('temperature1')[0],
									't_fin':objectFromSvg.getElementsByClassName('temperature2')[0],
									't_o':objectFromSvg.getElementsByClassName('temperature3')[0],
									't_ind':objectFromSvg.getElementsByClassName('temperature4')[0],
									
									};																				//статус
	
	this.diferentialPressure	= objectFromSvg.getElementsByClassName('dPressure1')[0];

	this.window_tex_settings 	= document.getElementsByClassName('compressor_tex_settings')[0].cloneNode(true);
	this.window_settings 		= document.getElementsByClassName('all_settings')[0].cloneNode(true);
	prepareForm(this.window_settings);
	this.window_sensors 	= document.getElementsByClassName('compressor_sensors')[0].cloneNode(true);
	this.intervalLockation;	  

    

    this.sensors={'s':255, 			//Status 					Статус
				  'i':255, 			//Info 						Информационный тег
				  'p_suc':"00.0",	//P_Suction 				Давление всасывания
				  'p_dis':"00.0",	//P_Discharge 				Давление нагнетания
				  'p_o':"00.0",	 	//P_Oil 					Давление масла
				  'p_cra':"00.0",	//P_Crankcase 				Давление в картере
				  'p_int':"00.0",	//P_Intermediate 			Давл. промежуточное
				  't_ig':"00.0",	//T_Intake_Gas 				Температура всасываемого газа
				  't_fin':"00.0",	//T_Final_Compression 		Конечная температура сжатия
				  't_o':"00.0",	 	//T_Oil 					Температура масла
				  't_ind':"00.0",	//T_Intermediate_ND Темп. 	промежуточная НД
				  't_ivd':"00.0",	//T_Intermediate_VD Темп. 	промежуточная ВД
				  'ts_ps':"00.0",	//T_Saturation_P_Suction  	Температура насыщения при давлении всасывания (To)
				  'ts_pie':"00.0",	//T_Saturation_P_Intermediate 	Температура насыщения при давлении промежуточном (Tz)
				  'ts_pin':"00.0",	//T_Saturation_P_Injection  Температура насыщения при давлении нагнетания (Tk)
				  'pr_nd':"00.0",	//PR_ND 					Произв-ть (НД)
				  'pr_vd':"00.0",	//PR_VD 					Произв-ть (ВД)
				  'cm':"00.0",	 	//Carrent_Motor 			Ток двигателя
				  't_ri':"00.0",	//T_Refrigerant_Input 		Температура хладагента на входе
				  't_ro':"00.0",	//T_Refrigerant_Output 		Температура холодильного агента на выходе
				  't_co':"00.0",	//T_Coolant_Output 			Температура теплоносителя на выходе
				  't_o_r':"00.0",	//T_Oil_Return 				Температура возврата масла
    			};    										

	this.setStatusMain=function(){		
		console.log('set setStatusMain');
		switch (this.sensors.s) {
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

	this.setStatusIndicator=function(name){
		if(this.IconSensors[name]){
			this.IconSensors[name].innerHTML 	= this.sensors[name];
		}	
	}

	this.set_sensores_status=function(){
		for (let i in this.sensors) {
			let element=this.window_sensors.getElementsByClassName(''+i)[0];
			if(element){
	        	this.window_sensors.getElementsByClassName(''+i)[0].innerHTML=this.sensors[i];
	    	}
		}
	}
	
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectOfCompressor.prototype.myStatus = function(state){	
	console.log('привет из Compressor');
	console.log(state);

	if(this.sensors.s!=state.s){
		this.sensors.s=state.s;
		this.setStatusMain();
	}
	
	for(let i in state){
		if (this.sensors[i] !== state[i]){
			this.sensors[i] = state[i]
			this.setStatusIndicator(i);
		}
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
	this.pressureIndicatorStatus= objectFromSvg.getElementsByClassName('pressure1status')[0];
	this.levelIndicator 		= objectFromSvg.getElementsByClassName('level1')[0];
	this.levelIndicatorStatus	= objectFromSvg.getElementsByClassName('level1status')[0];
	this.levelSensor1			= objectFromSvg.getElementsByClassName('LevelSensor1')[0];
	this.levelSensor2			= objectFromSvg.getElementsByClassName('LevelSensor2')[0];
	this.levelSensor3			= objectFromSvg.getElementsByClassName('LevelSensor3')[0];
	this.iconAlarm 				= objectFromSvg.querySelector('.attention');
	this.valve 					= new getNewObjectInsideGate(objectFromSvg.getElementsByClassName('gate')[0]);
	this.motoValve 				= new getNewObjectInsideMotoGate(objectFromSvg.getElementsByClassName('motoGate')[0]);
	this.levelBar				= objectFromSvg.getElementsByClassName('levelBar')[0];

	

	this.window_settings 	= document.getElementsByClassName('receiver_settings')[0].cloneNode(true);
	this.window_tex_settings 	= document.getElementsByClassName('receiver_tex_settings')[0].cloneNode(true);
	this.window_analog_settings = document.getElementsByClassName('settings_analog_dat')[0].cloneNode(true);
	prepareForm(this.window_analog_settings);
	prepareForm(this.window_settings);

	this.levelBarInitialValue = parseInt(this.levelBar.getAttribute('height'));
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
				/*[...this.status].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});*/
				this.status.removeAttribute("style");
				
				break;
			case 1:	
				/*[...this.status].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});	*/		
				
				this.status.style.cssText='fill:#00ff00;'
				
				break;
			case 2:				
				/*[...this.status].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});	*/
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
		let re1=/(---|-V-)|(-M-)/;
			
		if(parseInt(this.sensors.i_lel)<=100 && parseInt(this.sensors.i_lel)>=0 && !this.sensors.i_lel.toString(10).match(re1)){
			let value=this.levelBarInitialValue-(this.levelBarInitialValue*parseInt(this.sensors.i_lel)/100);
			this.levelBar.setAttribute('height', value);
			this.levelBar.removeAttribute("style");
			this.levelIndicatorStatus.removeAttribute("style");
		}
		else{
			let value=this.levelBarInitialValue;
			this.levelBar.setAttribute('height', value);
			this.levelBar.style.cssText='fill:#ff0000;';
			this.levelIndicatorStatus.style.cssText='fill:#ff0000;';
		}

		if(!this.sensors.i_pre.match(re1)){			
			this.pressureIndicatorStatus.removeAttribute("style");
		}
		else{			
			this.pressureIndicatorStatus.style.cssText='fill:#ff0000;';
		}

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
	
	this.status			= objectFromSvg.getElementsByClassName('status');
	this.iconAlarm 		= objectFromSvg.getElementsByClassName('attention');	
	this.position 		= objectFromSvg.getElementsByClassName('position1')[0];
	this.positionStatus	= objectFromSvg.getElementsByClassName('position1status')[0];
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
		let re1=/(---|-V-)|(-M-)/;
		if(!this.sensors.i_pos.toString(10).match(re1)){							
			this.positionStatus.removeAttribute("style");
		}else{
			this.positionStatus.style.cssText='fill:#ff0000;';			
		}	

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
									'd8':objectFromSvg.getElementsByClassName('temperature8')[0],
									'd9':objectFromSvg.getElementsByClassName('temperature9')[0],
									'd10':objectFromSvg.getElementsByClassName('temperature10')[0]
									};
	this.temperatureIndicatorsStatus={
									'status1':objectFromSvg.getElementsByClassName('temperature1status')[0],
									'status2':objectFromSvg.getElementsByClassName('temperature2status')[0],
									'status3':objectFromSvg.getElementsByClassName('temperature3status')[0],
									'status4':objectFromSvg.getElementsByClassName('temperature4status')[0],
									'status5':objectFromSvg.getElementsByClassName('temperature5status')[0],
									'status6':objectFromSvg.getElementsByClassName('temperature6status')[0],
									'status7':objectFromSvg.getElementsByClassName('temperature7status')[0],
									'status8':objectFromSvg.getElementsByClassName('temperature8status')[0],
									'status9':objectFromSvg.getElementsByClassName('temperature9status')[0],
									'status10':objectFromSvg.getElementsByClassName('temperature10status')[0]
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
          		  "d8": "0.00", 		//Индикатор температуры
          		  "d9": "0.00", 		//Индикатор температуры
          		  "d10": "0.00", 		//Индикатор температуры
    			};    										

	
	this.setStatusIndicator=function(name){		
		console.log('set setStatusIndicator');
		if(this.temperatureIndicators[name]){
			let re1=/(---|-V-)|(-M-)/;
			if(!this.sensors[name].match(re1)){
				this.temperatureIndicators[name].innerHTML 	= this.sensors[name];
				console.log('статусы индикатора');
				console.log(name.match(/d([0-9]+)/));
				console.log(parseInt(name.match(/d([0-9]+)/)[1]));
				this.temperatureIndicatorsStatus['status'+parseInt(name.match(/d([0-9]+)/)[1])].removeAttribute("style");
			}else{
				this.temperatureIndicatorsStatus['status'+parseInt(name.match(/d([0-9]+)/)[1])].style.cssText='fill:#ff0000;';
				this.temperatureIndicators[name].innerHTML 	= this.sensors[name];
			}
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
					if (pump2Sensors[i] == 1) {
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
	
	this.status			= objectFromSvg.getElementsByClassName('status');
	this.iconAlarm 		= objectFromSvg.getElementsByClassName('attention')[0];	
	this.pressure 		= objectFromSvg.getElementsByClassName('pressure1')[0];
	this.pressureStatus	= objectFromSvg.getElementsByClassName('pressure1status')[0];
	
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
		let re1=/(---|-V-)|(-M-)/;
		if(!this.sensors.i_pred.match(re1)){
			this.pressure.innerHTML = this.sensors.i_pred;				
			this.pressureStatus.removeAttribute("style");
		}else{
			this.pressureStatus.style.cssText='fill:#ff0000;';
			this.pressure.innerHTML = this.sensors.i_pred;
		}	
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