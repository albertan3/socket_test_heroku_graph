var socket = io();

socket.on('make_purchase', function(username){
alert("Thank you for your purchase");
});

//make purchase

function makePurchase(){
  socket.emit('make_purchase');
}
