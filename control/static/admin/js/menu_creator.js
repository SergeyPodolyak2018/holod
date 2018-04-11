/*Create a buttons fore menu*/

function menu_kreator(data){  
  var menu_struktura=data.data;
  var temp_string='';
  console.log(menu_struktura);

  //Check object empty or not
  if(Object.keys(menu_struktura).length!=0){
     for (let i in menu_struktura){          
            temp_string=temp_string+'<p class="button_menu"><button ' +
                ' class="modal_box_btn" onclick="'+menu_struktura[i].func+
                '(\''+data.bufer.name+'\','+menu_struktura[i].command+
                ')" style="width:150px;margin:0;width:150px; color:'+menu_struktura[i].color+
                '!important;">'+menu_struktura[i].name+'</button></p>'          
    }                  
    let div_menu = document.getElementById('menu');                    
    objectMenuManager.insertButtons(temp_string);
    objectMenuManager.show(data.bufer.X,data.bufer.Y);
  }     
}

