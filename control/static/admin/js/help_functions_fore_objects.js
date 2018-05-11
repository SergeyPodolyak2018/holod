//-------------------------------------------------------------------------------------------------------
function sensors_open(){
	document.getElementById('container').appendChild(this.window_sensors);
	//this.window_sensors.classList.add('draggable');
	$( this.window_sensors).draggable({
  appendTo: "body"
});
	if(this.window_sensors.style.display == 'none'){
		hidemenu();
		this.window_sensors.style.display = 'block';
		this.window_sensors.getElementsByClassName('fool_name_of_device')[0].innerHTML=this.name;
		let objectContext=this;
		[...this.window_sensors.getElementsByClassName('btn-close')].forEach(function(item, i, arr) {
			item.onclick= function(){objectContext.close_sensors();};
		});	
		this.intervalLockation = setInterval(function(){
			objectContext.set_sensores_status();			
		},1000);
	}
}

function sensors_close(){	
	if(this.window_sensors.style.display == 'block'){
		this.window_sensors.style.display = 'none';
		clearInterval(this.intervalLockation);
		this.window_sensors.parentNode.removeChild(this.window_sensors);
	}
}


function settings_open(response){
	let prepareDataFromServer=JsonToformSettings(response.data);	
	document.getElementById('container').appendChild(this.window_settings);	
	$( this.window_settings).draggable({
  		appendTo: "body"
	});

	if(this.window_settings.style.display == 'none'){
		hidemenu();
		this.window_settings.style.display = 'block';
		this.window_settings.getElementsByClassName('fool_name_of_device')[0].innerHTML=this.name;
		let objectContext=this;
		prepareForm(this.window_settings);

		let myForm=this.window_settings.getElementsByTagName('form')[0];
		console.log(prepareDataFromServer);

		for (let i  in prepareDataFromServer) {
            try {
                myForm.elements[i].value =prepareDataFromServer[i];
            } catch (err) {
               	console.log(err);                
           }
      	}


		[...this.window_settings.getElementsByClassName('btn-close')].forEach(function(item, i, arr) {
			item.onclick= function(){objectContext.close_settings();};
		});
		[...this.window_settings.getElementsByClassName('btn-save')].forEach(function(item, i, arr) {
			item.onclick= function(){objectContext.save_settings();};
		});		
		
	}
}

function settings_close(){	
	if(this.window_settings.style.display == 'block'){
		this.window_settings.style.display = 'none';		
		this.window_settings.parentNode.removeChild(this.window_settings);
	}
}



function settings_save(){
	    let form        = this.window_settings.getElementsByTagName('form')[0];	    
	    let body        = JSON.stringify(formSettingsToJSON(form.elements));
	    let url_string  = '/device_save_settings/?name='+this.name;
	    //console.log(body);
 		post_data_to_server(url_string,body,null,null);
    	
	    
}
function settings_get(){
	    /*let form        = this.window_settings.getElementsByTagName('form')[0];	    
	    let body        = JSON.stringify(formSettingsToJSON(form.elements));*/
	    let url_string  = '/device_get_settings/?name='+this.name;
	    let context =this;
	    let callback = function(response){context.open_settings(response)};
	    //console.log(body);
 		get_data_to_server(url_string,callback,null);
}


const formSettingsToJSON = elements => [].reduce.call(elements, (data, element) => {
	let re=/\[/;
	let re1=/([aA-zZ0-9]{1,10})\[(.*)\]/;
	if(element.name.match(re)){
		let first=element.name.match(re1);		
		if(first[2].match(re)){
			let second=first[2].match(re1);			
			if(second[1] in data[first[1]]){
				data[first[1]][second[1]][second[2]] = element.value;
			}else{
				data[first[1]][second[1]]={}
				data[first[1]][second[1]][second[2]] = element.value;
			}			
		}else{
			if(first[1] in data){
				data[first[1]][first[2]] = element.value;
			}else{
				data[first[1]]={}
				data[first[1]][first[2]] = element.value;
			}
		}		
	}else{
		data[element.name] = element.value;
	}  
	  
	  return data;
	}, {});

function prepareForm(form){
	$(form.getElementsByClassName('checkable_data_form')).bind("change keyup input click blur ", function() {
	    if (this.value.match(/[^0-9]/g)) {
	        this.value = this.value.replace(/[^0-9]/g, '');
	    }   
    
	});
	$(form.getElementsByClassName('checkable_data_form')).bind("blur", function() {    
	    if (this.value == '') {
	        this.value = '0';
	    }    
	});

	$(form.getElementsByClassName('adres_getable')).hover(function() {

	    var abstrackt_value=$(this).val();
	    if(abstrackt_value>=8){
	    var a=Math.floor(abstrackt_value/8);

	    var b=abstrackt_value%8;

	    $(this).attr('title',"I"+a+'.'+b);
	    }else{
	        $(this).attr('title',"Канал датчика");
	    }
	});
	$(form.getElementsByClassName('adres_getable_Q')).hover(function() {
	    var abstrackt_value=$(this).val();
	    if(abstrackt_value>=8){
	    var a=Math.floor(abstrackt_value/8);

	    var b=abstrackt_value%8;

	    $(this).attr('title',"Q"+a+'.'+b);
	    }else{
	        $(this).attr('title',"Канал выхода");
	    }
	});
}


const JsonToformSettings = elements => {
	console.log(elements);	
	let rezalt={};	
	if(typeof elements=='object'){
		for (let i in elements){								
			if (typeof elements[i]=='object'){
				let name1=''+i;
				let name2='';					
				concater(name1,name2,elements[i]);
			}else{
				rezalt[i]=elements[i];
			}
		}
		
	}else{				
		return rezalt;		
	}

	function concater(name1,name2,value){		
		for(let i in value){
			if (typeof value[i] != 'object'){
				rezalt[name1+'['+i+']'+name2]=value[i];
			}else{
				concater(name1+'['+i,']'+name2,value[i]);
			}
		}
		
	}
	return rezalt;
};

//Tehnology settings

function tex_settings_open(response){
	let prepareDataFromServer=JsonToformSettings(response.data);	
	document.getElementById('container').appendChild(this.window_tex_settings);	
	$( this.window_tex_settings).draggable({
  		appendTo: "body"
	});

	if(this.window_tex_settings.style.display == 'none'){
		hidemenu();
		this.window_tex_settings.style.display = 'block';
		this.window_tex_settings.getElementsByClassName('fool_name_of_device')[0].innerHTML=this.name;
		let objectContext=this;
		prepareForm(this.window_tex_settings);

		let myForm=this.window_tex_settings.getElementsByTagName('form')[0];
		console.log(prepareDataFromServer);

		for (let i  in prepareDataFromServer) {
            try {
                myForm.elements[i].value =prepareDataFromServer[i];
            } catch (err) {
               	console.log(err);                
           }
      	}


		[...this.window_tex_settings.getElementsByClassName('btn-close')].forEach(function(item, i, arr) {
			item.onclick= function(){objectContext.close_tex_settings();};
		});
		[...this.window_tex_settings.getElementsByClassName('btn-save')].forEach(function(item, i, arr) {
			item.onclick= function(){objectContext.save_tex_settings();};
		});		
		
	}
}

function tex_settings_close(){	
	if(this.window_tex_settings.style.display == 'block'){
		this.window_tex_settings.style.display = 'none';		
		this.window_tex_settings.parentNode.removeChild(this.window_tex_settings);
	}
}



function tex_settings_save(){
	    let form        = this.window_tex_settings.getElementsByTagName('form')[0];	    
	    let body        = JSON.stringify(formSettingsToJSON(form.elements));
	    let url_string  = '/device_save_tex_settings/?name='+this.name;
	    //console.log(body);
 		post_data_to_server(url_string,body,null,null);
    	
	    
}
function tex_settings_get(){
	    /*let form        = this.window_settings.getElementsByTagName('form')[0];	    
	    let body        = JSON.stringify(formSettingsToJSON(form.elements));*/
	    let url_string  = '/device_get_tex_settings/?name='+this.name;
	    let context =this;
	    let callback = function(response){context.open_tex_settings(response)};
	    //console.log(body);
 		get_data_to_server(url_string,callback,null);
}

