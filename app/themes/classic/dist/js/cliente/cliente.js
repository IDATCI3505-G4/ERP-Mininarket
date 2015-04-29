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
		    message: '<div class="row"> ' +
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
// METODO PARA EDITAR UN CLIENTE
// ====================================================================================
$(document).on("click",".editarCliente", function(e) {
	var codCliente = $(this).attr('href');
	console.log("codCliente="+codCliente);

	waitingDialog.show('Buscando Cliente', {dialogSize: 'sm', progressType: 'warning'});
	jQuery.ajax({
		url: 'index.php?r=ventas/AjaxObtenerCliente',
		type: "POST",
		data : {idCliente: codCliente},
		success: function(resp){
			data = resp.output;
			bootbox.dialog({
			title: "Actualiar Cliente",
		    message: '<div class="row"> ' +
		             '<div class="col-md-12"> ' +
		             '<form class="form-horizontal">' +
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="RazonSocial">RazonSocial:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="RazonSocial" name="RazonSocial" type="text" placeholder="RasonSocial" class="form-control input-md" value="'+data.RazonSocial+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="tipoPersona">tipoPersona:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="tipoPersona" name="tipoPersona" type="text" placeholder="Proveedor" class="form-control input-md" value="'+data.tipoPersona+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="RUC">RUC:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="RUC" name="RUC" type="text" placeholder="RUC" class="form-control input-md" value="'+data.ruc+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="direccion">direccion:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="direccion" name="direccion" type="text" placeholder="direccion" class="form-control input-md" value="'+data.direccion+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="telefono">telefono:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="telefono" name="telefono" type="text" placeholder="telefono" class="form-control input-md" value="'+data.telefono+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="email">email:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="email" name="email" type="text" placeholder="email" class="form-control input-md" value="'+data.email+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="fechaInsc">fechaInsc:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="fechaInsc" name="fechaInsc" type="text" placeholder="fechaInsc" class="form-control input-md" value="'+data.fechaInsc+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="stadoCli">Estado:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="stadoCli" name="stadoCli" type="text" placeholder="stado" class="form-control input-md" value="'+data.stado+'">'+
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
			        waitingDialog.show('Actualizando Cliente', {dialogSize: 'sm', progressType: 'warning'});
			     
			        var RasSocialCli=$('#RazonSocial').val();
			        var tipPerCli=$('#tipoPersona').val();
			        var rucCli=$('#RUC').val();
			        var direcCli=$('#direccion').val();
			        var telCli=$('#telefono').val();
			        var emailCli=$('#email').val();
			        var fechaInsc=$('#fechaInsc').val();
			        var stadoCli=$('#stadoCli').val();
			    
					jQuery.ajax({
						url: 'index.php?r=ventas/AjaxActualizarCliente',
						type: "POST",
						data : {
								idCliente: codCliente,
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
