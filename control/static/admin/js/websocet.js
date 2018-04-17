var socket;

const socketMessageListener = (event) => {
  //console.log(event.data);
  var newData=JSON.parse(event.data);
  if(newData.identificator==="status"){	
  		worker2.postMessage([global_object_status,newData.data]);
	}
	if(newData.identificator==="menu"){	
	  		//worker2.postMessage([global_object_status,newData.data]);
	  		//console.log(newData);
        menu_kreator(newData);
	}
  if(newData.identificator==="update"){    
    location.reload(true);
  }

};

const socketOpenListener = (event) => {
  console.log('Connected');
  //socket.send('hello');
};

const socketCloseListener = (event) => {
  if (socket) {
    console.error('Disconnected.');
  }
  //socket = new WebSocket('ws://'+window.location.host+':8088',''+document.cookie.split('=')[1]);
  socket = new WebSocket('ws://'+window.location.host+':8088');
  socket.addEventListener('open', socketOpenListener);
  socket.addEventListener('message', socketMessageListener);
  socket.addEventListener('close', socketCloseListener);
};

//socketCloseListener();

/*// for testing
setTimeout(()=>{
  socket.close();
},5000);*/