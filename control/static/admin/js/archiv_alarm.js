

//архив аварий-------------------------------------------------------------------------------------
function archiv_alarm(){
    
	var qwery = '/alarm_arxiv/?name='+''+'&type_m='+0+'&date_s='+0+'&date_p='+0;
    let callback = function(response){archiv_alarm_build(response)};
    get_data_to_server(qwery,callback,null);
}

function archiv_alarm_build(response){

                hidemenu();
                
            	var  message=response.data;
            	
            	var temp_string='';
            	for (var i  in message) {
            		//temp_string=temp_string+'<tr style="background-color:'+message[i].color+'"><td>'+message[i].id+'</td><td>'+message[i].date+'</td><td>'+message[i].time+'</td><td>'+message[i].device+'</td><td>'+message[i].text+'</td><td>'+message[i].ack+'</td></tr>'
            	    temp_string=temp_string+'<tr style="background-color:'+message[i].color+'"><td style="width: 20%;">'+message[i].date+'</td><td>'+message[i].time+'</td><td style="width: 30%;">'+message[i].device+'</td><td style="width: 40%;">'+message[i].text+'</td><td style="width: 5%;">'+message[i].ack+'</td></tr>'

            	}
            	var div_menu = document.getElementById('table_rchiv_message');
        		div_menu.innerHTML = temp_string;

        		var filter_selector = document.getElementById('message_filter');
        		filter_selector.innerHTML = '<select id="message_filter_select" required size = "1" width="30%" onchange="archiv_alarm_sort('+0+','+'this'+',1)">'+
                                           '<option value="0" >Все</option>'+
                                           '<option value="1" >Аварийные</option>'+
                                           '<option value="2" >Предупрежнения</option>'+
                                           '<option value="3" >Статусы</option>'+
                                           '<option value="4" >Подсказки</option>'+
                                           '<option value="5" >Лог</option>'+
                                       '</select>';
        		var filter_selector = document.getElementById('archiv_message_filter_button');
        		filter_selector.innerHTML = '<button class="modal_box_btn" style="float:right"' +
                    ' onclick="archiv_alarm_sort('+null+','+0+','+2+')">Сортировать</button>';
                
        		$('#archiv_message').show();
                
                 universalTableBuilder('#table_head_rchiv_message','#table_rchiv_message>tbody');            
}

//аварии конкретного устройства
function archiv_alarm_device(name){
    
    var qwery = '/alarm_arxiv/?name='+name+'&type_m='+0+'&date_s='+0+'&date_p='+0;
    let callback = function(response){archiv_alarm_device_build(response)};
    get_data_to_server(qwery,callback,null);
}

function archiv_alarm_device_build(response){
                objectMenuManager.hide();                
                var  message=response.data;                
                var temp_string='';
                for (var i  in message) {
                    //temp_string=temp_string+'<tr style="background-color:'+message[i].color+'"><td>'+message[i].id+'</td><td>'+message[i].date+'</td><td>'+message[i].time+'</td><td>'+message[i].device+'</td><td>'+message[i].text+'</td><td>'+message[i].ack+'</td></tr>'
                    temp_string=temp_string+'<tr style="background-color:'+message[i].color+'"><td style="width: 20%;">'+message[i].date+'</td><td>'+message[i].time+'</td><td style="width: 30%;">'+message[i].device+'</td><td style="width: 40%;">'+message[i].text+'</td><td style="width: 5%;">'+message[i].ack+'</td></tr>'

                }
                var div_menu = document.getElementById('table_rchiv_message');
                div_menu.innerHTML = temp_string;

                var filter_selector = document.getElementById('message_filter');
                filter_selector.innerHTML = '<select id="message_filter_select" required size = "1" width="30%" onchange="archiv_alarm_sort('+0+','+'this'+',1)">'+
                                           '<option value="0" >Все</option>'+
                                           '<option value="1" >Аварийные</option>'+
                                           '<option value="2" >Предупрежнения</option>'+
                                           '<option value="3" >Статусы</option>'+
                                           '<option value="4" >Подсказки</option>'+
                                           '<option value="5" >Лог</option>'+
                                       '</select>';
                var filter_selector = document.getElementById('archiv_message_filter_button');
                filter_selector.innerHTML = '<button class="modal_box_btn" style="float:right"' +
                    ' onclick="archiv_alarm_sort(\''+message[i].device+'\','+0+','+2+')">Сортировать</button>';
                
                $('#archiv_message').show();
                
                 universalTableBuilder('#table_head_rchiv_message','#table_rchiv_message>tbody');            
}




//сортировка аварий
function archiv_alarm_sort(name,type_m,selector_or_button){
    let date_s=0;
    let date_p=0;
    let type=$(type_m).val();
    if(selector_or_button==2){
        type=$('#message_filter_select').val();
        date_s=$('#datepicker_message1').val(); //значение календаря 1
        date_p=$('#datepicker_message2').val(); //значение календаря 2
    }
    let qwery = '/alarm_arxiv/?name='+name+'&type_m='+type+'&date_s='+date_s+'&date_p='+date_p;    
    let callback = function(response){archiv_alarm_sort_build(response)};
    get_data_to_server(qwery,callback,null);
}
	
function archiv_alarm_sort_build(){
                var  message=response.data;
            	temp_string='';
            	for (var i  in message) {
            		//temp_string=temp_string+'<tr style="background-color:'+message[i].color+'"><td>'+message[i].id+'</td><td>'+message[i].date+'</td><td>'+message[i].time+'</td><td>'+message[i].device+'</td><td>'+message[i].text+'</td><td>'+message[i].ack+'</td></tr>'
            	    temp_string=temp_string+'<tr style="background-color:'+message[i].color+'"><td style="width: 20%;">'+message[i].date+'</td><td>'+message[i].time+'</td><td style="width: 30%;">'+message[i].device+'</td><td style="width: 40%;">'+message[i].text+'</td><td style="width: 5%;">'+message[i].ack+'</td></tr>'

            	}
            	var div_menu = document.getElementById('table_rchiv_message');
        		div_menu.innerHTML = temp_string;
                universalTableBuilder('#table_head_rchiv_message','#table_rchiv_message>tbody');
}

function archiv_alarm_close(){
                
                document.getElementById('datepicker_message1').value =''; //arase of datepicker input element1
                document.getElementById('datepicker_message2').value =''; //arase of datepicker input element2            
        		$('#archiv_message').hide(); //close window
}






//архив по всем устройствам
function archiv_devices(){
    var qwery = '/event_arxiv/?name='+''+'&type_m='+0+'&date_s='+0+'&date_p='+0;
    let callback = function(response){archiv_devices_build(response)};
    get_data_to_server(qwery,callback,null);
}

function archiv_devices_build(response){
    hidemenu();                
    var  message=response.data;
            
    temp_string='';
    for (var i  in message) {
        temp_string=temp_string+'<tr><td style="width: 20%;">'+message[i].date+'</td><td>'+message[i].time+'</td><td style="width: 60%;">'+message[i].name+'</td><td style="width: 30%;">'+message[i].status+'</td></tr>';
    }
    var div_menu = document.getElementById('table_rchiv_device');
    div_menu.innerHTML = temp_string;
    var filter_button = document.getElementById('archiv_device_filter_button');
    filter_button.innerHTML = '<button class="modal_box_btn" onclick="archiv_device_sort()">Сортировать</button>';
    $('#archiv_device').show();
    universalTableBuilder('#table_head_rchiv_device','#table_rchiv_device>tbody');
}

//архив событий конкретного устройства
function archiv_device(name){
    
    var qwery = '/event_arxiv/?name='+name+'&type_m='+0+'&date_s='+0+'&date_p='+0;
    let callback = function(response){archiv_device_build(response)};
    get_data_to_server(qwery,callback,null);
}

function archiv_device_build(response){
    objectMenuManager.hide();                
    var  message=response.data;                
    let temp_string='';
    for (var i  in message) {
        //temp_string=temp_string+'<tr><td>'+message[i].id+'</td><td>'+message[i].date+'</td><td>'+message[i].time+'</td><td>'+message[i].name+'</td><td>'+message[i].status+'</td></tr>';
        temp_string=temp_string+'<tr><td style="width: 20%;">'+message[i].date+'</td><td>'+message[i].time+'</td><td style="width: 60%;">'+message[i].name+'</td><td style="width: 30%;">'+message[i].status+'</td></tr>';

    }
    var div_menu = document.getElementById('table_rchiv_device');
    div_menu.innerHTML = temp_string;
    var filter_button = document.getElementById('archiv_device_filter_button');
    filter_button.innerHTML = '<button class="modal_box_btn" onclick="archiv_device_sort(\''+message[i].name+'\')">Сортировать</button>';

    $('#archiv_device').show();
    universalTableBuilder('#table_head_rchiv_device','#table_rchiv_device>tbody');      
}



function archiv_device_sort(name){
    var qwery = '/event_arxiv/?name='+name+'&date_s='+$('#datepicker_device1').val()+'&date_p='+$('#datepicker_device2').val();
    let callback = function(response){archiv_device_build(response)};
    get_data_to_server(qwery,callback,null);
}


function archiv_device_sort_build(response){	
            	var  message=response.data;
            	temp_string='';
            	for (var i  in message) {
            		//temp_string=temp_string+'<tr><td>'+message[i].id+'</td><td>'+message[i].date+'</td><td>'+message[i].time+'</td><td>'+message[i].name+'</td><td>'+message[i].status+'</td></tr>';
            	    temp_string=temp_string+'<tr><td style="width: 20%;">'+message[i].date+'</td><td>'+message[i].time+'</td><td style="width: 60%;">'+message[i].name+'</td><td style="width: 30%;">'+message[i].status+'</td></tr>';

            	}
            	var div_menu = document.getElementById('table_rchiv_device');
        		div_menu.innerHTML = temp_string;
                universalTableBuilder('#table_head_rchiv_device','#table_rchiv_device>tbody');



            
}

function archiv_device_close(){
                document.getElementById('datepicker_device1').value =''; //arase of datepicker input element1
                document.getElementById('datepicker_device2').value =''; //arase of datepicker input element2 
        		$('#archiv_device').hide();
}

function alarm(){
    var qwery = '/alarm/';
    let callback = function(response){alarm_build(response)};
    get_data_to_server(qwery,callback,null);
}
function alarm_build(response){
    let  message=response.data;
    let    temp_string='';
                for (var i  in message) {
                    if (i!='quantity'){
                       temp_string=temp_string+'<tr style="background-color:'+message[i].color+'"><td style="width: 20%;">'+message[i].date+'</td><td>'+message[i].time+'</td><td>'+message[i].device+'</td><td>'+message[i].text+'</td><td style="text-align:center;">'+message[i].ack+'</td><td>'+'<button style="padding-left: 5px;padding-right: 5px;padding-top: 1px;padding-bottom: 1px;margin-bottom: 5px;" class="modal_box_btn" onclick="alarm_confirmation(this,'+message[i].id+')">Квитировать</button>'+'</td></tr>'
                    }
                }
                let div_menu = document.getElementById('table_alarm_message');
                div_menu.innerHTML = temp_string;
                $('#alarm_message').show();
}



//Функция квитирования аварии
function alarm_confirmation(button,id,number,device){    
    button.disabled=true;
    let qwery = '/alarm_ack/?id='+id;
    get_data_to_server(qwery,null,null);
}


//Функция квитирования всех аварий
function alarm_confirmation_all(){ 
    var qwery = '/alarm_ack_all/';
    let callback = function(response){alarm_message_close(response)};
    get_data_to_server(qwery,callback,null);
}



function alarm_message_close(){
                 
        		$('#alarm_message').hide();

}


function universalTableBuilder(selector,selector1){    
    var head;
    var body;
    head= document.querySelectorAll(selector)[0];    
    if(document.querySelectorAll(selector1)[0]!=undefined){
        body = document.querySelectorAll(selector1)[0].children[0];
        for (var i = 0; i < body.childElementCount; i++) {            
            head.children[i].style.width=""+(body.children[i].clientWidth)+"px";
        }
    }                
}

function printContentOfDifferentVindows(targetDivName){

    var temp=document.getElementById(targetDivName);    
    
    var temp2=temp.children[0];//header element
    var temp3=temp.children[1].children[0].children[0].innerHTML;
    //Create first row    
    var tempStringTr="<tr>"
    for (var i = 0; i < temp2.childElementCount; i++) {                
            tempStringTr=tempStringTr+"<td>"+temp2.children[i].innerText+"</td>";
        }
        tempStringTr=tempStringTr+"</tr>";
    var param='width=800, height=900, top=100, left=100, resizable=no';    
    win = window.open("", "_blank", param);
    win.document.open();
    
    var tempScript="<script>window.print();window.close()</script>"
    var prtCSS = '<link rel="stylesheet" href="/static/admin/css/printer.css" type="text/css" />'+'<table id="table_rchiv_message">'+tempStringTr+temp3+'</table>'+tempScript;
    win.document.write(prtCSS);
    
    win.document.close();
    win.focus();
    

}