  $(document).on("click", ".editarCliente", function(e) {
	var codCliente = $(this).attr('href');
	e.preventDefault();

	$.ajax({
		url: 'index.php?r=ventas/AjaxObtenerCliente',
		type: 'POST',		
		data: {idCliente: codCliente},
		success:function(resp){
			data = resp.output;	
			console.log(data);
			 setTimeout(function() {
			 	$("#upd_idCliente").attr('value',codCliente);
			 	$("#upd_RazSoc_Cli").attr('value',data.RazSoc_Cli);	
				$("#upd_ruc_Cli").attr('value',data.ruc_Cli);
				$("#upd_direccion_Cli").attr('value',data.direccion_Cli);
				$("#upd_telefono_Cli").attr('value',data.telefono_Cli);
				$("#upd_email_Cli").attr('value',data.email_Cli);
				$("#upd_tipoPersona_Cli option[value='"+data.tipoPersona_Cli+"']").attr('selected','selected');
				
				if(data.estado_Cli==1){
					$("#upd_estado_Cli").prop('checked', true);
					$('#upd_txtestado_Cli').text('Activo');
				}else{
					$("#upd_estado_Cli").prop('checked', false);
					$('#upd_txtestado_Cli').text('Inactivo');
				}

				 }, 30);
		}
	})  

	$('#ModalActualizarCliente').modal('show');


	
});

$("button#btnActualizarCliente").click(function(e){

var idCliente =$("#upd_idCliente").val();
var RazSoc_Cli =$("#upd_RazSoc_Cli").val();
var tipoPersona_Cli =$("#upd_tipoPersona_Cli").val();
var ruc_Cli =$("#upd_ruc_Cli").val();
var direccion_Cli =$("#upd_direccion_Cli").val();
var telefono_Cli =$("#upd_telefono_Cli").val();
var email_Cli =$("#upd_email_Cli").val();
var estado_Cli;
if ($('#upd_RazSoc_Cli').val().trim()==='' || $('#upd_tipoPersona_Cli').val().trim()==='' ||$('#upd_ruc_Cli').val().trim()===''|| $('#upd_direccion_Cli').val().trim()==='' || $('#upd_telefono_Cli').val().trim()==='' || $('#upd_email_Cli').val().trim()==='') {
  		
  		$('#upd_RazSoc_Cli').no_select();  	
  		$('#upd_tipoPersona_Cli').no_select();
      $('#upd_ruc_Cli').no_select(); 
      $('#upd_direccion_Cli').no_select(); 
      $('#upd_telefono_Cli').no_select(); 
      $('#upd_email_Cli').no_select();    
  	}else{

if($("#upd_estado_Cli").is(':checked')) {
			estado_Cli=1;
		} else {
			estado_Cli=0;
		}


        $.ajax({
            type: "POST",
      url: "index.php?r=ventas/AjaxActualizarCliente",
      data: {
				idCliente:idCliente,
				RazSoc_Cli:RazSoc_Cli,
				tipoPersona_Cli:tipoPersona_Cli,
				ruc_Cli:ruc_Cli,
				direccion_Cli:direccion_Cli,
				telefono_Cli:telefono_Cli,
				email_Cli:email_Cli,
				estado_Cli:estado_Cli
      },
       success: function(resp){
            	data = resp.output;
            	console.log(data);
            	if(data.valorupd==1){
				 $("#message_upd_Cliente").show('easy', function() {
				 		$(this).addClass('alert-success');
				            	$(this).html('<button type="button" class="close" data-dismiss="alert" >x</button><strong>'+data.message+'</strong>')
				});				 
				 setTimeout(function() {
				 	$("#updClienteForm").reset();
				 	$("#ModalActualizarCliente").modal('hide');
				 	window.location.reload();
				 }, 1000);
            	}
            	if(data.valorupd==0){
            		 $("#message_upd_Cliente").show('easy', function() {
            		 	$(this).removeClass('alert-warning');
            		 	$(this).addClass('alert-danger');
				            	$(this).html('<button type="button" class="close" data-dismiss="alert" >x</button><strong>'+data.message+'</strong>')
				});
            	}
            },
      error: function(){
        alert("failure");
        },
            });
   }  
   // end ELSE
e.preventDefault();

  });

jQuery.fn.no_select = function () {   
 
    if ($(this).val().trim() === '') {
       $(this).addClass('no_selected');
    }

}
jQuery.fn.no_selecteds = function () {

   $(this).change(function () {
    if ($(this).val().trim() !== '') {
       $(this).removeClass('no_selected');
    }
    if ($(this).val().trim() === '') {
       $(this).addClass('no_selected');
    }
 });
}
jQuery.fn.no_text = function () {   
 
   
    $(this).blur(function(e) {

	if($(this).val().trim() === ''){
		$(this).addClass('no_selected');
	}else{
		$(this).removeClass('no_selected');
	}
	
});

}

			$('#add_RazSoc_Cli').no_text();  	
			$('#add_tipoPersona_Cli').no_text();
			$('#add_ruc_Cli').no_text(); 
			$('#add_direccion_Cli').no_text(); 
			$('#add_telefono_Cli').no_text(); 
			$('#add_email_Cli').no_text();
			$('#upd_RazSoc_Cli').no_text();  	
			$('#upd_tipoPersona_Cli').no_text();
			$('#upd_ruc_Cli').no_text(); 
			$('#upd_direccion_Cli').no_text(); 
			$('#upd_telefono_Cli').no_text(); 
			$('#upd_email_Cli').no_text();    


  $("button#btnRegistrarCliente").click(function(e){

e.preventDefault();
var RazSoc_Cli =$("#add_RazSoc_Cli").val();
var tipoPersona_Cli =$("#add_tipoPersona_Cli").val();
var ruc_Cli =$("#add_ruc_Cli").val();
var direccion_Cli =$("#add_direccion_Cli").val();
var telefono_Cli =$("#add_telefono_Cli").val();
var email_Cli =$("#add_email_Cli").val();

if ($('#add_RazSoc_Cli').val().trim()==='' || $('#add_tipoPersona_Cli').val().trim()==='' ||$('#add_ruc_Cli').val().trim()===''|| $('#add_direccion_Cli').val().trim()==='' || $('#add_telefono_Cli').val().trim()==='' || $('#add_email_Cli').val().trim()==='') {
  		
  		$('#add_RazSoc_Cli').no_select();  	
  		$('#add_tipoPersona_Cli').no_select();
      $('#add_ruc_Cli').no_select(); 
      $('#add_direccion_Cli').no_select(); 
      $('#add_telefono_Cli').no_select(); 
      $('#add_email_Cli').no_select();    
  	}else{
        $.ajax({
            type: "POST",
      url: "index.php?r=ventas/AjaxAgregarCliente",
      data: {
				RazSoc_Cli:RazSoc_Cli,
				tipoPersona_Cli:tipoPersona_Cli,
				ruc_Cli:ruc_Cli,
				direccion_Cli:direccion_Cli,
				telefono_Cli:telefono_Cli,
				email_Cli:email_Cli
			},
            success: function(resp){
            	data = resp.output;
            	console.log(data);
            	if(data.valor==1){
				 $("#message_save_Cliente").show('easy', function() {
				 		$(this).addClass('alert-success');
				            	$(this).html('<button type="button" class="close" data-dismiss="alert" >x</button><strong>'+data.message+'</strong>')
				});				 
				 setTimeout(function() {
				 	//$("#newClienteForm").reset();
				 	$("#ModalnewCliente").modal('hide');
				 	window.location.reload();
				 }, 1000);
            	}
            	if(data.valor==0){
            		 $("#message_save_Cliente").show('easy', function() {
            		 	$(this).removeClass('alert-success');
            		 	$(this).addClass('alert-danger');
				            	$(this).html('<button type="button" class="close" data-dismiss="alert" >x</button><strong>'+data.message+'</strong>')
				});
            	}
            },
      error: function(){
        alert("failure");
        },
            });
    } //END ELSE 

  });



// ====================================================================================
// METODO PARA ELIMINAR UN CLIENTE
// ====================================================================================
$(document).on("click", ".desactivarCliente", function(e) {
	var codCliente = $(this).attr('href');

	bootbox.dialog({
	  message: "Esta seguro en eliminar al Cliente seleccionado?",
	  title: "Eliminar Cliente",
	  buttons: {
	    success: {
	      label: "Aceptar",
	      className: "btn-success",
	      callback: function() {
	        waitingDialog.show('Eliminando Cliente', {dialogSize: 'sm', progressType: 'primary'});
			jQuery.ajax({
				url: 'index.php?r=ventas/AjaxActualizarEstadoCliente',
				type: "POST",
				data : {idCliente: codCliente,estado_Cli:0},
				success: function(resp){
					console.log(resp);
					location.reload();
				}
			}).done(function(ev){
				waitingDialog.hide();
			});
	      }
	    },
	    danger: {
	      label: "Cancelar",
	      className: "btn-danger",
	      callback: function() {
	        //Example.show("uh oh, look out!");
	      }
	    }
	  }
	});
	
	e.preventDefault();
});

// ====================================================================================
// METODO PARA REACTIVAR UN PROVEEDOR
// ====================================================================================
$(document).on("click", ".activarCliente", function(e) {
	var codCliente = $(this).attr('href');

	bootbox.dialog({
	  message: "Esta seguro en activar al Cliente seleccionado?",
	  title: "Activar Cliente",
	  buttons: {
	    success: {
	      label: "Aceptar",
	      className: "btn-success",
	      callback: function() {
	        waitingDialog.show('Reactivando Cliente', {dialogSize: 'sm', progressType: 'warning'});
			jQuery.ajax({
				url: 'index.php?r=ventas/AjaxActualizarEstadoCliente',
				type: "POST",
				data : {idCliente: codCliente,estado_Cli:1},
				success: function(resp){
					console.log(resp);
					location.reload();
				}
			}).done(function(ev){
				waitingDialog.hide();
			});
	      }
	    },
	    danger: {
	      label: "Cancelar",
	      className: "btn-danger",
	      callback: function() {
	        //Example.show("uh oh, look out!");
	      }
	    }
	  }
	});
	
	e.preventDefault();
});





// ====================================================================================
// METODO PARA ACTUALIZAR UN CLIENTE
// ====================================================================================
$(document).on("click","#AgregarCliente", function(e) {
	

	waitingDialog.show('Cargando Formulario', {dialogSize: 'sm', progressType: 'warning'});
	jQuery.ajax({
			success: function(resp){
			data = resp.output;
			bootbox.dialog({
			title: "Agregar Cliente",
		    message: 
		    '<div class="row"> ' +
		             '<div class="col-md-12"> ' +
		             '<form class="form-horizontal">' +
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="RazonSocial">RazonSocial:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="RazonSocial" name="RazonSocial" type="text" placeholder="RasonSocial" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="tipoPersona">tipoPersona:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="tipoPersona" name="tipoPersona" type="text" placeholder="Proveedor" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="RUC">RUC:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="RUC" name="RUC" type="text" placeholder="RUC" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="direccion">direccion:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="direccion" name="direccion" type="text" placeholder="direccion" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="telefono">telefono:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="telefono" name="telefono" type="text" placeholder="telefono" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="email">email:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="email" name="email" type="text" placeholder="email" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="fechaInsc">fechaInsc:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="fechaInsc" name="fechaInsc" type="text" placeholder="fechaInsc" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="stadoCli">Estado:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="stadoCli" name="stadoCli" type="text" placeholder="stado" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             	
		             /*filaFormulario('Descripcion', 'itext', data.Descripcion)+
		             filaFormulario('IdProveedor', 'itext', data.idProveedor)+
		             filaFormulario('precioCompra', 'itext', data.precioCompra)+
		             filaFormulario('precioVenta', 'itext', data.precioVenta)+
		             filaFormulario('stock', 'itext', data.stock)+
		             filaFormulario('fechaVencimiento', 'itext', data.fechaVencimiento)+
		             filaFormulario('ESTADO', 'itext',data.stado)+'</b>'+*/
		             
		             '</form>'+
		             ' </div>  </div>',
		    buttons: {
			    success: {
			      label: "Aceptar",
			      className: "btn-success",
			      callback: function() {
			        waitingDialog.show('Agregando Cliente', {dialogSize: 'sm', progressType: 'warning'});
			     
			        var RasSocialCli=$('#RazonSocial').val();
			        var tipPerCli=$('#tipoPersona').val();
			        var rucCli=$('#RUC').val();
			        var direcCli=$('#direccion').val();
			        var telCli=$('#telefono').val();
			        var emailCli=$('#email').val();
			        var fechaInsc=$('#fechaInsc').val();
			        var stadoCli=$('#stadoCli').val();
			    
					jQuery.ajax({
						url: 'index.php?r=ventas/AjaxAgregarCliente',
						type: "POST",
						data : {
								RazonSocial: RasSocialCli,
								tipoPersona:tipPerCli,
								ruc:rucCli,
								direccion:direcCli,
								telefono:telCli,
								email:emailCli,
								fechaInsc:fechaInsc,
								stado:stadoCli
							},
						success: function(resp){
							console.log(resp);
							location.reload();
						}
					}).done(function(ev){
						waitingDialog.hide();
					});
			      }
			    },
			    danger: {
			      label: "Cancelar",
			      className: "btn-danger",
			      callback: function() {
			        //Example.show("uh oh, look out!");
			      }
			    }
			}
		});
		}
	}).done(function(ev){
		waitingDialog.hide();
	});
	
	e.preventDefault();
});

// ====================================================================================
// METODO PARA VER EL DETALLE DEL CLIENTE
// ====================================================================================
$(document).on("click", ".verCliente", function(e) {
	var codCliente = $(this).attr('href');
	console.log("idCliente="+codCliente);

	waitingDialog.show('Buscando Cliente', {dialogSize: 'sm', progressType: 'warning'});
	jQuery.ajax({
		url: 'index.php?r=ventas/AjaxObtenerCliente',
		type: "POST",
		data : {idCliente: codCliente},
		success: function(resp){
			data = resp.output;
			bootbox.dialog({
			title: "Visualizando detalles del Cliente",
		    message: '<div class="row">  ' +
		             '<div class="col-md-12"> ' +
		             '<form class="form-horizontal"> ' +

		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">RasonSocial</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.RazSoc_Cli+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">tipoPersona:</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+(data.tipoPersona_Cli==1?"JURIDICA":"NATURAL")+'</span></div>' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">RUC  :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.ruc_Cli +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">direccion :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.direccion_Cli+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">telefono :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.telefono_Cli +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">email :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.email_Cli +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Fecha Registro :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.fec_reg_Cli +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Estado :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+(data.estado_Cli==1?"Activo":"Inactivo")+' en el Sistema</span></div> ' +
		             '</div> ' +

		             '</form>'+


		             ' </div>  </div>'
		});
		}
	}).done(function(ev){
		waitingDialog.hide();
	});
	
	e.preventDefault();
});
