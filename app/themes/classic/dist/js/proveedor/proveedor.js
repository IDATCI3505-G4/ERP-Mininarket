  $(document).on("click", ".editarProveedor", function(e) {
	var codProveedor = $(this).attr('href');
	e.preventDefault();

	$.ajax({
		url: 'index.php?r=compras/AjaxObtenerProveedor',
		type: 'POST',		
		data: {idProveedor: codProveedor},
		success:function(resp){
			data = resp.output;	
			console.log(data);
			 setTimeout(function() {
			 	$("#upd_idProveedor").attr('value',codProveedor);
			 	$("#upd_RazSoc_Prov").attr('value',data.RazSoc_Prov);	
				$("#upd_ruc_Prov").attr('value',data.ruc_Prov);
				$("#upd_direccion_Prov").attr('value',data.direccion_Prov);
				$("#upd_telefono_Prov").attr('value',data.telefono_Prov);
				$("#upd_email_Prov").attr('value',data.email_Prov);
				$("#upd_tipoPersona_Prov option[value='"+data.tipoPersona_Prov+"']").attr('selected','selected');
				
				if(data.estado_Prov==1){
					$("#upd_estado_Prov").prop('checked', true);
					$('#upd_txtestado_Prov').text('Activo');
				}else{
					$("#upd_estado_Prov").prop('checked', false);
					$('#upd_txtestado_Prov').text('Inactivo');
				}

				 }, 30);
		}
	})  

	$('#ModalActualizarProveedor').modal('show');


	
});

$("button#btnActualizarProveedor").click(function(e){

var idProveedor =$("#upd_idProveedor").val();
var RazSoc_Prov =$("#upd_RazSoc_Prov").val();
var tipoPersona_Prov =$("#upd_tipoPersona_Prov").val();
var ruc_Prov =$("#upd_ruc_Prov").val();
var direccion_Prov =$("#upd_direccion_Prov").val();
var telefono_Prov =$("#upd_telefono_Prov").val();
var email_Prov =$("#upd_email_Prov").val();
var estado_Prov;
if($("#upd_estado_Prov").is(':checked')) {
			estado_Prov=1;
		} else {
			estado_Prov=0;
		}


        $.ajax({
            type: "POST",
      url: "index.php?r=compras/AjaxActualizarProveedor",
      data: {
				idProveedor:idProveedor,
				RazSoc_Prov:RazSoc_Prov,
				tipoPersona_Prov:tipoPersona_Prov,
				ruc_Prov:ruc_Prov,
				direccion_Prov:direccion_Prov,
				telefono_Prov:telefono_Prov,
				email_Prov:email_Prov,
				estado_Prov:estado_Prov
      },
       success: function(resp){
            	data = resp.output;
            	console.log(data);
            	if(data.valorupd==1){
				 $("#message_upd_Proveedor").show('easy', function() {
				 		$(this).addClass('alert-success');
				            	$(this).html('<button type="button" class="close" data-dismiss="alert" >x</button><strong>'+data.message+'</strong>')
				});				 
				 setTimeout(function() {
				 	$("#updProveedorForm").reset();
				 	$("#ModalActualizarProveedor").modal('hide');
				 	window.location.reload();
				 }, 1000);
            	}
            	if(data.valorupd==0){
            		 $("#message_upd_Proveedor").show('easy', function() {
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
   
e.preventDefault();

  });



  $("button#btnRegistrarProveedor").click(function(e){

e.preventDefault();
var RazSoc_Prov =$("#add_RazSoc_Prov").val();
var tipoPersona_Prov =$("#add_tipoPersona_Prov").val();
var ruc_Prov =$("#add_ruc_Prov").val();
var direccion_Prov =$("#add_direccion_Prov").val();
var telefono_Prov =$("#add_telefono_Prov").val();
var email_Prov =$("#add_email_Prov").val();


        $.ajax({
            type: "POST",
      url: "index.php?r=compras/AjaxAgregarProveedor",
      data: {
				RazSoc_Prov:RazSoc_Prov,
				tipoPersona_Prov:tipoPersona_Prov,
				ruc_Prov:ruc_Prov,
				direccion_Prov:direccion_Prov,
				telefono_Prov:telefono_Prov,
				email_Prov:email_Prov
			},
            success: function(resp){
            	data = resp.output;
            	console.log(data);
            	if(data.valor==1){
				 $("#message_save_Proveedor").show('easy', function() {
				 		$(this).addClass('alert-success');
				            	$(this).html('<button type="button" class="close" data-dismiss="alert" >x</button><strong>'+data.message+'</strong>')
				});				 
				 setTimeout(function() {
				 	//$("#newClienteForm").reset();
				 	$("#ModalnewProveedor").modal('hide');
				 	window.location.reload();
				 }, 1000);
            	}
            	if(data.valor==0){
            		 $("#message_save_Proveedor").show('easy', function() {
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
    


  });



// ====================================================================================
// METODO PARA ELIMINAR UN CLIENTE
// ====================================================================================
$(document).on("click", ".desactivarProveedor", function(e) {
	var codProveedor = $(this).attr('href');

	bootbox.dialog({
	  message: "Esta seguro en eliminar al Proveedor seleccionado?",
	  title: "Eliminar Proveedor",
	  buttons: {
	    success: {
	      label: "Aceptar",
	      className: "btn-success",
	      callback: function() {
	        waitingDialog.show('Eliminando Proveedor', {dialogSize: 'sm', progressType: 'primary'});
			jQuery.ajax({
				url: 'index.php?r=compras/AjaxActualizarEstadoProveedor',
				type: "POST",
				data : {idProveedor: codProveedor,estado_Prov:0},
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
$(document).on("click", ".activarProveedor", function(e) {
	var codProveedor = $(this).attr('href');

	bootbox.dialog({
	  message: "Esta seguro en activar al Proveeedor seleccionado?",
	  title: "Activar Proveedor",
	  buttons: {
	    success: {
	      label: "Aceptar",
	      className: "btn-success",
	      callback: function() {
	        waitingDialog.show('Reactivando Proveedor', {dialogSize: 'sm', progressType: 'primary'});
			jQuery.ajax({
				url: 'index.php?r=compras/AjaxActualizarEstadoProveedor',
				type: "POST",
				data : {idProveedor: codProveedor,estado_Prov:1},
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
$(document).on("click", ".verProveedor", function(e) {
	var codProveedor = $(this).attr('href');
	console.log("idCliente="+codProveedor);

	waitingDialog.show('Buscando Proveedor', {dialogSize: 'sm', progressType: 'primary'});
	jQuery.ajax({
		url: 'index.php?r=compras/AjaxObtenerProveedor',
		type: "POST",
		data : {idProveedor: codProveedor},
		success: function(resp){
			data = resp.output;
			console.log(data);
			bootbox.dialog({
			title: "Visualizando detalles del Proveedor",
		    message: '<div class="row">  ' +
		             '<div class="col-md-12"> ' +
		             '<form class="form-horizontal"> ' +

		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">RasonSocial</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.RazSoc_Prov+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">tipoPersona:</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+(data.tipoPersona_Prov==1?"JURIDICA":"NATURAL")+'</span></div>' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">RUC  :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.ruc_Prov +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">direccion :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.direccion_Prov+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">telefono :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.telefono_Prov +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">email :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.email_Prov +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Fecha Registro :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.fec_reg_Prov +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Estado :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+(data.estado_Prov==1?"Activo":"Inactivo")+' en el Sistema</span></div> ' +
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
