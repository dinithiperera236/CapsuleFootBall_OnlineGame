const socket = io('http://localhost:3000');//To initialize the connection between the client and the server 

socket.on('serverToClient', (data) => {  
    alert(data);

})