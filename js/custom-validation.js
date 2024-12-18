function clearconsole() { 
  console.log(window.console);
  if(window.console || window.console.firebug) {
   console.clear();
  }
}



var err = jQuery.noConflict();

err('#submit').removeAttr('disabled');
	jQuery.validator.addMethod(
	'text_only',
	function (value) { 
	return /^[a-zA-Z ]*$/.test(value); 
	},  
	'<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter Valid Character Only!</span>'
	);
	
	
	jQuery.validator.addMethod(
	'check_date',
	function(value){
	return /^[0-9\- ]*$/.test(value);
	},
	'<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter Valid Alphanumeric Character Only!</span>'
	);
	
	jQuery.validator.addMethod(
	'textnumber_only',
	function (value) { 
	return /^[a-zA-Z0-9,. ]*$/.test(value); 
	},  
	'<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter Valid Alphanumeric Character Only!</span>'
	);
	
	jQuery.validator.addMethod(
	'valid_charonly',
	function (value) { 
	return /^[a-zA-Z0-9,.\-)( ]*$/.test(value); 
	},  
	'<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter Valid Alphanumeric Character Only!</span>'
	);

	jQuery.validator.addMethod(
	'accept_charsemail',
	function (value) { 
	return /^[A-Za-z0-9@._]*$/.test(value); 
	},  
	'<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter Valid Email Address!</span>'
	);


	err("#chckform1").validate({
		rules: {
			paymod: {
				required: true
			},
			down_payment: {
				required: true,
				number: true,
			},
			no_of_month: {
				required: true,
				number: true,
				max:24
			},
			fname: {
				required: true,
				text_only: true
			},
           	lname: {
				required: true,
				text_only: true
			},
			email: {
				required: true,
				email: true,
				accept_charsemail: true
			},
		   phone: {
				required: true,
				number: true,
			},
           billing_address: {
				required: true,
				valid_charonly: true,
			},
		 selling_address: {
				required: true,
				valid_charonly: true,
			},
			 city: {
				required: true,
				valid_charonly: true,
			},
			 country: {
				required: true,
				valid_charonly: true,
			},
			postcode: {
				required: true,
				number: true,
			}
				
					
		},	
		messages: {
			paymod: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px; margin-top:0px;">Please Select the Payment Mode!</span>',
			},
		   down_payment: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px; margin-top:0px;">Please enter the EMI Amount!</span>',
				number: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter Number Only!</span>'
			},
			no_of_month: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px; margin-top:0px;">Please enter the No of Months!</span>',
				number: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter Number Only!</span>',
				max: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter Maximum 24 Month!</span>'
			},
			fname: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px; margin-top:0px;">Please Enter the First Name!</span>',
				text_only: '<span style="font-size:12px; color:#F86F6F; line-height:20px;  margin-top:0px;">Please Enter Character!</span>'
			},
			lname: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px; margin-top:0px;">Please Enter the Last Name!</span>',
				text_only: '<span style="font-size:12px; color:#F86F6F; line-height:20px;  margin-top:0px;">Please Enter Character!</span>'
			},
			email: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter the Email!</span>',
				email: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter Valid Email Id!</span>'
			},
			phone: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter the Phone Number!</span>',
				number: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter the Valid Phone Number!</span>'
			},	
			billing_address: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter the Billing Customer!</span>'
			},
			selling_address: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter the Selling Address!</span>'
			},
			city: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter the City!</span>'
			},
			country: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Select the Country!</span>'
			}	,
			postcode: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter the Postcode!</span>',
				number: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter the Valid Number!</span>'
			}	
		},
		
		
/*		submitHandler: function(form) {
		

			err('#succ-message').hide();
			err('#err-message').hide();
		
			
			err.ajax({
				url: "cart_check.php",
				type: "POST",
				data: err(form).serialize(),
				beforeSend:function(){
					err('#submit').after('<br />').attr('disabled','disabled');
			 	 },
				success: function(response) {
							response=jQuery.parseJSON(response);
							err('.rental-book-area img.loader').fadeOut('slow',function(){err(this).remove()});
							$("#chckform1")[0].reset();
							
							
							if(response.internal=='1' && response.msgtype<3)
							{
								if(response.msg=="yes")
								{
								document.getElementById('succ-message').innerHTML = "Thank you.We will contact you soon.";
								err('#succ-message').slideDown('slow');
								}
								else if(response.msg=="no")
								{
								document.getElementById('err-message').innerHTML = "Error Occured, Please Try Again Later";
								err('#err-message').slideDown('slow');
								}
								
								
							 	//err('.contact-info').slideUp('slow');
							} 
							else
							{
							document.getElementById('err-message').innerHTML = "Error Occured, Please Try Again Later";
							err('#err-message').slideDown('slow');
							}  
							
							err('#submit').removeAttr('disabled');
							clearconsole();
						 }         
				 });
				 

			
		 }*/
		
		
		
		
		
		
	});

	err("#contactform").validate({
		rules: {
			cname: {
				required: true,
				text_only: true
			},
			company: {
				required: true,
			},
			cemail: {
				required: true,
				email: true,
			},
			caddress: {
				required: true
			},
			cmessage: {
				required: true
			}
					
		},	
		messages: {
			cname: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px; margin-top:0px;">Please Enter Your Name!</span>',
				text_only: '<span style="font-size:12px; color:#F86F6F; line-height:20px;  margin-top:0px;">Please Enter Character!</span>'
			},
		   company: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px; margin-top:0px;">Please Enter Company Name!</span>',
			},
			cemail: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter the Email!</span>',
				email: '<span style="font-size:12px; color:#F86F6F; line-height:20px;">Please Enter Valid Email Id!</span>'
			},
			caddress: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px; margin-top:0px;">Please Enter Your Address!</span>',
			},
			cmessage: {
				required: '<span style="font-size:12px; color:#F86F6F; line-height:20px; margin-top:0px;">Please Enter Your Comments!</span>',
			}
		},
		
		
		submitHandler: function(form) {
		

			err('#succ-message').hide();
			err('#err-message').hide();
		
			
			err.ajax({
				url: "contact_check.php",
				type: "POST",
				data: err(form).serialize(),
				beforeSend:function(){
					err('#csubmit').after('<br />').attr('disabled','disabled');
			 	 },
				success: function(response) {
							response=jQuery.parseJSON(response);
							err('.rental-book-area img.loader').fadeOut('slow',function(){err(this).remove()});
							$("#contactform")[0].reset();
							
							
							if(response.internal=='1' && response.msgtype<3)
							{
								if(response.msg=="yes")
								{
								document.getElementById('succ-message').innerHTML = "Thank you.We will contact you soon.";
								err('#succ-message').slideDown('slow');
								}
								else if(response.msg=="no")
								{
								document.getElementById('err-message').innerHTML = "Error Occured, Please Try Again Later";
								err('#err-message').slideDown('slow');
								}
								
								
							 	//err('.contact-info').slideUp('slow');
							} 
							else
							{
							document.getElementById('err-message').innerHTML = "Error Occured, Please Try Again Later";
							err('#err-message').slideDown('slow');
							}  
							
							err('#submit').removeAttr('disabled');
							clearconsole();
						 }         
				 });
				 

			
		 }
		
		
	});
