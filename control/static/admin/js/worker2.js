// Получить сообщение из основного потока 
onmessage = function(event) {
    //console.log(event.data);
get_status(event.data[0],event.data[1]); //Передать в функцию получения статуса предыдущие результаты
}

//Получение статуса от сервера
  function get_status(privius,newData) {

    var new_object={};
    /*var x = new XMLHttpRequest();
    x.open("GET", "/status/", true);
    //Обработка статусов
    x.onload = function (){
        var a=x.responseText;*/
        
        //var b=JSON.parse(newData);
        var b=newData;
        
        var tempObject={};

        var re1 = /f(\d+)/i;
        var re2 = /hl(\d+)/i;
        var re3 = /cam(\d+)/i;
        var re4 = /aircc/i;
        var re5 = /hp/i;
        var re6 = /iv/i;
        var re7 = /airc(\d+)/i;
        var re8 = /co(\d+)/i;
        var re9 = /ve(\d+)/i;
        var re10 = /pug(\d+)/i;
        var re11 = /re(\d+)/i;
        var re12 = /cam_con/i;
        var re13 = /comp_con/i;
        




        for(let i in b.holod_db){
            let tempName='';
            if(typeof(b.holod_db[i])=="object" && i.match(re1)){
                let tempFlor=b.holod_db[i];                
                tempName=tempName+'F'+i.match(re1)[1];
                tempObject['flor'+i.match(re1)[1]]={};

                for(let j in tempFlor){                                 
                    if(typeof(tempFlor[j])=="object" && j.match(re2)){
                        let localName='H'+j.match(re2)[1];
                        tempObject['flor'+i.match(re1)[1]][tempName+'-'+localName]=tempFlor[j];
                    }

                    if(typeof(tempFlor[j])=="object" && j.match(re8)){
                        let localName='S'+j.match(re8)[1];
                        tempObject['flor'+i.match(re1)[1]][tempName+'-'+localName]=tempFlor[j];
                    }
                    if(typeof(tempFlor[j])=="object" && j.match(re9)){
                        let localName='R'+j.match(re9)[1];
                        tempObject['flor'+i.match(re1)[1]][tempName+'-'+localName]=tempFlor[j];
                    }
                    if(typeof(tempFlor[j])=="object" && j.match(re10)){
                        let localName='P'+j.match(re10)[1];
                        tempObject['flor'+i.match(re1)[1]][tempName+'-'+localName]=tempFlor[j];
                    }
                    if(typeof(tempFlor[j])=="object" && j.match(re11)){
                        let localName='J'+j.match(re11)[1];
                        tempObject['flor'+i.match(re1)[1]][tempName+'-'+localName]=tempFlor[j];
                    }
                    if(typeof(tempFlor[j])=="object" && j.match(re13)){
                        let localName='M1';
                        tempObject['flor'+i.match(re1)[1]][tempName+'-'+localName]=tempFlor[j];
                    }

                    if(typeof(tempFlor[j])=="object" && j.match(re3)){
                        let tempCam=tempFlor[j];
                        let localName='B'+j.match(re3)[1];                                              
                        tempObject['flor'+i.match(re1)[1]][tempName+'-'+localName]={};
                        for (let k in tempCam) {                            
                            if(typeof(tempCam[k])=="object" && k.match(re12)){
                                tempObject['flor'+i.match(re1)[1]][tempName+'-'+localName]=tempCam[k]; //определить что это управление камерой
                            }
                            if(typeof(tempCam[k])=="object" && k.match(re5)){
                                tempObject['flor'+i.match(re1)[1]][tempName+'-'+localName+'-'+'H'+1]=tempCam[k]; //определить что это нагреватель в камере
                            }
                            if(typeof(tempCam[k])=="object" && k.match(re6)){
                                tempObject['flor'+i.match(re1)[1]][tempName+'-'+localName+'-'+'G'+1]=tempCam[k]; //определить что это клапан в камере
                            }
                            if(typeof(tempCam[k])=="object" && k.match(re7)){
                                tempObject['flor'+i.match(re1)[1]][tempName+'-'+localName+'-'+'C'+k.match(re7)[1]]=tempCam[k]; //определить что это охладитель в камере
                            }
                        }
                    }
                }
            }
        }

        for(let i in tempObject){
            new_object[i]={};
            if(i in privius){
                for(j in tempObject[i]){
                    if(JSON.stringify(tempObject[i][j])!==JSON.stringify(privius[i][j])){
                        new_object[i][j]=tempObject[i][j];
                    }
                }               
            }else{
                new_object[i]=tempObject[i]; //если нет свойства добавить его (это для перевого вызова)
               }
        }

        postMessage([new_object,tempObject]);
/*    }
        x.timeout = 3000;
        x.send(null);*/
    }