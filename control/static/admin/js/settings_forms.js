function add_equipment_open(name){
    document.getElementById('add_equipment').style.display='block';
    let form = document.forms['form_add_equipment'];
    form.elements["NameShort"].value =name;
}

function add_equipment_close(){
    document.forms['form_add_equipment'].reset();
    document.getElementById('add_equipment').style.display='none';
}

function add_equipment_add(){
    
    let form        = document.forms['form_add_equipment'];
    let body        = JSON.stringify(formToJSON(form.elements));
 	let url_string  = '/device_add_bd/';

 	post_data_to_server(url_string,body,null,null);

    add_equipment_close();
}

const formToJSON = elements => [].reduce.call(elements, (data, element) => {  
  data[element.name] = element.value;
  return data;
}, {});