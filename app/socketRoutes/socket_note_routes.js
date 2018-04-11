var clients = {};
var menuBottons		= require('../../testQuery/takeMenuButtons');

module.exports = function(cocket, db,store) {	

	cocket.on('connection', function(ws,req) {
	/*var cookie_string = ws.request.headers.cookie;
        cookies = cookie.parse(cookie_string);*/
    //console.log("куки бля " + cookies);
    let ip = req;
     console.log("куки бля " + ip);

     //----------------------------   
	let id = Math.random();										//личный идентификатор соединения хранится в замыкании
	clients[id] = ws;
	console.log("новое соединение " + id);
	console.log(ws.protocol);
	//-----------------------------------------------------
	ws.on('message', function(message) {
		console.log('получено сообщение ' + message);
		let tempParseMessage=JSON.parse(message);
		if(tempParseMessage.identificator==="get_menu_buttons"){			
			let tempObjet={};
			tempObjet.data=menuBottons.getButtons(tempParseMessage.data);
			tempObjet.identificator="menu";
			tempObjet.bufer=tempParseMessage.bufer;			
			clients[id].send(JSON.stringify(tempObjet));
		}		
	});

	ws.on('close', function() {
		console.log('соединение закрыто ' + id);
		delete clients[id];
  	});
});

//Циклически отдавать всем подключениям состояние объектов
setInterval(function() {
		let tempObjet={}
		let tempObjet2={}
		let query=require('../../testQuery/status');		
		tempObjet.data=query.jsontable;
		tempObjet.identificator="status";
		/*tempObjet2.data=query.jsontable;
		tempObjet2.identificator="her";*/
		let a=JSON.stringify(tempObjet);
		//let b=JSON.stringify(tempObjet2);			
		for (var key in clients) {
	      clients[key].send(a);
	      //clients[key].send(b);
	   	}
}, 2000);




};