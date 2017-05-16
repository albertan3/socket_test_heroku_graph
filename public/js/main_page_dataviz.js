var socket = io();
var _r = 0, _g = 0, _b = 0;

//var availUsers ={"first_user":"avail", "sec_user":"avail"};
var myuser_id= "";

var syncInputVal = function(msg){

  $.each(msg,function(key,value){
    window["_" + key] = value;
    $("input[data-id='"+key+"']").val(value);
    console.log(key,value);
  });

}

socket.on('make_purchase', function(msg){


$("#your_feeback").append("<p >New purchase of Duty Free lipstick for $40 by 44 year old.</p>");
 

  /*var data = [
			{ label: "Alchohol sales",  data: 10},
			{ label: "Duty Free sales",  data: 60},
			{ label: "Hotels",  data: 90},
			{ label: "Car Rentals",  data: 70},
			{ label: "Flight Tickets",  data: 80},
			{ label: "Other",  data: 110}
		];*/

    var placeholder = $("#placeholder");
			placeholder.unbind();

			$.plot(placeholder, msg, {
				series: {
					pie: { 
						show: true,
						radius: 1,
						label: {
							show: true,
							radius: 3/4,
							formatter: labelFormatter,
							background: { 
								opacity: 0.5,
								color: "#000"
							}
						}
					}
				},
				legend: {
					show: false
				}
			});

			setCode([
				"$.plot('#placeholder', data, {",
				"    series: {",
				"        pie: { ",
				"            show: true,",
				"            radius: 1,",
				"            label: {",
				"                show: true,",
				"                radius: 3/4,",
				"                formatter: labelFormatter,",
				"                background: { ",
				"                    opacity: 0.5,",
				"                    color: '#000'",
				"                }",
				"            }",
				"        }",
				"    },",
				"    legend: {",
				"        show: false",
				"    }",
				"});"
			]);

   
});

$(function(){

  //socket.emit('get_avail_username');


});


//make purchase

function makePurchase(){

  socket.emit('make_purchase');
}
