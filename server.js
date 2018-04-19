var fs 				= require('fs'); 							//работа с файловой системой
var WebSocketServer = new require('ws'); 						//сокет сервер
var express 		= require('express'); 						//сервер
var bodyParser 		= require('body-parser');
var cookieParser 	= require('cookie-parser');
var session 		= require('express-session');
var app 			= express(); 								//создаём Express-приложение
var ports			= 80;										//создаём порт

var knex = require('knex')({									//построитель запросов к базе данных
  client: 'mysql',
  connection: {
    //host 	 : '192.168.15.22',
    host 	 : 'localhost',
    user 	 : 'e_holod',
    password : '12345',
    database : 'e_holod'
  }
});

var usersStore={}

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


var her='/start/static';
var her2='/control/static';
var pizda='./start/index.html';
var pizda2='./control/index.html';


app.use("/static", express.static(__dirname + her));
app.use("/static", express.static(__dirname + her2));

app.use(cookieParser());
app.use(session({
  secret: "her pizda jopa",  		
        key: "cid",
        cookie: {
            path: "/",
            httpOnly: false,
            maxAge: null
        }
}));
app.all(/[^/|^login]/,(req, res, next) => {
    console.log('coocies',req.cookies.cid);
    console.log('userStorage',usersStore);

    if(req.cookies.cid in usersStore){
    	console.log('app.all/io_command/');
		next();
	}else{
		console.log('app.all/io_command/= false');					
		let telegramm={'type':500,'message':'нет данных','data':[]};			
		res.send(JSON.stringify(telegramm));		
	}		
  // next();
})

app.get('/', function(req, res) {
		console.log('попытка включения');
		if(req.cookies.cid in usersStore){
			console.log('app.get/= true');
			res.sendfile(pizda2);
		}else{
			console.log('app.get/= false');
			res.sendfile(pizda);
		}				
		
});

app.post('/login/', function(req, res) {
		//knex.table('users').where({login:req.body.login,hash:}).select('control')
		knex.table('users').where('login',req.body.login).select('control')
		.then(function(rows) {
			console.log(rows);
			//console.log(rows[0]['control']); 
			if(rows.length>0){
				//pizda="./control/index.html"
				usersStore[req.cookies.cid]={user:rows[0].control,websocket:null}			
				res.send('ok');
			}else{
				//res.send('huy');
				res.redirect('/')
			}
			
		})			
	
});

require('./app/routes')(app, knex);								//передаем в модуль экземпляр объекта или ссылку на него

app.listen(ports, () => {										// запускаем сервер на порту 80
  console.log('We are live on ' + ports);						// отправляем сообщение
});

//--------------------------------------------------------------------------------------------------


var webSocketServer = new WebSocketServer.Server({port: 8088});	// WebSocket-сервер на порту 8088
require('./app/socketRoutes')(webSocketServer, knex);







                