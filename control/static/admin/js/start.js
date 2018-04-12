"use strict";
	//global variables
var global_start_function=0;
var сurrent_grafic=0;   
var header_menu={};                           //global variable to manipulate header menu
var title_dsfvasdc;                           // tool tip on the object
var link_global_object;                       //object with oll lines 
var global_object_status={};                  //object of staus of all elements
var global_object_status_analog={};           //status fo anlog sensors
var global_object_status_kylt={};             //status of kylt on the objects
var menu_header_text={};                      //name of all devaces
var global_object_oll_kylt_from_server='';    //oll kylt from servere in one object
var global_kylt_from_server_formated={};      //formated list of kylt to use in future in different menu
//var element_type_number={'hiter':2,'cooler':3,'gate':1,'zadvijka':4,'silos':14,'dryer':16,'separator':17,'gate':18,'vent':6,'tube':7,'car':15,'enable':19,'zadvijkaGroup':23,'current':100,'kylt':101, 'analog_dat':102};//существующие типы элементов

const element_type_number= {'hiter':2,'cooler':3,'gate':1,'box':4,'compressor':5,'receiver':6,'pumpGroup':7,'jar':8,'refrigerator':9};//существующие типы элементов

const svg_type_id        = ["flor0","flor1","flor2","flor3","flor4"];//существующие типы элементов

const structura          = {"flor0":['compressor','receiver','pumpGroup','jar','refrigerator'],
                            "flor1":['hiter','cooler','gate','box'],
                            "flor2":['hiter','cooler','gate','box'],
                            "flor3":['hiter','cooler','gate','box'],
                            "flor4":['hiter','cooler','gate','box'],
                          };
var globalObject={};

var flors={"1":null,"2":null,"3":null,"4":null};

var worker2=null;//воркер для глобального пользования

var globalObjectSatusOfUser;

var pressTimerForeHoldOnIpadOreIphone;


//Function thet hide status of user
function statusOfuser(user){
	var userSatus=user;

	this.getUserStatus=function(){
		return userSatus;
	}
	this.initialize=function(){
		switch(userSatus){
            case 1:
            	document.getElementById('menu_button_setings_bell_open').addEventListener('click', setings_bell_open, false);
            	document.getElementById('menu_button_device_settings').addEventListener('click', device_settings_open, false);
            	document.getElementById('menu_button_linck_open').addEventListener('click', linck_open, false);
            	document.getElementById('menu_button_culture_open').addEventListener('click', culture_open, false);
            case 2:

            case 3:
            	setEventOnElement(userSatus);//set events
            	header_menu = new Header_menu(userSatus);//create header 
                createGlobalObject();

                //Вместо него запускаем websoket
                    socketCloseListener();
                break;
		}
	}
}

function asckerStatusOfUser(){
	var url_string ='/user_status/';
	$.ajax({
            url: url_string,
            data: {},
            success: function( result ) {            
                let responseObject = JSON.parse(result);
                console.log(responseObject);
                if(responseObject.type==0){
                    globalObjectSatusOfUser=new statusOfuser(responseObject.data.control);                    
                    globalObjectSatusOfUser.initialize();//init oll elements akording to operator
                }else{
                    showMessageFromServer({'type':responseObject.type,'message':responseObject.message});
                }         
            }
    });
}

$(window).load(function () {
    
    // Создать новый объект worker1
        /*var worker = new Worker('/static/admin/js/worker.js');
        // Получить сообщение от работника
        worker.onmessage = function (event) {            
            var temp235=event.data;
            herHer(temp235)            
        };*/

       

        // Создать новый объект worker2
        worker2 = new Worker('/static/admin/js/worker2.js');
        // Получить сообщение от работника
        worker2.onmessage = function (event){
            var temp235=event.data;
            herHer(temp235);          
        }; 

        
/*

   // Создать новый объект worker3
        var worker3 = new Worker('/static/admin/js/worker3.js');
        // Получить сообщение от работника
        worker3.onmessage = function (event) {
        var temp=event.data;
            for (let i in temp){
            global_object_status_analog[i]=temp[i];
        }
        	analog_status(event.data);
        };

    // Создать новый объект worker4
        var worker4 = new Worker('/static/admin/js/worker4.js');
        // Получить сообщение от работника
        worker4.onmessage = function (event) {
        var temp=event.data;
            for (let i in temp){
            global_object_status_kylt[i]=temp[i];
        }
        	kylt_status(event.data);
        };*/

		////////////////////////////////////////////////////////////////////
        //Запуск календарика и часиков
        //
        $( "#datepicker_message1" ).datepicker({dateFormat: "yy.mm.dd"});
        $( "#datepicker_message2" ).datepicker({dateFormat: "yy.mm.dd"});
        $( "#datepicker_rout1" ).datepicker({dateFormat: "yy.mm.dd"});
        $( "#datepicker_rout2" ).datepicker({dateFormat: "yy.mm.dd"});
        $( "#datepicker_device1" ).datepicker({dateFormat: "yy.mm.dd"});
        $( "#datepicker_device2" ).datepicker({dateFormat: "yy.mm.dd"});
        $( "#datepicker_current").datepicker({dateFormat: "yy.mm.dd"});
        $( "#timepicker_current").timepicker({timeFormat: 'H:i:s'});
        /////////////////////////////////////////////////////////////////////


            /////////////////////////////////////////////////////////////////////////////////
            //проверка размеров окна при загрузке
            if($( window ).width()<1400){
                $( "#header" ).removeClass( "gorizontal" ).addClass( "vertical" );
                $( ".menu_button_typ1" ).removeClass( "menu_button_typ1_gorizont" ).addClass( "menu_button_typ1_vertical" );
                $( ".menu_button_typ2" ).removeClass( "menu_button_typ2_gorizont" ).addClass( "menu_button_typ2_vertical" );
            }
            if($( window ).width()>1400){
                $( "#header" ).removeClass( "vertical" ).addClass( "gorizontal" );
                $( ".menu_button_typ1" ).removeClass( "menu_button_typ1_vertical" ).addClass( "menu_button_typ1_gorizont" );
                $( ".menu_button_typ2" ).removeClass( "menu_button_typ2_vertical" ).addClass( "menu_button_typ2_gorizontal" );


            }
            //Изменение меню при изменении размеров окна
            $( window ).resize(function() {

                    if($( window ).width()<1400){
                        $( "#header" ).removeClass( "gorizontal" ).addClass( "vertical" );
                        $( ".menu_button_typ1" ).removeClass( "menu_button_typ1_gorizont" ).addClass( "menu_button_typ1_vertical" );
                        $( ".menu_button_typ2" ).removeClass( "menu_button_typ2_gorizont" ).addClass( "menu_button_typ2_vertical" );
                    }

                    if($( window ).width()>1400){
                        $( "#header" ).removeClass( "vertical" ).addClass( "gorizontal" );
                        $( ".menu_button_typ1" ).removeClass( "menu_button_typ1_vertical" ).addClass( "menu_button_typ1_gorizont" );
                        $( ".menu_button_typ2" ).removeClass( "menu_button_typ2_vertical" ).addClass( "menu_button_typ2_gorizontal" );
                    }
                }
            )
            ////////////////////////////////////////////////////////////////////////////////////
          //setInterval(function() {worker.postMessage(global_object_status)}, 2000);//циклический вызов воркера для запроса состояния всех механизмов          
          /*setInterval(function() {worker.postMessage(global_object_status)}, 1000);//циклический вызов воркера для запроса состояния всех механизмов          
          setInterval(function() {worker3.postMessage(global_object_status_analog)}, 1000);//циклический вызов воркера для запроса состояния аналоговых датчиков
          setInterval(function() {worker4.postMessage(global_object_status_kylt)}, 1000);//циклический вызов воркера для запроса состояния меток культуры
          setInterval(function() {worker2.postMessage(1)}, 1000); //циклический вызов воркера для запроса состояния линков*/
          
        //Filling variables------------------------------------------------------------------------------------------
        /*$("body").on("contextmenu", false);
        var svgobject = document.getElementById('nor');
          if ('contentDocument' in svgobject){
               //Создание объекта с информацией
                var svgdom = svgobject.contentDocument;

                //Event to close windows---------------------------------------------------------------------------------------
		          $(svgdom.getElementsByTagName("svg")).on('click', function(e){                    
		              hidemenu();//locate in servis_and_archiv_menu
		          });
		         //------------------------------------------------------------------------------------------------------------

                
                //заполнение переменных
                title_dsfvasdc=svgdom.getElementsByClassName("title_very_dificult");
                link_global_object=$(svgdom.getElementsByClassName("line"));
            }
        */
        //----------------------------------------------------------------------------------------------------------------

        //Get list of long and short names of oll dewases to use them in future
          // get_name_for_oll_devaces();

        //Get kylt list from server to use them in future
          // get_kylt_list();

        //Inicialization prevent defoult on some elements
        inicializePreventDefoult();

        //Asck user status and inicialithe elements
		asckerStatusOfUser();
		
		//Функция перетаскивания------------------------------
         // $( ".draggable" ).draggable({distance: 15});//

        //------------------------------------------------------

        //Функция зумирования
         // initialize();     
         
		
});


//имена механизмов для тултипа
function get_name_for_oll_devaces(){
        var url_string ='/name_list/';
        $.ajax({
            url: url_string,
            data: {},
            success: function( result ) {
                if(result!=404){
                menu_header_text=JSON.parse(result);
                console.log(menu_header_text);
                }
            }
            });
    }
//перечень культур
function get_kylt_list(){
        var url_string ='/kylt_list/';
        var temp_kylt_list;
        $.ajax({
            url: url_string,
            data: {},
            success: function( result ) {
              console.log(result);
                if(result!=404){
                    temp_kylt_list=JSON.parse(result);
                    for (let i in temp_kylt_list) {
                      //Создать перечень культур для дальнейшего использования
                      console.log(temp_kylt_list[i].index);
                      console.log(temp_kylt_list[i].name_full);

                      global_kylt_from_server_formated[temp_kylt_list[i].index]=temp_kylt_list[i].name_full;
                      //Создать отформатированную строку для использования при выборе культуры
                      global_object_oll_kylt_from_server=global_object_oll_kylt_from_server+'<option value="'+(temp_kylt_list[i].index)+'" >'+temp_kylt_list[i].name_full+'</option>';
                    }                    
                }
                console.log(global_kylt_from_server_formated);
                console.log(global_object_oll_kylt_from_server);
            }
        });
    }

 //создание обеекта всех объектов   
function createGlobalObject(){
    // Получаем доступ к SVG DOM 
    for(let flor in structura){ 
          console.log('ключ структуры='+flor);       
          let svgobject = document.getElementById(''+flor);
          let svgdom = svgobject.contentDocument;          
          let typeArrey=structura[flor];
          console.log(typeArrey);
          globalObject[flor]={};
          for(let i in typeArrey){

            let oneTypeObjects=svgdom.getElementsByClassName(""+typeArrey[i]);

            for (let j = oneTypeObjects.length - 1; j >= 0; j--){
                let group_name = ($(oneTypeObjects[j]).attr('class').split(' ')[0]);
                let element_name = ($(oneTypeObjects[j]).attr('class').split(' ')[1]);
                let key=element_name.replace(''+group_name+'-','');

                console.log(key);

                switch (group_name) {
                    case 'hiter':
                        globalObject[flor][key]=new getNewObjectOfHiter(oneTypeObjects[j],key);
                        // statements_1
                        break;
                    case 'cooler':
                        globalObject[flor][key]=new getNewObjectOfCooler(oneTypeObjects[j],key);
                        // statements_2
                        break;
                    case 'gate':
                        globalObject[flor][key]=new getNewObjectOfGate(oneTypeObjects[j],key);
                        // statements_3
                        break;
                    case 'box':
                        globalObject[flor][key]=new getNewObjectOfBox(oneTypeObjects[j],key);
                        // statements_4
                        break;
                    case 'compressor':
                        globalObject[flor][key]=new getNewObjectOfCompressor(oneTypeObjects[j],key);
                        // statements_4
                        break;
                    case 'receiver':
                        globalObject[flor][key]=new getNewObjectOfReceiver(oneTypeObjects[j],key);
                        // statements_4
                        break;
                        
                    default:
                        // statements_def
                        break;
                }
                
            }
                       
        }

    }
    console.log(globalObject);
}
//расстановка событий на элементах
function setEventOnElement(userType){
	// Получаем доступ к SVG DOM 
    for(let svgId in svg_type_id){ 
          console.log('svgId='+svgId);       
          var svgobject = document.getElementById(''+svg_type_id[svgId]);

          //Event to close windows---------------------------------------------------------------------------------------
           $(svgobject.contentDocument).on('click', function(e){                    
             hidemenu();//locate in servis_and_archiv_menu
            });

           //Заполнить массив объектами
          flors[''+(parseInt(svgId))]=svgobject;

          if ('contentDocument' in svgobject){
               //Создание объекта с информацией
                let svgdom = svgobject.contentDocument;                

                ////////////////////////////////////////////////////////////////////////
                //Расстановка событий на элементах
                //////////////////////////////////////////////////////////////////////
                for (let i in element_type_number){
                        console.log(i);
                        //Подсветка линий
                    if(i!=='box'){
                        $(svgdom.getElementsByClassName(""+i)).hover(
                            function () {
                                setTimeout($.proxy(function(){
                                    var group_name = ($(this).attr('class').split(' ')[0]);
                                    var element_name = ($(this).attr('class').split(' ')[1]);                                    
                                    svgdom.getElementsByClassName("title_very_dificult")[0].innerHTML=element_name;                                      
                                    $('.'+element_name.replace(''+group_name+'-','')+'-select',svgdom).css({'stroke-width': '100px','stroke':'#f5ed00'});
                                }, this),0)
                            },
                            
                            function () {
                                setTimeout($.proxy(function( ){
                                    var group_name = ($(this).attr('class').split(' ')[0]);
                                    var element_name =($(this).attr('class').split(' ')[1]);                                    
                                    $('.'+element_name.replace(''+group_name+'-','')+'-select',svgdom).removeAttr("style");

                                    svgdom.getElementsByClassName("title_very_dificult")[0].innerHTML='';
                                    
                                 }, this), 0)
                            }
                        );
                     
                    }
                        /*//Клик на устройствах
                       $(svgdom.getElementsByClassName(""+i)).on('click', function(e){
                            var element_name =($(this).attr('class').split(' ')[1]);
                            var elementIndex=parseInt(element_name.match(/-*[0-9]+/));
                            $("#Name_devise").text(elementIndex);
                            $("#footer_help").text(menu_header_text[elementIndex].longName);
                       });*/
                       

                        /*//Диалог запуска устройства
                        if (userType==1 || userType==2 || userType==3){
                            //this pease of shet is only fore safary and ipad
                            console.log(navigator.userAgent);
                            if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
                                $(svgdom.getElementsByClassName(""+i)).on('touchend', function (e){                                
                                    clearTimeout(pressTimerForeHoldOnIpadOreIphone);
                                }).on('touchstart', function (e) {                               
                                   let pisya=e;                               
                                   // Set timeout
                                   pressTimerForeHoldOnIpadOreIphone = window.setTimeout(function() {Pisda(pisya);}, 1000)
                               });
                                    function Pisda(pisya){
                                        console.log(pisya);                                    
                                            console.log(pisya.currentTarget.className.animVal)
                                            var element_name =(pisya.currentTarget.className.animVal.split(' ')[1]);
                                            var temp_string_name=element_name.match(/-*[a-z]+/i);
                                            var elementIndex=parseInt(element_name.match(/-*[0-9]+/));
                                            $("#Name_devise").text(elementIndex);
                                            $("#footer_help").text(menu_header_text[elementIndex].longName);
                                            menu_kreator(parseInt(element_name.match(/-*[0-9]+/)),temp_string_name,pisya.originalEvent.changedTouches[0].clientX,pisya.originalEvent.changedTouches[0].clientY);
                                    }
                            }else{*/
                                //This fore normal devices not fore ipad
                                $(svgdom.getElementsByClassName(""+i)).on('contextmenu', function(e){

                                    e.stopPropagation();

                                    let group_name       = ($(this).attr('class').split(' ')[0]);                             //first class name
                                    let element_name     = ($(this).attr('class').split(' ')[1]);                             //second class name                             
                                    let elementShortName = element_name.replace(''+group_name+'-','');                        //cut second name                                    
                                    let bufer            = {name:elementShortName,"X":e.clientX,"Y":e.clientY};               //window lockation

                                    get_data_to_server('/get_menu_buttons/?name='+elementShortName,menu_kreator,bufer);

                                    return false;
                                });

                            //}
                    	//}
                   
                }
          }
        
      }
      
      console.log(flors);
    }
	



    //function prevent context menu
	function inicializePreventDefoult(){
        var svgobject;
        for(let svgId in svg_type_id){         
            svgobject      = document.getElementById(''+svg_type_id[svgId]);	          
            let svgdom     = svgobject.contentDocument;
            let svgContent = svgdom.getElementsByTagName("svg");
            svgContent[0].addEventListener('contextmenu',cansaleContextMenu);            
        }

        svgobject = document.getElementsByClassName('menu_button_typ2');
        [...svgobject].forEach( function(element, index) {
            let svgdom      = element.contentDocument;
            let svgContent  = svgdom.getElementsByTagName("svg");
            svgContent[0].addEventListener('contextmenu',cansaleContextMenu);
        });        
    }
	//function prevent context menu
	function cansaleContextMenu(e){	  
	  e.stopPropagation();
	  e.preventDefault();
	}




//отображение даты
     function date() {
         var d = new Date();
         var yyyy = d.getFullYear().toString();
         var mm = (d.getMonth()+1);
         if(mm<10){
         mm= '0'+mm.toString();
         }else{
         mm= mm.toString();
         }
         var dd  = d.getDate();
         if(dd<10){
         dd= '0'+dd.toString();
         }else{
         dd= dd.toString();
         }

         var full_date = yyyy +"."+mm+"."+dd;
         return full_date
     }

//отображение текущего времени
     function time() {
         var d = new Date();
         var hh = d.getHours();
         if(hh<10){
          hh= '0'+hh.toString();
         }else{
          hh= hh.toString();
         }
         var mm = d.getMinutes(); // getMonth() is zero-based
         if(mm<10){
          mm= '0'+mm.toString();
         }else{
          mm= mm.toString();
         }
         var ss  = d.getSeconds().toString();
         if(ss<10){ss= '0'+ss.toString();}else{ss= ss.toString();}
         var full_time = hh+":"+mm+":"+ss;
         return full_time
     }


function herHer(data){
    console.log(data);
    global_object_status=Object.assign({},data[1]);
    console.log(data[0]);
    let tempDataStorage=data[0];
    for(let i in tempDataStorage){
        for(let j in tempDataStorage[i]){
            console.log(i);
            console.log(j);
            globalObject[i][j].myStatus(tempDataStorage[i][j]);
        }
    }
}




//Получение данных от сервера
  function get_data_to_server(qwery,callback,bufer) {    
    var x = new XMLHttpRequest();
    x.open("GET", qwery, true);
    //Обработка статусов
    x.onload = function (){
        let responseText = x.responseText;        
        let responseObject = JSON.parse(responseText);
        console.log(responseObject);
        if(responseObject.type==0){
            if(callback){
                callback({"data":responseObject.data,"bufer":bufer});
            }
        }else{            
                showMessageFromServer({'type':responseObject.type,'message':responseObject.message,"bufer":bufer});
            
        }      
    }
        x.timeout = 3000;
        x.send(null);
    }

//Посылка данных серверу
  function post_data_to_server(qwery,body,callback,bufer){    
    console.log(body);
    var x = new XMLHttpRequest();
    x.open("POST", qwery, true);
    x.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    //Обработка статусов
    x.onload = function (){
        let responseText = x.responseText;        
        let responseObject = JSON.parse(responseText);
        console.log(responseObject);
        if(responseObject.type==0){
            if(callback){
                callback({"data":responseObject.data,"bufer":bufer});
            }
        }else{            
                showMessageFromServer({'type':responseObject.type,'message':responseObject.message,"bufer":bufer});
            
        }      
    }
        x.timeout = 3000;
        x.send(body);
    }







