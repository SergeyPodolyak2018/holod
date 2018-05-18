"use strict"
//Конструктор объектов обогреватель
function getNewObjectOfHiter(objectFromSvg,name){
	this.name 	= name;
	this.hiter 	= objectFromSvg;
	this.autoElements 	= objectFromSvg.getElementsByClassName(name);
	this.manualElements = objectFromSvg.getElementsByClassName(name+'-manual');
	this.iconAlarm = objectFromSvg.getElementsByClassName('icon');	
	this.window_sensors = document.getElementsByClassName('hiter_sensors')[0].cloneNode(true);
	this.window_settings 	= document.getElementsByClassName('heater_settings')[0].cloneNode(true);
	this.intervalLockation;
	this.s 		= 0;		//статус       
    this.e 		= 0;		//ошибка
    this.sensors={'i_po':0,	//питание   
    			  'i_au':0,	//автоматический режим
    			  'i_km':0,	//контактор
    			  'q_km':0	//обратная связь
    			};

	this.setStatus=function(){		
		console.log('set status hiter=',this.name);

		switch (this.s) {
			case 0:
				[...this.manualElements].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				[...this.autoElements].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				break;
			case 1:
				[...this.manualElements].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				[...this.autoElements].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 2:
				[...this.manualElements].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.autoElements].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 3:
				[...this.manualElements].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.autoElements].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				break;	
			default:
				// statements_def
				break;
		}

	}
	this.set_sensores_status=function(){
		for (let i in this.sensors) {						
			if (this.sensors[i] == 1) {
				this.window_sensors.getElementsByClassName(''+i)[0].style.cssText='background:#00FF00;box-shadow:0 0 25px #00FF00;-webkit-box-shadow:0 0 25px #00FF00';                    
            }else{                   	
                this.window_sensors.getElementsByClassName(''+i)[0].removeAttribute("style");
            }
		}		
	}
	this.setEror=function(){
		console.log('setEror Hiter point1');	
		let maskNorm=2;
		let maskRemont=4;
		if((this.e & maskNorm)>0){
			console.log('setEror Hiter point2');	
			[...this.iconAlarm].forEach(function(item, i, arr) {
				  item.style.cssText='display:none;'
				});
		}else{
			console.log('setEror Hiter point3');	
			[...this.iconAlarm].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
		}
		//if((this.e & maskRemont)>0){}else{}

	}
	/*
	this.setPower=function(){		
		console.log('set status');
	}
	this.setAuto=function(){		
		console.log('set status');
	}
	this.setStatus=function(){		
		console.log('set status');
	}
	this.setStatus=function(){		
		console.log('set status');
	}*/
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectOfHiter.prototype.myStatus = function(state){
	console.log('привет из Hiter');
	if(this.s!=state.s){
		this.s=state.s;
		this.setStatus();
	}
	if(this.e!=state.e){
		this.e=state.e;
		this.setEror();
	}
	if(this.sensors.i_po!=state.i_po){
		this.sensors.i_po=state.i_po;
		//this.setStatus();
	}
	if(this.sensors.i_au!=state.i_au){
		this.sensors.i_au=state.i_au;
		//this.setStatus();
	}
	if(this.sensors.i_km!=state.i_km){
		this.sensors.i_km=state.i_km;
		//this.setStatus();
	}
	if(this.sensors.q_km!=state.q_km){
		this.sensors.q_km=state.q_km;
		//this.setStatus();
	}

};
getNewObjectOfHiter.prototype.open_sensors = sensors_open;
getNewObjectOfHiter.prototype.close_sensors = sensors_close;
getNewObjectOfHiter.prototype.open_settings = settings_open;
getNewObjectOfHiter.prototype.close_settings = settings_close;
getNewObjectOfHiter.prototype.save_settings = settings_save;
getNewObjectOfHiter.prototype.get_settings =settings_get;

//------------------------------------------------------------------------------------------------------------
//Конструктор объектов охладитель
function getNewObjectOfCooler(objectFromSvg,name){
	this.name 				= name;	
	this.cooler 			= objectFromSvg.getElementsByClassName(name);				//статус
	this.coolerHiterAuto 	= objectFromSvg.getElementsByClassName(name+'-H1');			//статус
	this.coolerHiterManual 	= objectFromSvg.getElementsByClassName(name+'-H1-manual');	//статус
	this.coolerVent1Auto 	= objectFromSvg.getElementsByClassName(name+'-V1');			//статус
	this.coolerVent2Auto 	= objectFromSvg.getElementsByClassName(name+'-V2');			//статус
	this.coolerVent1Manual 	= objectFromSvg.getElementsByClassName(name+'-V1-manual');	//статус
	this.coolerVent2Manual 	= objectFromSvg.getElementsByClassName(name+'-V2-manual');	//статус
	this.coolerTemperature1 = objectFromSvg.getElementsByClassName(name+'-T1-text');	//статус	
	this.coolerTemperature2 = objectFromSvg.getElementsByClassName(name+'-T2-text');	//статус
	this.coolerTemperature3 = objectFromSvg.getElementsByClassName(name+'-T3-text');	//статус
	this.iconAlarm 			= objectFromSvg.getElementsByClassName('attention-'+name);
	this.iconRemont 		= objectFromSvg.getElementsByClassName('remont-'+name);
	this.window_sensors 	= document.getElementsByClassName('coller_sensors')[0].cloneNode(true);
	this.window_settings 	= document.getElementsByClassName('coller_settings')[0].cloneNode(true);
	this.window_analog_settings = document.getElementsByClassName('settings_analog_dat')[0].cloneNode(true);
	prepareForm(this.window_analog_settings);
	prepareForm(this.window_settings);
	this.intervalLockation;	  
	this.s 		= 0;																	//статус       
    this.e 		= 0;																	//ошибка
    this.i_po 	= 0;    																//воздухоохладитель вентиляторы питание
    this.i_au 	= 0;    																//воздухоохладитель вентиляторы режим
    this.q_km 	= 0;    																//воздухоохладитель вентиляторы управление
    this.td		= {"d1": "0.00","d2": "0.00","d3": "0.00"};  							//датчики температуры
    this.airch	= {"s": 0,"e": 0,"i_po": 0,"i_au": 0,"i_km": 0,"q_km": 0}; 				//обогрев воздухоохладителя
    this.aircvo1= {"s": 0,"e": 0,"i_km": 0};    										//воздухоохладитель вентилятор1
    this.aircvo2= {"s": 0,"e": 0,"i_km": 0};

    this.sensors={'d1'		:0,
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

    			};    										

	this.setStatusMain=function(){		
		console.log('set setStatusMain');
		switch (this.s) {
			case 0:				
				[...this.cooler].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				break;
			case 1:				
				[...this.cooler].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 2:				
				[...this.cooler].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 3:				
				[...this.cooler].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				break;	
			default:
				// statements_def
				break;
		}

	}
	this.setStatusTd=function(){		
		console.log('set setStatusTd');
		this.set_sensores();
		this.coolerTemperature1[0].innerHTML=this.td.d1;
		this.coolerTemperature2[0].innerHTML=this.td.d2;
		this.coolerTemperature3[0].innerHTML=this.td.d3;

	}
	this.setStatusAirch=function(){		
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
	}
	this.setStatusAircvo1=function(){		
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
	}
	this.setStatusAircvo2=function(){		
		console.log('set setStatusAircvo2');
		this.set_sensores();
	}

	this.set_sensores=function(){
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
	}

	this.set_sensores_status=function(){
		console.log('привет из cooler set_sensores_status');
		let re=/d[0-9]/;		
		for (let i in this.sensors) {			
			if(!i.match(re)){						
				if (this.sensors[i] == 1) {
					this.window_sensors.getElementsByClassName(''+i)[0].style.cssText='background:#00FF00;box-shadow:0 0 25px #00FF00;'+
																					  '-webkit-box-shadow:0 0 25px #00FF00';                    
	            }else{                   	
	                this.window_sensors.getElementsByClassName(''+i)[0].removeAttribute("style");
	            }
	        }else{this.window_sensors.getElementsByClassName(''+i)[0].innerHTML=this.sensors[i]}
		}		
	}

	this.setEror=function(){		
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
	}
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectOfCooler.prototype.myStatus = function(state){	
	console.log('привет из Cooler');
	console.log(state);

	if(this.s!=state.s){
		this.s=state.s;
		this.setStatusMain();
	}
	if(this.e!=state.e){
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
    }	
};
getNewObjectOfCooler.prototype.open_sensors = sensors_open;
getNewObjectOfCooler.prototype.close_sensors = sensors_close;
getNewObjectOfCooler.prototype.open_settings = settings_open;
getNewObjectOfCooler.prototype.close_settings = settings_close;
getNewObjectOfCooler.prototype.save_settings = settings_save;
getNewObjectOfCooler.prototype.get_settings =settings_get;


//------------------------------------------------------------------------------------------------------------
//Конструктор объектов клапан
function getNewObjectOfGate(objectFromSvg,name){	
	this.name 		  	= name;
	this.autoElements 	= objectFromSvg.getElementsByClassName(name);	
	this.gate 			= objectFromSvg;
	this.iconAlarm 		= objectFromSvg.getElementsByClassName('icon');
	this.window_sensors = document.getElementsByClassName('gate_sensors')[0].cloneNode(true);
	this.window_settings 	= document.getElementsByClassName('gate_settings')[0].cloneNode(true);

	this.intervalLockation;
	this.s 		= 0;		//статус       
    this.e 		= 0;		//ошибка
    this.sensors={'i_po':0,	//питание    			  
    			  'q_km':0	//обратная связь
    			};	

	this.setStatus=function(){		
		console.log('set status gate=',this.name);

		switch (this.s) {
			case 0:				
				[...this.autoElements].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				break;
			case 1:				
				[...this.autoElements].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 2:				
				[...this.autoElements].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				break;
			case 3:				
				[...this.autoElements].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				break;	
			default:
				// statements_def
				break;
		}

	}

	this.set_sensores_status=function(){		
		for (let i in this.sensors) {					
			if (this.sensors[i] == 1) {
				this.window_sensors.getElementsByClassName(''+i)[0].style.cssText='background:#00FF00;box-shadow:0 0 25px #00FF00;'+
																				  '-webkit-box-shadow:0 0 25px #00FF00';                  
	        }else{                   	
	            this.window_sensors.getElementsByClassName(''+i)[0].removeAttribute("style");
	        }        	
		}		
	}

	this.setEror=function(){		
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
	}
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectOfGate.prototype.myStatus = function(state){	
	console.log('привет из Gate');
	if(this.s!=state.s){
		this.s=state.s;
		this.setStatus();
	}
	if(this.e!=state.e){
		this.e=state.e;
		this.setEror();
	}
	if(this.sensors.i_po!=state.i_po){
		this.sensors.i_po=state.i_po;
		//this.setStatus();
	}	
	if(this.sensors.q_km!=state.q_km){
		this.sensors.q_km=state.q_km;
		//this.setStatus();
	}

};

getNewObjectOfGate.prototype.open_sensors 	= sensors_open;
getNewObjectOfGate.prototype.close_sensors 	= sensors_close;
getNewObjectOfGate.prototype.open_settings = settings_open;
getNewObjectOfGate.prototype.close_settings = settings_close;
getNewObjectOfGate.prototype.save_settings = settings_save;
getNewObjectOfGate.prototype.get_settings =settings_get;
//------------------------------------------------------------------------------------------------------------
//Конструктор объектов Камера
function getNewObjectOfBox(objectFromSvg,name){
	this.name 		  	= name;	
	this.box			= objectFromSvg;
	this.boxFon			= objectFromSvg.getElementsByClassName(name);
	this.boxDorOpen		= objectFromSvg.getElementsByClassName(name+'-D-open');
	this.boxDorClose	= objectFromSvg.getElementsByClassName(name+'-D-close');
	this.boxTemperature = objectFromSvg.getElementsByClassName(name+'-T1-text');
	this.boxStausText	= objectFromSvg.getElementsByClassName(name+'-statusText');
	this.boxStausFon	= objectFromSvg.getElementsByClassName(name+'-status');
	this.window_settings 		= document.getElementsByClassName('box_settings')[0].cloneNode(true);
	this.window_tex_settings 	= document.getElementsByClassName('box_tex_settings')[0].cloneNode(true);
	this.window_analog_settings = document.getElementsByClassName('settings_analog_dat')[0].cloneNode(true);
	prepareForm(this.window_analog_settings);
	prepareForm(this.window_settings);
	this.s	 	= 3;    //статус
    this.e	 	= 3;    //ошибка
    this.t	 	= '0';  //температура
    this.i_hu 	= 3;    //человек внутри
    this.i_do 	= 3;    //двери открыты


	
	this.setStatus=function(){		
		console.log('box set setStatus');
		switch (this.s) {
			case 0:				
				[...this.boxFon].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				[...this.boxStausText].forEach(function(item, i, arr) {				  
				  item.innerHTML='Her';
				});
				
				break;
			case 1:				
				[...this.boxFon].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#00ff00;'
				});
				[...this.boxStausText].forEach(function(item, i, arr) {				  
				  item.innerHTML='Piska';
				});
				
				break;
			case 2:				
				[...this.boxFon].forEach(function(item, i, arr) {
				  item.style.cssText='fill:#ff0000;'
				});
				[...this.boxStausText].forEach(function(item, i, arr) {				  
				  item.innerHTML='Siska';
				});
				
				break;			
			default:
				// statements_def
				break;
		}
	}
	this.setTemperatura=function(){		
		console.log('box set setTemperatura');
		this.boxTemperature[0].innerHTML=this.t;
	}
	this.setDors=function(){		
		console.log('box set setDors');
		switch (this.i_do) {
			case 0:				
				[...this.boxDorClose].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				[...this.boxDorOpen].forEach(function(item, i, arr) {
				  item.style.cssText='display:none;'
				});
				break;
			case 1:				
				[...this.boxDorOpen].forEach(function(item, i, arr) {
				  item.removeAttribute("style");
				});
				[...this.boxDorClose].forEach(function(item, i, arr) {
				  item.style.cssText='display:none;'
				});
				break;			
			default:
				// statements_def
				break;
		}
	}
	/*this.setTemperatura=function(){		
		console.log('box set setTemperatura');
	}*/
}

//Объявление метода через прототип для всех объектов метод сравнивает состояние объекта и меняет его
getNewObjectOfBox.prototype.myStatus = function(state){
	if(this.s!=state.s){
		this.s=state.s;
		this.setStatus();
	}
	if(this.e!=state.e){
		this.e=state.e;
		//this.setEror();
	}
	if(this.t!=state.t){
		this.t=state.t;
		this.setTemperatura();
	}	
	if(this.i_hu!=state.i_hu){
		this.i_hu=state.i_hu;
		//this.setStatus();
	}
	if(this.i_do!=state.i_do){
		this.i_do=state.i_do;
		this.setDors();
	}
	console.log('привет из Box');
};
getNewObjectOfBox.prototype.open_settings = settings_open;
getNewObjectOfBox.prototype.close_settings = settings_close;
getNewObjectOfBox.prototype.save_settings = settings_save;
getNewObjectOfBox.prototype.get_settings =settings_get;

getNewObjectOfBox.prototype.open_tex_settings = tex_settings_open;
getNewObjectOfBox.prototype.close_tex_settings = tex_settings_close;
getNewObjectOfBox.prototype.save_tex_settings = tex_settings_save;
getNewObjectOfBox.prototype.get_tex_settings =tex_settings_get;





