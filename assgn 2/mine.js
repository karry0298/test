// $('#img1').on({
//     'click': function(event){
//         $('img').attr('src','images/2.jpg');
//     }
// });

$('#checkPin').click(function(event) 
{


$.getJSON('http://anyorigin.com/go?url=https%3A//nginx%3AP1Yd3MF0P@tshirtpartner.com/orders/pincode%3Fpincode%3D400002&callback=?', 
	function(data){
	console.log(data);
});
	
});


//  $.getJSON('https://allorigins.me/get?url=https%3A//nginx%3AP1Yd3MF0P@tshirtpartner.com/orders/pincode%3Fpincode%3D400002&callback=?', function(data){
// 	alert(data.contents);
// });





// $.ajax({
//     url: 'http://anyorigin.com/go?url=https%3A//tshirtpartner.com/orders/pincode%3Fpincode%3D400095&callback=?',
//     type: 'GET',
//     data: $(this).serialize(),
//     username: "nginx", 
//     password: "P1Yd3MF0P",
//     success: function(data)
//     {
//        alert("Success");
//     },
// });


// $.getJSON('https://www.whateverorigin.org/get?url=' + encodeURIComponent('https://nginx:P1Yd3MF0P@tshirtpartner.com/orders/pincode?pincode='
// 	 	+"400069") + '&callback=?', function(data){
// 	alert(data.contents);

// $.getJSON('http://anyorigin.com/go?url=https%3A//tshirtpartner.com/orders/pincode%3Fpincode%3D400095&callback=?', function(data){
// 	$('#output').html(data.contents);
// });



// .click(function(event){
// //         $('img').attr('src','images/2.jpg');
// //       });


// $.ajax({

//     url: "https://tshirtpartner.com/orders/pincode?pincode="+$('#pincode').val(),
//     type: 'GET',
//     crossDomain: true,
//     dataType: 'jsonp',
//     success: function() { alert("Success"); },
//     error: function() { alert('Failed!'); },
//    });