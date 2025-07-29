$(document).ready(function(){	
			function round_zero_decimal_digits(num1){
				return Math.round(parseFloat(num1)) ;
			}
			function round_2_digits(num1){
				return Math.round( parseFloat(num1) * 100 ) / 100;
			}
			function numberWithCommas(x) {
				return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
			
			function group_price_calculate(opt,multiplier,markup,surcharge,input_price){
				let cost_price = 0;
				let retail_price = 0;
				if( opt == "C"){
					cost_price = round_2_digits( input_price * surcharge );
					retail_price = round_2_digits( cost_price * markup  ) ;
				}else{
					cost_price = round_2_digits( input_price * surcharge * multiplier);
					retail_price = round_2_digits( cost_price * markup  ) ;
				}
				
				return [cost_price,retail_price];
				
			}
			
			
			/*--------------------- opening and closing the specific sectiosn -------------------------*/
			
			  jQuery('#acessories_heading_div').click(function() {
				$('#acessories').slideToggle(500); // 500ms for the slide effect
			  });
			  
			  jQuery('#specialities_heading_div').click(function() {
				$('#speciality_items').slideToggle(500); // 500ms for the slide effect
			  });
		


/*--------------------- opening and closing the specific sectiosn -------------------------*/
			
			const auto_delivery_charges = [
				{ minPrice: 0, maxPrice: 49.99, charge: 0 },
				{ minPrice: 50, maxPrice: 499.99, charge: 75 },
				{ minPrice: 500, maxPrice: 2999.99, charge: 150 },
				{ minPrice: 3000, maxPrice: 6999.99, charge: 300 },
				{ minPrice: 7000, maxPrice: 19999.99, charge: 500 },
				{ minPrice: 20000, maxPrice: 39999.99, charge: 750 },
				{ minPrice: 40000, maxPrice: 59999.99, charge: 1000 },
				{ minPrice: 60000, maxPrice: 79999.99, charge: 1200 },
				{ minPrice: 80000, maxPrice: 99999.99, charge: 1500 },
				{ minPrice: 100000, maxPrice: Infinity, charge: 2000 }
			];
			
			function calculateDeliveryFee(orderPrice) {
				let fee = 0;
				jQuery.each(auto_delivery_charges, function(index, range) {
					if (orderPrice >= range.minPrice && orderPrice <= range.maxPrice) {
						fee = range.charge;
					}
				});
				return fee;
			}
	
	
			
			var Alphabet_Array = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
			let newfield = '';
			var priceFieldHtml = '<div class="row input_field">' + 
					'<div class="col-md-5">' + 
						'<label>' + 
							'Group B' + 
						'</label>' + 
						'<div class="input_field_n_dollar">' + 
							'<input type="text" id="" class="number_req form-control description" name ="" value=""/>' + 
						'</div>' + 
					'</div>' + 
					'<div class="col-md-3">' + 
						'<label>' + 
							'Price' + 
						'</label>' + 
						'<div class="input_field_n_dollar">' + 
							'<span class="dollar_sign"> $ </span>' + 
							'<input type="text" id="" class="number_req form-control list_price" name ="" value=""/>' + 
						'</div>' + 	
					'</div>' + 
					'<div class="col-md-1 plus_minus_div"> <label>&nbsp;</label> <button type="button" class="minus"> - </button></div>' + 
				'</div>';
				
				function acessories_markup_items(num1){
					
					return '<div class="row input_field acessories_markup_item_fields">' +
						'<div class="col-md-4">' +
							'<label>' +
								'Accessories' +
							'</label>' +
							'<div class="input_field_n_dollar">' +
								'<input type="text" id="acessories_markup_item_' + num1  + '" class="number_req form-control acessories_markup_item" name ="acessories_markup_items_' + num1  + '" value="Accessory ' + num1  + '"/>' +
							'</div>	' +
						'</div>' +
						'<div class="col-md-3">' + 
							'<label>' +
								'Cost' +
							'</label>' +
							'<div class="input_field_n_dollar">' +
								'<span class="dollar_sign"> $ </span>' +
								'<input type="text" id="acessories_price_item_' + num1  + '" class="number_req form-control acessories_price_item" name ="acessories_price_item_' + num1  + '" value="" />' +
							'</div>	' +
						'</div>' +
						'<div class="select_field col-md-4 acessories_markup_main_units">' +
							'<label>' +
								'Upcharge' +
							'</label>' +
							'<select class="acessories_markup_select" id="acessories_markup_select' + num1  + '" name ="acessories_markup_select' + num1  + '">' +
								'<option name="" value="1.5"> 50%  </option>' +
								'<option name="" value="1.6"> 60% </option>' +
								'<option name="" value="1.7"> 70% </option>' +
								'<option name="" value="1.8"> 80% </option>' +
								'<option name="" value="1.9"> 90% </option>' +
								'<option name="" value="2.0" selected> 100% </option>' +
								'<option name="" value="2.15"> 115% </option>' +
							'</select>' +								
						'</div>' +
						'<div class="col-md-1 plus_minus_div"><label>&nbsp;</label><button type="button" class="btn_minus acessories_markup_minus"> - </button></div>' +
					'</div>'
				}
				
				/*--------------- Cabinet  Information ---------------*/
				
				function priceField(num1){
					
					return '<div class="row input_field">' + 
					'<div class="col-md-3">' + 
						
						'<div class="input_field_n_dollar">' + 
							'<input type="text" id="" class="number_req form-control description" name ="" value="Cabinets"/>' + 
						'</div>' + 
					'</div>' +		
					
					'<div class="col-md-4">' + 
							'<div class="select_field main_units">' + 
								
								'<select id="main_unit" name ="main_unit" class="main_unit_dropdown" required="required">' + 
									'<option name="" value="">Please Select Vendor</option>' + 
									'<option name="Adornus" value="0.34" data-upcharge="215" data-surcharge="1"> Adornus </option>' + 
									'<option name="Bernier" value="0.51" data-upcharge="210" data-surcharge="1"> Bernier Cabinet </option>' + 
									'<option name="Luxor" value="0.382" data-upcharge="210" data-surcharge="1"> Luxor Cabinetry </option>' + 
									'<option name="CNC" value="0.25" data-upcharge="215" data-surcharge="1" > CNC Cabinetry </option>' + 
									'<option name="CNG" value="0.34" data-upcharge="215" data-surcharge="1"> CNG Cabinets </option>' + 
									'<option name="cubitac" value="0.2688" data-upcharge="215" data-surcharge="1"> Cubitac Cabinet </option>' + 
									'<option name="cubitac_basic" value="0.2592" data-upcharge="215" data-surcharge="1"> Cubitac Basic </option>' + 
									'<option name="DC" value="0.476" data-upcharge="210" data-surcharge="1.009"> DC Cabinetry </option>' + 
									'<option name="Executive" value="0.552" data-upcharge="210" data-surcharge="1.009"> Executive Cabinets </option>' + 
									'<option name="Fabuwood" value="0.349" data-upcharge="215" data-surcharge="1"> Fabuwood </option>' + 														
									'<option name="HansKrug" value="1.0" data-upcharge="210" data-surcharge="1"> Hans Krug </option>' + 
									'<option name="TeddWood_lm_ll" value="0.552" data-upcharge="210" data-surcharge="1.009"> TeddWood  (LM & LL) </option>' + 
									'<option name="TeddWood_custom" value="0.459" data-upcharge="210" data-surcharge="1.009"> TeddWood  (Custom) </option>' + 
									'<option name="Cuisine_ideale" value="0.4" data-upcharge="210" data-surcharge="1"> Cuisine Ideale </option>' + 

								'</select>' + 
							'</div>' + 
						'</div>' + 


						'<div class="col-md-2">' + 
							
							'<div class="input_field_n_dollar">' + 
								'<span class="dollar_sign"> $ </span>' + 
								'<input type="text" id="" class="number_req form-control list_price" name ="" value=""/>' + 
							'</div>' + 	
						'</div>' + 
					
					'<div class="col-md-2">' +
							
							'<div class="flex_subdiv">' +
								'<label class="btn btn-secondary btn_l_c active" for="option1" >' +
									'<input type="radio" class="btn-check list_price_option" name="list_price_options' + num1  + '" autocomplete="off" value="L" checked="checked" />' +
									'LIST' +
								'</label>' +
								
							   '<label class="btn btn-secondary btn_l_c " for="option2">' +
									'<input type="radio" class="btn-check list_price_option" name="list_price_options' + num1  + '" autocomplete="off" value="C" />' +
									'COST' +
								'</label>' +

								
							'</div>' +
						'</div>' +
					
					
					
					'<div class="col-md-1 plus_minus_div"> <button type="button" class="minus"> - </button></div>' + 
				'</div>';
					
				}
				
				/*--------------- specialityItem row html ---------------*/
				
				function specialityItem(sp_num1){
					
					return '<div class="row input_field speciality_item_fields flex_row">' +
						'<div class="col-md-3 flex_row just_start">' +
							
							'<div class="input_field_n_dollar">' +
								'<input type="text" id="speciality_item_1" class="number_req form-control speciality_item description" name ="speciality_item_1" value="Cabinets"/>' +
							'</div>	' +
						'</div>' +
						'<div class="col-md-4">' +
							'<div class="input_field_n_dollar">' +
								'<span class="dollar_sign"> $ </span>' +
								'<input type="text" id="speciality_item_1" class="number_req form-control speciality_item_price " name ="speciality_item_price_1" value="" placeholder="Price"/>' +
							'</div>	' +
						'</div>' +
						'<div class="select_field col-md-4 speciality_main_units">' +
							
							'<select class="speciality_markup_select" name ="speciality_markup_select" id="speciality_markup_select">' +
								'<option name="" value=""> Upcharge </option>' +
								'<option name="" value="1.5"> 50% </option>' +
								'<option name="" value="1.6"> 60% </option>' +
								'<option name="" value="1.7"> 70% </option>' +
								'<option name="" value="1.8"> 80% </option>' +
								'<option name="" value="1.9"> 90% </option>' +
								'<option name="" value="2.0" > 100% </option>' +
								'<option name="" value="2.15" selected> 115% </option>' +
							'</select>' +								
						'</div>' +
						'<div class="col-md-1 plus_minus_div"> <button type="button" class="btn_minus speciality_item_minus"> - </button></div>' + 
					'</div>';
					
				}
				
				
				
				/*--------------- acessories row html ---------------*/
				
				function accessories_dropdown(ac_d_num1){
					return '<div class="row input_field speciality_item_fields">' +
						'<div class="col-md-3">' +
							'<div class="input_field_n_dollar">' +
								'<input type="number" id="acessories_qty_1" class="number_req form-control acessories_qty" name ="acessories_qty_1" value="1" placeholder="Qty"/>' +
							'</div>	' +
						'</div>' +
						'<div class="col-md-4">' +
							
							'<div class="input_field_n_dollar">' +
								'<span class="dollar_sign"> $ </span>' +
								'<input type="text" id="acessories_price_item" class="number_req form-control acessories_price_item" name ="acessories_price_item" value="" placeholder="Cost"/>' +
							'</div>	' +
						'</div>' +
						'<div class="select_field col-md-4 acessories_markup_main_units">' +
							
							'<select class="acessories_markup_select" name ="acessories_markup_select" id="acessories_markup_select">' +
								'<option name="" value=""> Upcharge </option>' +
								'<option name="" value="1.5"> 50% </option>' +
								'<option name="" value="1.6"> 60% </option>' +
								'<option name="" value="1.7"> 70% </option>' +
								'<option name="" value="1.8"> 80% </option>' +
								'<option name="" value="1.9"> 90% </option>' +
								'<option name="" value="2.0" selected> 100% </option>' +
								'<option name="" value="2.15"> 115% </option>' +
							'</select>' +								
						'</div>' +
						'<div class="col-md-1 plus_minus_div"><button type="button" class="btn_minus acessories_minus"> - </button></div>' +
					'</div>';
				}
			
			$("#priceCalcForm").validate({
			  rules: {
				// simple rule, converted to {required:true}
				list_price_a: {
					required: true,
					number: true,
					min: 1,
					max: 9999999
				},
				main_unit: {
					required: true,
				},
				
			  }
			});
			
			jQuery('.modification').hide();
			
			var num1 = 0;
			var sp_num1 = 0;
			ac_d_num1 = 0;
			ac_mkup_num1 = 0;
			
			// Getting input radio values  L/C  , taxation etc
			
			jQuery("#priceCalcForm").on("click",".btn_l_c", function(){
				if(jQuery(this).find('input[type="radio"]').hasClass('neutral')) {
					e.preventDefault();
				}
				jQuery(this).parent().find( ".btn_l_c" ).removeClass('active');
				jQuery(this).parent().find('input[type="radio"]').attr("checked",false);
				jQuery(this).addClass('active');
				jQuery( this ).find('input[type="radio"]').attr("checked",true);

			});
			
			var taxation_btn_l_c = 0;
			
			jQuery("#priceCalcForm").on("click",".taxation_btn_l_c", function(){
				if(jQuery(this).find('input[type="radio"]').hasClass('neutral')) {
					e.preventDefault();
				}
				jQuery(this).parent().find( ".taxation_btn_l_c" ).removeClass('active');
				jQuery(this).parent().find('input[type="radio"]').attr("checked",false);
				jQuery(this).addClass('active');
				jQuery( this ).find('input[type="radio"]').attr("checked",true);
				//console.log( jQuery(this).val() );
				//console.log( $(this).find('input[type="radio"]').filter(':checked').val() );
				//console.log($(this).find('input[type="radio"]').val());	
				taxation_btn_l_c = $(this).find('input[type="radio"]').filter(':checked').val();
			});
			
			// creates a new row considering the context
			
			jQuery( ".plus" ).click(function( event ){
				event.preventDefault();
				if (num1 <= 50){
					num1 = num1 + 1;
					newfield = priceField(num1);
					$(this).parent().parent().parent().append(newfield);
				}

			});

			// remove the  row considering the context

			jQuery("#priceCalcForm").on("click",".minus", function(){
				jQuery(this).parent().parent().remove();
				num1 = num1 - 1;
			});
			
			
			jQuery( ".speciality_item_plus" ).click(function( event ){
				event.preventDefault();
				if (sp_num1 <= 50){
					sp_num1 = sp_num1 + 1;
					newfield_specialityItem = specialityItem(sp_num1);
					$(this).parent().parent().parent().append(newfield_specialityItem);
				}
			});

			jQuery("#priceCalcForm").on("click",".speciality_item_minus", function(){
				jQuery(this).parent().parent().remove();
				sp_num1 = sp_num1 - 1;
			});
			
			jQuery( ".acessories_plus" ).click(function( event ){
				event.preventDefault();
				if (ac_d_num1 <= 50){
					ac_d_num1 = ac_d_num1 + 1;
					newfield_accessories_dropdown = accessories_dropdown(ac_d_num1);
					$(this).parent().parent().parent().append(newfield_accessories_dropdown);
				}
			});
			
			
			jQuery( ".acessories_markup_plus" ).click(function( event ){
				event.preventDefault();
				if (ac_mkup_num1 <= 50){
					ac_mkup_num1 = ac_mkup_num1 + 1;
					newfield_accessories_markup = acessories_markup_items(ac_mkup_num1);
					$(this).parent().parent().parent().append(newfield_accessories_markup);
				}
			});
			
			jQuery("#priceCalcForm").on("click",".acessories_markup_minus", function(){
				jQuery(this).parent().parent().remove();
				ac_mkup_num1 = ac_mkup_num1 - 1;
			});

			jQuery("#priceCalcForm").on("click",".acessories_minus", function(){
				jQuery(this).parent().parent().remove();
				ac_d_num1 = ac_d_num1 - 1;
			});
			
			
			var totalCost = 0;
			
			function price_calculator(ship_fee){
				
				// defining variables and getting input values
				totalCost = 0;
				let price = 0;
				let clientPrice = 0;
				let listprice = 0;
				let modificationprice = 0;
				var price_func_arr = [];
				
				var priceInput_Array = [];
				
				let name = jQuery('#main_name').val();  // Deal Owner
				let projectName = jQuery('#project_name').val(); // Project
				let floor_plan = jQuery('#floor_plan').val();
				
				
				//let vendor = Number( jQuery('#main_unit').val() );
				//let upCharge = Number( jQuery('#main_unit option:selected').attr('data-upcharge') )/100;
				
				//let vendorSurcharge = jQuery('#main_unit option:selected').attr('data-upcharge') ? Number( $('#main_unit option:selected').attr('data-surcharge') ) : 0;
				
				// client scale
				let discount =  jQuery('#discount').val() ? Number( $('#discount').val() )/100 : 0;
				
				let shipping =  ship_fee;
				
				let surcharge =  jQuery('#surcharge').val() ? Number( $('#surcharge').val() ) : 0;
				
				let shipping_part =   Number( shipping ); // Number( shipping ) / jQuery('.list_price').length ;
				
				
				
		
		
				if( jQuery('.list_price').length > 1){
					shipping_part =  Number( shipping ) / 2;
				}
				
				
				
				// saving pdf html in variables , which will later be appended in html for pdf print
				
				let print_project_info = '<table id="input_data_table_2" class="table_print_pdf"> ' + 
										'<tr><td class=""> Floor Plan # ' + floor_plan +  ' </td> ' + 
										'<td> Shipping : $' + numberWithCommas(shipping) + ' </td>' +
										'</tr>' + 
										'<tr><td class=""> Name : ' + name +  ' </td>'+
										'<td> Client Scale : ' + $('#discount option:selected').text() + ' </td>' + 
										'</tr>' +  
										'</table><div class="br_line"><br/></div>';
				
				let print_cost_table = '<table id="input_data_table_3" class="table_print_pdf"> ' + 
											'<tr>' + 
												'<td> </td>' +
												'<td>Retail</td>' +
												'<td>List</td>' +
												'<td>Cost</td>' +
												'<td class="pdf_font_small pdf_width_small">Vendor</td>' +
												'<td class="pdf_font_small pdf_width_small">Upcharge</td>' +
												'<td class="pdf_font_small pdf_width_small">Multiplier</td>' +
												'<td class="pdf_font_small pdf_width_small">Surcharge</td>' +
											'</tr>';
											
				//let print_input_data = '<table id="input_data_table_4" class="table_print_pdf">';
				
				
				let print_ind_data = '';
				
				let print_cost_table_sub = '';
				
				
				let cnt1 = 0;
				let modificationtotalPrice = 0;
				
				var vendor , upCharge , vendorSurcharge;
				
				$('.list_price').each(function () {
					
					var list_price_element = jQuery(this).parent().parent().parent();
					
					vendor = Number( list_price_element.find('#main_unit option:selected').val() );
					upCharge = Number( list_price_element.find('#main_unit option:selected').attr('data-upcharge') )/100;
				
					vendorSurcharge = list_price_element.find('#main_unit option:selected').attr('data-upcharge') ? Number( $('#main_unit option:selected').attr('data-surcharge') ) : 0;
				
				
					console.log("main_unit option:selected" , list_price_element.find('#main_unit option:selected').attr('data-surcharge'))
					
					var opt_l_c = list_price_element.find('.list_price_option:checked').val();

					modificationprice = 0;
					price = Number( $(this).val() );
				//	console.log(listprice);
					if( opt_l_c == "L" ){
						listprice = listprice + price;
						var LP_check = '$ ' + numberWithCommas( Number( $(this).val() ) );
						
					}else{
						var LP_check = "N/A";
						listprice = listprice;
					}
				
					//group_price_calculate(opt,multiplier,markup,surcharge,input_price)
					price_func_arr = group_price_calculate(opt_l_c,Number(vendor),Number(upCharge),Number(vendorSurcharge),Number($(this).val()));

					
					price = Number( price_func_arr[0] );
					//console.log(price);
					clientPrice +=  Number( price_func_arr[1] ) - Number( price_func_arr[1] ) * discount;
					totalCost += price;
					//console.log(clientPrice);
					
					print_cost_table_sub +=  '<tr>' + 
												'<td>' + list_price_element.find('.description').val() + ' </td>' +
												'<td> $' + numberWithCommas( round_2_digits( Number( price_func_arr[1] ) - Number( price_func_arr[1] ) * discount + shipping_part + modificationprice ) ) + ' </td>' +
												'<td> ' + LP_check + ' </td>' +
												'<td> $' + numberWithCommas( round_2_digits(price + shipping_part + modificationprice) ) + ' </td>' +
												'<td class="pdf_font_small pdf_width_small"> ' + list_price_element.find('.main_unit_dropdown option:selected').text() + ' </td>' +
												'<td class="pdf_font_small pdf_width_small"> ' + upCharge + ' </td>' +
												'<td class="pdf_font_small pdf_width_small"> ' + vendor + ' </td>' +
												'<td class="pdf_font_small pdf_width_small"> ' + vendorSurcharge + ' </td>' +
											'</tr>';
					
					cnt1++;

					shipping_part = cnt1 > 1 ? 0 : 	shipping_part;
					
				});
				
				
				$('.speciality_item_price').each(function () {
					
					if( jQuery(this).val() ) 
					{
						
						var speciality_item_element = jQuery(this).parent().parent().parent();
						var speciality_item_cost_price = round_2_digits(  Number( jQuery(this).val() ) );
						var speciality_item_upcharge =  Number( speciality_item_element.find('.speciality_markup_select option:selected').val() );
						var speciality_item_retail_price = round_2_digits(  speciality_item_cost_price * speciality_item_upcharge );
							console.log("totalCost" , totalCost);
						totalCost += speciality_item_cost_price;
						clientPrice += speciality_item_retail_price;
	
						print_cost_table_sub +=  '<tr>' + 
													'<td> Speciality item : ' + speciality_item_element.find('.speciality_item').val()  + ' </td>' +
													'<td> $' + speciality_item_retail_price + ' </td>' +
													'<td> N/A </td>' +
													'<td> $' + speciality_item_cost_price + ' </td>' +
													'<td class="pdf_font_small pdf_width_small"> ' + '  ' + ' </td>' +
													'<td class="pdf_font_small pdf_width_small"> '  + speciality_item_upcharge + ' </td>' +
													'<td class="pdf_font_small pdf_width_small"> ' + '  ' + ' </td>' +
													'<td class="pdf_font_small pdf_width_small"> ' + '  ' + ' </td>' +
												'</tr>';
					}
				});
				
				
				/*----------------Acessories Row containing price Markup starts  -------------------------*/
				
				
				let print_acessory_table_header = '';
				let print_acessories_data = '';
				let print_acessory_table_sub = '';				
				
				var acessory_list_price_total = 0;
				var acessory_cost_price_total = 0;
				var acessory_retail_price_total = 0;
				
				/*----------------Acessories Row containing price Markup starts  -------------------------*/
				
				$('.acessories_price_item').each(function () {
					
					if( jQuery(this).val() ) 
					{
						
						var acessories_item_cost_price = round_2_digits(  Number( jQuery(this).val() ) );
						var acessories_item_markup_value = Number( $(this).parent().parent().parent().find('.acessories_markup_select').val() );
						var acessories_item_markup_price = round_2_digits(  Number( acessories_item_cost_price * acessories_item_markup_value ) );
						//console.log('acessories_item_cost_price' , acessories_item_cost_price , 'acessories_item_markup_value' , acessories_item_markup_value , 'acessories_item_markup_price',acessories_item_markup_price);
						
						totalCost += acessories_item_cost_price;
						clientPrice += acessories_item_markup_price;

						print_cost_table_sub +=  '<tr>' + 
													'<td> Accessories </td>' +
													'<td> $' + acessories_item_markup_price + ' </td>' +
													'<td> N/A </td>' +
													'<td> $' + acessories_item_cost_price + ' </td>' +
													'<td class="pdf_font_small pdf_width_small"> '  + ' - ' + ' </td>' +
													'<td class="pdf_font_small pdf_width_small"> '  + acessories_item_markup_value + ' </td>' +
													'<td class="pdf_font_small pdf_width_small"> - </td>' +
													'<td class="pdf_font_small pdf_width_small"> '  + ' - ' + ' </td>' +
												'</tr>';
												
					}
				});
				
				/*
				$('.acessories_dropdown_list').each(function () {
					
					if( jQuery(this).val() ) 
					{
					
						var qty = round_2_digits( jQuery(this).parent().parent().find('.acessories_qty').val() );
						var acessory_cost_price = jQuery(this).val() ? round_2_digits( Number( jQuery(this).val() ) * qty ) : 0;
						var acessory_list_price = jQuery(this).val() ? round_2_digits( Number( jQuery(this).find('option:selected').attr('data-list-price') ) * qty ) : 0;
						var acessory_retail_percent = jQuery(this).val() ? round_2_digits( Number( jQuery(this).find('option:selected').attr('data-retail_percent') ) ) : 0;
						
						var retail_multiplier = 1 - (acessory_retail_percent/100) ;
						
						
						var acessory_retail_price = jQuery(this).val() ? round_2_digits( acessory_list_price * (1 - (acessory_retail_percent/100)) ) : 0;

						listprice = round_2_digits( listprice + acessory_list_price   );
						totalCost += round_2_digits( acessory_cost_price  );
						clientPrice += round_2_digits( acessory_retail_price );
						
						
						acessory_retail_price_total += ( acessory_retail_price );
						acessory_list_price_total += ( acessory_list_price);
						acessory_cost_price_total += ( acessory_cost_price);	

						print_cost_table_sub +=  '<tr>' + 
													'<td> Accessories </td>' +
													'<td> $' + acessory_retail_price + ' </td>' +
													'<td> $' + acessory_list_price + ' </td>' +
													'<td> $' + acessory_cost_price + ' </td>' +
													'<td>' + $(this).find('option:selected').text()  + ' </td>' +
													'<td> '  + ' - ' + ' </td>' +
													'<td> '  + retail_multiplier + ' </td>' +
													'<td> '  + ' - ' + ' </td>' +
												'</tr>';

	
					}
				
				});
				
				*/
				/*
				console.log("totalCost" , totalCost);
				$('.acessories_price_item').each(function () {
					
					if( jQuery(this).val() ) 
					{
						var acessories_price_item_element = jQuery(this).parent().parent().parent();
						var acessories_option_selected = acessories_price_item_element.find('.acessories_dropdown_list option:selected');
						
						
						var acessories_item_cost_price = round_2_digits(  Number( jQuery(this).val() ) );
						var qty = round_2_digits( acessories_price_item_element.find('.acessories_qty').val() );
						
						var acessory_cost_price = acessories_item_cost_price ? round_2_digits( Number( acessories_item_cost_price * qty ) ) : 0;
						
						var acessories_item_upcharge_value = Number( acessories_price_item_element.find('.acessories_markup_select').val() );
						//var acessories_item_upcharge = Number( acessories_price_item_element.find('.acessories_markup_select').val() );
						//var acessories_item_markup_price = round_2_digits(  Number( acessories_item_cost_price * acessories_item_markup_value ) );
						
						
						//console.log('acessories_item_cost_price' , acessories_item_cost_price , 'acessories_item_markup_value' , acessories_item_markup_value , 'acessories_item_markup_price',acessories_item_markup_price);

						var acessory_list_price = acessories_option_selected ? round_2_digits( Number( acessories_option_selected.attr('data-list-price') ) * qty ) : 0;
						var acessory_retail_percent = acessories_option_selected ? round_2_digits( Number( acessories_option_selected.attr('data-retail_percent') ) ) : 0;
						
						var acessory_retail_price = acessories_option_selected ? round_2_digits( acessory_list_price * (1 - (acessory_retail_percent/100)) + (acessory_list_price  * acessories_item_upcharge_value ) ) : 0;
						
						
						//console.log('acessory_list_price' , acessories_option_selected.attr('data-list-price') , acessory_list_price);
						//console.log('acessory_retail_price' , acessories_option_selected.attr('data-retail_percent') , acessory_retail_price);
						
						
						//acessories_item_cost_price = acessories_item_cost_price + acessory_cost_price;
						//acessories_item_markup_price = acessories_item_markup_price + acessory_list_price;
						//acessories_item_retail_price = acessories_item_markup_price + acessory_retail_price;
						
						
						
						var retail_multiplier = 1 - (acessory_retail_percent/100) ;
						
						clientPrice += round_2_digits( acessory_retail_price );
						listprice = round_2_digits( listprice + acessory_list_price   );
						totalCost += round_2_digits( acessory_cost_price  );
						console.log("totalCost" , totalCost);
						print_cost_table_sub +=  '<tr>' + 
													'<td> Acessories </td>' +
													'<td> $' + acessory_retail_price + ' </td>' +
													'<td> $' + acessory_list_price + ' </td>' +
													'<td> $' + acessory_cost_price + ' </td>' +
													'<td> '  + acessories_price_item_element.find('.acessories_dropdown_list option:selected').text() + ' </td>' +
													'<td> '  +  acessories_item_upcharge_value + ' </td>' +
													'<td> '  + retail_multiplier + ' </td>' +
													'<td> '  + ' - ' + ' </td>' +
												'</tr>';
												
					}
				});
				
				*/
				/*----------------Acessories Row containing price Markup end  -------------------------*/
				
				
				
				
				/*
				
				$('.acessories_dropdown_list').each(function () {
					
					if( jQuery(this).val() ) 
					{
					
						var qty = round_2_digits( jQuery(this).parent().parent().find('.acessories_qty').val() );
						var acessory_cost_price = jQuery(this).val() ? round_2_digits( Number( jQuery(this).val() ) * qty ) : 0;
						var acessory_list_price = jQuery(this).val() ? round_2_digits( Number( jQuery(this).find('option:selected').attr('data-list-price') ) * qty ) : 0;
						var acessory_retail_percent = jQuery(this).val() ? round_2_digits( Number( jQuery(this).find('option:selected').attr('data-retail_percent') ) ) : 0;
						
						var acessory_retail_price = jQuery(this).val() ? round_2_digits( acessory_list_price * (1 - (acessory_retail_percent/100)) ) : 0;
					
						listprice = round_2_digits( listprice + acessory_list_price   );
						totalCost += round_2_digits( acessory_cost_price  );
						clientPrice += round_2_digits( acessory_retail_price );
						
						
						acessory_retail_price_total += ( acessory_retail_price );
						acessory_list_price_total += ( acessory_list_price);
						acessory_cost_price_total += ( acessory_cost_price);						
						
						print_acessory_table_sub +=  '<tr>' + 
													'<td>' + $(this).find('option:selected').text() + ' )</td>' +
													'<td> ' + qty + ' </td>' +
												'</tr>';
					}
				
				});
				
				
				if( jQuery('.acessories_dropdown_list').val() ) 
				{
					
					print_cost_table_sub +=  '<tr>' + 
													'<td> Acessories </td>' +
													'<td> $' + numberWithCommas( round_2_digits( acessory_retail_price_total) ) + ' </td>' +
													'<td> $' + numberWithCommas( round_2_digits( acessory_list_price_total)  ) + ' </td>' +
													'<td> $' + numberWithCommas( round_2_digits( acessory_cost_price_total) ) + ' </td>' +
												'</tr>';
												
					print_acessory_table_header +=  '<tr>' + 
													'<td class="text-bold" > Acessories </td>' +
													'<td class="text-bold" > Quantity </td>' +
												'</tr>';
												
												
					print_acessories_data += '<table id="input_data_table_5" class="table_print_pdf">';
					
					
					print_acessories_data += print_acessory_table_header;
					print_acessories_data += print_acessory_table_sub;						
					print_acessories_data += '</table><div class="br_line"><br/></div>';
												
				}
				*/
/*
				print_input_data += '<tr>' + 
										'<td> Vendor : ' + $('#main_unit option:selected').text() + ' </td>' + 
										'<td> Multiplier : ' + $('#main_unit option:selected').val() + ' </td>' + 
										'<td> Surcharges : ' + round_2_digits ( Number ( vendorSurcharge ) * 100 - 100 ) + '% </td>' + 
									'</tr>';
									
				print_input_data += '<tr>' + 
										'<td> Upcharge : ' + jQuery('#main_unit option:selected').attr('data-upcharge') + ' % </td>' + 
										'<td> Client Scale : ' + $('#discount option:selected').text() + ' </td>' + 
										'<td> Shipping : $' + numberWithCommas(shipping) + ' </td>' + 
									'</tr>';				
				
				print_input_data += '</table><div class="br_line"><br/></div>';
*/				
				totalCost = round_2_digits( totalCost + Number(shipping) + Number ( modificationtotalPrice ) ); // + Number(surcharge);
				
				
				
				
				
				//console.log("cost" , totalCost , taxation_btn_l_c);
				
				cost_w_tax = totalCost + taxation_btn_l_c * totalCost * 0.08375;
				
				//console.log(taxation_btn_l_c , totalCost , '0.08375' , totalCost + taxation_btn_l_c * totalCost * 0.08375 , cost_w_tax);
				//console.log("total cost" , cost_w_tax);
				
				clientPrice = round_2_digits( clientPrice + Number(shipping) + Number ( modificationtotalPrice ) ); // + Number(surcharge);
				
				
				print_cost_table += '<tr>' + 
										'<td class="text-bold"> Total </td>' +
										'<td class="text-bold"> $' + numberWithCommas( round_2_digits( clientPrice ) ) + ' </td>' +
										'<td class="text-bold"> $' + numberWithCommas( round_2_digits( listprice ) ) + ' </td>' +
										'<td class="text-bold"> $' +  numberWithCommas( round_2_digits(totalCost) ) + ' </td>' +
										'<td class="pdf_font_small pdf_width_small"> ' + '  ' + ' </td>' +
										'<td class="pdf_font_small pdf_width_small"> ' + '  ' + ' </td>' +
										'<td class="pdf_font_small pdf_width_small"> ' + '  ' + ' </td>' +
										'<td class="pdf_font_small pdf_width_small"> ' + '  ' + ' </td>' +
									'</tr>';
									
				print_cost_table += print_cost_table_sub;
				print_cost_table += '</table><div class="br_line"><br/></div>';				
				
				let profit = round_2_digits(clientPrice - totalCost);
				
				$("#clientPrice").text("$ " + numberWithCommas(clientPrice));
				
				let currentDate = new Date().toLocaleString();
				
				$("#resultsTable").show();
				
				$('html, body').animate({
					scrollTop: $("#resultsTable").offset().top
				}, 1000);
								
				let print_header = '<table class="img_td table_print_1 table_print_pdf" id="table_print_1">' +
										'<tr class="img_td">' +
											'<td><img src="images/logo.png" alt="logo" id="logo_print" class=""/> </td>' +
											'<td class="text-right"><br/> <span id="date">' + 
											currentDate +
											'</span> <br/> <span id="serial_num">' + 
											'Document # 0125' + round_zero_decimal_digits(profit) + '00' + ' </span></td>' +
										'</tr>' +
									'</table>' +
									'<div class="table_print_1">' +
										'<br/>' +
										'<h2>' + projectName +  '</h2>' +
										'<br/>' +
									'</div>';
				
				let notes_textarea = jQuery("#notes_textarea").val();	
				
				let html_notes = '<div class="table_print_1">' +
					'<table id="input_data_table_t_cost"><tr>'+
										'<td><h3>Notes<h3></td>'+
					'<td><h3 class="text-right"> Total cost with tax : $' + numberWithCommas( round_2_digits(cost_w_tax) ) + '</h3></td>' +
					'<tr/></table>'+
										'<p>' +
										notes_textarea +
										'</p>' + 
									'</div>';
					
				let print_notes =  notes_textarea.length > 0 ? html_notes : '';
				
				$('#editor').append(print_header);
				$('#editor').append(print_project_info);
				$('#editor').append(print_cost_table);				
				//$('#editor').append(print_input_data);
				//$('#editor').append(print_acessories_data);
				$('#editor').append(print_notes);
				
			}
			
			
			// perform validation and calculations on click
				
			jQuery( "#price_calc_btn" ).click(function( event ){

				event.preventDefault();
				
				jQuery("#input_data_table_1, #input_data_table_2, #input_data_table_3, #input_data_table_4, #input_data_table_t_cost, #input_data_table_5,  .table_print_1, .br_line").remove();
				
				var validator = $( "#priceCalcForm" ).validate();
					if( ! validator.form() ){
						$('html, body').animate({
							scrollTop: $("body").offset().top
						}, 1000);
						return;

					}
					
					
					
					var ship_v = 0;
					var ship_fee = 0;
					let shippingValue = jQuery('#shipping').val().trim();  // Get value and remove any extra spaces
					if (shippingValue === "") {
						price_calculator(0);
						jQuery("#input_data_table_1, #input_data_table_2, #input_data_table_3, #input_data_table_4, #input_data_table_t_cost, #input_data_table_5,  .table_print_1, .br_line").remove();
						ship_v = 0;
						//console.log('totalCost => ' , totalCost)
						ship_fee = calculateDeliveryFee(totalCost);
						//console.log('ship_fee => ' , ship_fee)
						totalCost = 0;
						price_calculator(ship_fee);
						totalCost = totalCost + ship_fee;
						console.log("Shipping field is empty => " , ship_v);
						// You can perform actions here if the field is empty
					} else {
						ship_v = 1;
						ship_fee =  jQuery('#shipping').val() ? Number( $('#shipping').val() ) : 0;
						price_calculator(ship_fee);
						//console.log("Shipping field is not empty  => " , ship_v);
						// You can perform actions here if the field is not empty
					}


					
					
					
					
					
					
				

				
				
			});	
			
});
