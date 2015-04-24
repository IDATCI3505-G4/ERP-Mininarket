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
				data : {idCliente: codCliente,stado:1},
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
	        waitingDialog.show('Eliminando Cliente', {dialogSize: 'sm', progressType: 'warning'});
			jQuery.ajax({
				url: 'index.php?r=ventas/AjaxActualizarEstadoCliente',
				type: "POST",
				data : {idCliente: codCliente,stado:0},
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
		             '<div class="col-md-7"><span class="help-block">'+data.RazonSocial+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">tipoPersona:</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+(data.tipoPersona==1?"JURIDICA":"NATURAL")+'</span></div>' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">RUC  :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.ruc +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">direccion :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.direccion+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">telefono :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.telefono +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">email :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.email +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Estado :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+(data.stado==1?"ACTIVO":"INACTIVO")+' en el Sistema</span></div> ' +
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

// ====================================================================================
// METODO PARA REACTIVAR UN PROVEEDOR
// ====================================================================================
$(document).on("click", ".activarProveedor", function(e) {
	var codProveedor = $(this).attr('href');

	bootbox.dialog({
	  message: "Esta seguro en activar al Proveedor seleccionado?",
	  title: "Activar Proveedor",
	  buttons: {
	    success: {
	      label: "Aceptar",
	      className: "btn-success",
	      callback: function() {
	        waitingDialog.show('Reactivando Proveedor', {dialogSize: 'sm', progressType: 'warning'});
			jQuery.ajax({
				url: 'index.php?r=compras/AjaxActualizarEstadoProveedor',
				type: "POST",
				data : {idProveedor: codProveedor,stado:1},
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
// METODO PARA ELIMINAR UN PROVEEDOR
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
	        waitingDialog.show('Eliminando Empleado', {dialogSize: 'sm', progressType: 'warning'});
			jQuery.ajax({
				url: 'index.php?r=compras/AjaxActualizarEstadoProveedor',
				type: "POST",
				data : {idProveedor: codProveedor,stado:0},
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
// METODO PARA AGREGAR UN PROVEEDOR
// ====================================================================================
$(document).on("click","#AgregarProveedor", function(e) {
	var codProveedor = $(this).attr('href');
	console.log("codProveedor="+codProveedor);

	waitingDialog.show('Buscando Proveedor', {dialogSize: 'sm', progressType: 'warning'});
	jQuery.ajax({
		
		success: function(resp){
			data = resp.output;
			bootbox.dialog({
			title: "Agregar Proveedor",
		    message: '<div class="row"> ' +
		             '<div class="col-md-12"> ' +
		             '<form class="form-horizontal">' +
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="RasonSocial">Descripción:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="addProdRasonSocial" name="addProdRasonSocial" type="text" placeholder="RasonSocial" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="tipoPersona">tipoPersona:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="addProdtipoPersona" name="addProdtipoPersona" type="text" placeholder="Proveedor" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="RUC">RUC:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="addProdRUC" name="addProdRUC" type="text" placeholder="RUC" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="direccion">direccion:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="addProddireccion" name="addProddireccion" type="text" placeholder="direccion" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="stock">telefono:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="addProdtelefono" name="addProdtelefono" type="text" placeholder="telefono" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="email">email:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="addProdemail" name="addProdemail" type="text" placeholder="email" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="stado">Estado:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="addProdstadoprov" name="addProdstadoprov" type="text" placeholder="stado" class="form-control input-md" value="">'+
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
			        waitingDialog.show('Agregando Proveedor', {dialogSize: 'sm', progressType: 'warning'});
			     
			        var RasSocialProv=$('#addProdRasonSocial').val();
			        var tipPerProv=$('#addProdtipoPersona').val();
			        var RUCProv=$('#addProdRUC').val();
			        var direcProv=$('#addProddireccion').val();
			        var telProv=$('#addProdtelefono').val();
			        var emailProv=$('#addProdemail').val();
			        var stadoProv=$('#addProdstadoprov').val();
			    
					jQuery.ajax({
						url: 'index.php?r=compras/AjaxAgregarProveedor',
						type: "POST",
						data : {
								idProveedor: codProveedor,
								RasonSocial: RasSocialProv,
								tipoPersona:tipPerProv,
								RUC:RUCProv,
								direccion:direcProv,
								telefono:telProv,
								email:emailProv,
								stado:stadoProv
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
// METODO PARA ACTUALIZAR UN PROVEEDOR
// ====================================================================================
$(document).on("click","#editarproveedor", function(e) {
	var codProveedor = $(this).attr('href');
	console.log("codProveedor="+codProveedor);

	waitingDialog.show('Buscando Proveedor', {dialogSize: 'sm', progressType: 'warning'});
	jQuery.ajax({
		url: 'index.php?r=compras/AjaxObtenerProveedor',
		type: "POST",
		data : {idProveedor: codProveedor},
		success: function(resp){
			data = resp.output;
			bootbox.dialog({
			title: "Actualizar Proveedor",
		    message: '<div class="row"> ' +
		             '<div class="col-md-12"> ' +
		             '<form class="form-horizontal">' +
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="RasonSocial">Descripción:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="RasonSocial" name="RasonSocial" type="text" placeholder="RasonSocial" class="form-control input-md" value="'+data.RasonSocial+'">'+
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
		             '<input id="RUC" name="RUC" type="text" placeholder="RUC" class="form-control input-md" value="'+data.RUC+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="direccion">direccion:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="direccion" name="direccion" type="text" placeholder="direccion" class="form-control input-md" value="'+data.direccion+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="stock">telefono:</label>'+
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
		             '<label class="col-md-4 control-label" for="stado">Estado:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="stadoprov" name="stadoprov" type="text" placeholder="stado" class="form-control input-md" value="'+data.stado+'">'+
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
			        waitingDialog.show('Actualizando Proveedor', {dialogSize: 'sm', progressType: 'warning'});
			     
			        var RasSocialProv=$('#RasonSocial').val();
			        var tipPerProv=$('#tipoPersona').val();
			        var RUCProv=$('#RUC').val();
			        var direcProv=$('#direccion').val();
			        var telProv=$('#telefono').val();
			        var emailProv=$('#email').val();
			        var stadoProv=$('#stadoprov').val();
			    
					jQuery.ajax({
						url: 'index.php?r=compras/AjaxActualizarProveedor',
						type: "POST",
						data : {
								idProveedor: codProveedor,
								RasonSocial: RasSocialProv,
								tipoPersona:tipPerProv,
								RUC:RUCProv,
								direccion:direcProv,
								telefono:telProv,
								email:emailProv,
								stado:stadoProv
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
// METODO PARA VER EL DETALLE DEL PROVEEDOR
// ====================================================================================
$(document).on("click", ".verProveedor", function(e) {
	var codProveedor = $(this).attr('href');
	console.log("idProvedor="+codProveedor);

	waitingDialog.show('Buscando Proveedor', {dialogSize: 'sm', progressType: 'warning'});
	jQuery.ajax({
		url: 'index.php?r=compras/AjaxObtenerProveedor',
		type: "POST",
		data : {idProveedor: codProveedor},
		success: function(resp){
			data = resp.output;
			bootbox.dialog({
			title: "Visualizando detalles del Proveedor",
		    message: '<div class="row">  ' +
		             '<div class="col-md-12"> ' +
		             '<form class="form-horizontal"> ' +

		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">RasonSocial</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.RasonSocial+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">tipoPersona:</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+(data.tipoPersona==1?"JURIDICA":"NATURAL")+'</span></div>' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">RUC  :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.RUC +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">direccion :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.direccion+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">email :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.email +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Estado :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+(data.stado==1?"ACTIVO":"INACTIVO")+' en el Sistema</span></div> ' +
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
// ====================================================================================
// METODO PARA AGREGAR UN PRODUCTO
// ====================================================================================
$(document).on("click", "#AgregarProducto", function(e) {



	waitingDialog.show('Cargando Formulario', {dialogSize: 'sm', progressType: 'warning'});
	jQuery.ajax({
				success: function(resp){
			data = resp.output;
			bootbox.dialog({
			title: "Agregar Nuevo Producto",
		    message: '<div class="row"> ' +
		             '<div class="col-md-12"> ' +
		             '<form class="form-horizontal">' +
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="descripcion">Descripción:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="addProd_descripcion" name="addProd_descripcion" type="text" placeholder="Descripcion" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="idProveedor">idProveedor:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="addProd_idProveedor" name="idProveedor" type="text" placeholder="Proveedor" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="precioCompra">Precio de Compra:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="addProd_precioCompra" name="addProd_precioCompra" type="text" placeholder="Precio de Compra" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="precioVenta">Precio de Venta:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="addProd_precioVenta" name="addProd_precioVenta" type="text" placeholder="Precio de Venta" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="stock">stock:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="addProd_stock" name="addProd_stock" type="text" placeholder="stock" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="fechaVencimiento">Fecha de Vencimiento:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="addProd_fechaVencimiento" name="addProd_fechaVencimiento" type="text" placeholder="fecha de Vencimiento" class="form-control input-md" value="">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="stado">Estado:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="addProd_stado" name="addProd_stado" type="text" placeholder="stado" class="form-control input-md" value="">'+
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
			        waitingDialog.show('Actualizando Producto', {dialogSize: 'sm', progressType: 'warning'});
			        var idProv=$('#addProd_idProveedor').val();
			        var descProd=$('#addProd_descripcion').val();
			        var PComProd=$('#addProd_precioCompra').val();
			        var pVentProd=$('#addProd_precioVenta').val();
			        var stockProd=$('#addProd_stock').val();
			        var fecvendProd=$('#addProd_fechaVencimiento').val();
			        var stadoProd=$('#addProd_stado').val();
			        console.log(idProv+","+descProd);
					jQuery.ajax({
						url: 'index.php?r=almacen/AjaxAgregarProducto',
						type: "POST",
						data : {idProveedor: idProv,descripcion:descProd,precioCompra:PComProd,precioVenta:pVentProd,stock:stockProd,fechaVencimiento:fecvendProd,stado:stadoProd},
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
// METODO PARA ELIMINAR UN PRODUCTO
// ====================================================================================
$(document).on("click", ".eliminarProducto", function(e) {
	var codProducto = $(this).attr('href');

	bootbox.dialog({
	  message: "¿Esta seguro en eliminar el Producto seleccionado?",
	  title: "Eliminar Producto",
	  buttons: {
	    success: {
	      label: "Aceptar",
	      className: "btn-success",
	      callback: function() {
	        waitingDialog.show('Eliminando Producto', {dialogSize: 'sm', progressType: 'warning'});
			jQuery.ajax({
				url: 'index.php?r=almacen/AjaxEliminarProducto',
				type: "POST",
				data : {idProducto: codProducto},
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
// METODO PARA ACTUALIZAR UN PRODUCTO
// ====================================================================================
$(document).on("click", ".editarProducto", function(e) {
	var codProducto = $(this).attr('href');
	console.log("idProducto="+codProducto);

	waitingDialog.show('Buscando Producto', {dialogSize: 'sm', progressType: 'warning'});
	jQuery.ajax({
		url: 'index.php?r=almacen/AjaxObtenerProducto',
		type: "POST",
		data : {idProducto: codProducto},
		success: function(resp){
			data = resp.output;
			bootbox.dialog({
			title: "Visualizando detalles del Producto",
		    message: '<div class="row"> ' +
		             '<div class="col-md-12"> ' +
		             '<form class="form-horizontal">' +
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="descripcion">Descripción:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="descripcion" name="descripcion" type="text" placeholder="Descripcion" class="form-control input-md" value="'+data.Descripcion+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="idProveedor">idProveedor:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="idProveedor" name="idProveedor" type="text" placeholder="Proveedor" class="form-control input-md" value="'+data.idProveedor+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="precioCompra">Precio de Compra:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="precioCompra" name="precioCompra" type="text" placeholder="Precio de Compra" class="form-control input-md" value="'+data.precioCompra+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="precioVenta">Precio de Venta:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="precioVenta" name="precioVenta" type="text" placeholder="Precio de Venta" class="form-control input-md" value="'+data.precioVenta+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="stock">stock:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="stock" name="stock" type="text" placeholder="stock" class="form-control input-md" value="'+data.stock+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="fechaVencimiento">Fecha de Vencimiento:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="fechaVencimiento" name="fechaVencimiento" type="text" placeholder="fechaVencimiento" class="form-control input-md" value="'+data.fechaVencimiento+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="stado">Estado:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="stado" name="stado" type="text" placeholder="stado" class="form-control input-md" value="'+data.stado+'">'+
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
			        waitingDialog.show('Actualizando Producto', {dialogSize: 'sm', progressType: 'warning'});
			        var idProv=$('#idProveedor').val();
			        var descProd=$('#descripcion').val();
			        var PComProd=$('#precioCompra').val();
			        var pVentProd=$('#precioVenta').val();
			        var stockProd=$('#stock').val();
			        var fecvendProd=$('#fechaVencimiento').val();
			        var stadoProd=$('#stado').val();
			        console.log(idProv+","+descProd);
					jQuery.ajax({
						url: 'index.php?r=almacen/AjaxActualizarProducto',
						type: "POST",
						data : {idProducto: codProducto,idProveedor: idProv,descripcion:descProd,precioCompra:PComProd,precioVenta:pVentProd,stock:stockProd,fechaVencimiento:fecvendProd,stado:stadoProd},
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
// METODO PARA VER EL DETALLE DEL PRODUCTO
// ====================================================================================
$(document).on("click", ".verProducto", function(e) {
	var codProducto = $(this).attr('href');
	console.log("idProducto="+codProducto);

	waitingDialog.show('Buscando al Producto', {dialogSize: 'sm', progressType: 'warning'});
	jQuery.ajax({
		url: 'index.php?r=almacen/AjaxObtenerProducto',
		type: "POST",
		data : {idProducto: codProducto},
		success: function(resp){
			data = resp.output;
			bootbox.dialog({
			title: "Visualizando detalles del Producto",
		    message: '<div class="row">  ' +
		             '<div class="col-md-12"> ' +
		             '<form class="form-horizontal"> ' +

		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Descripci&oacute;n:</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.Descripcion+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Proveedor:</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.idProveedor+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Precio de Compra :</label> ' +
		             '<div class="col-md-7"><span class="help-block"> S/. '+data.precioCompra+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Precio de Venta :</label> ' +
		             '<div class="col-md-7"><span class="help-block"> S/. '+data.precioVenta+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Fecha de Vencimiento :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.fechaVencimiento +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Stock :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.stock+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Estado :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.stado+'</span></div> ' +
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

// ====================================================================================
// METODO PARA VER EL DETALLE DE UNA PERSONA
// ====================================================================================
$(document).on("click", ".verMas", function(e) {
	var codEmpleado = $(this).attr('href');
	console.log("IDE_EMPLEADO="+codEmpleado);

	waitingDialog.show('Buscando al empleado', {dialogSize: 'sm', progressType: 'warning'});
	jQuery.ajax({
		url: 'index.php?r=personal/ajaxObtenerEmpleado',
		type: "POST",
		data : {idePersona: codEmpleado},
		success: function(resp){
			data = resp.output;
			bootbox.dialog({
			title: "Visualizando detalles del Empleado",
		    message: '<div class="row">  ' +
		             '<div class="col-md-12"> ' +
		             '<form class="form-horizontal"> ' +

		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">NOMBRES:</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.des_nombres+', '+data.des_apepat+' '+data.des_apemat+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">DOCUMENTO:</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.ide_tipodocumento+' NRO. '+data.nro_documento+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">FECHA DE NACIMIENTO:</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.fec_nacimiento+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">CORREO:</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.des_correo+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">TELEFONO:</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.des_telefono+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">SEXO:</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.ide_sexo+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">ESTADO CIVIL:</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.ide_estcivil+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">ESTADO:</label> ' +
		             '<div class="col-md-7"><span class="help-block"><b>'+(data.ide_estado==1?"ACTIVO":"INACTIVO")+' EN EL SISTEMA</b></span></div> ' +
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

// ====================================================================================
// METODO PARA ACTUALIZAR UNA PERSONA
// ====================================================================================
$(document).on("click", ".sis-editar", function(e) {
	var codEmpleado = $(this).attr('href');
	console.log("IDE_EMPLEADO="+codEmpleado);

	waitingDialog.show('Buscando al empleado', {dialogSize: 'sm', progressType: 'warning'});
	jQuery.ajax({
		url: 'index.php?r=personal/ajaxObtenerEmpleado',
		type: "POST",
		data : {idePersona: codEmpleado},
		success: function(resp){
			data = resp.output;
			bootbox.dialog({
			title: "Visualizando detalles del Empleado",
		    message: '<div class="row">  ' +
		             '<div class="col-md-12"> ' +
		             '<form class="form-horizontal"> ' +

		             filaFormulario('NOMBRES', 'itext', data.des_nombres+', '+data.des_apepat+' '+data.des_apemat)+
		             filaFormulario('DOCUMENTO', 'itext', data.nro_documento)+
		             filaFormulario('FECHA DE NACIMIENTO', 'itext', data.fec_nacimiento)+
		             filaFormulario('CORREO', 'itext', data.des_correo)+
		             filaFormulario('TELEFONO', 'itext', data.des_telefono)+
		             filaFormulario('SEXO', 'iradio', data.ide_sexo)+
		             filaFormulario('ESTADO CIVIL', 'isel', data.ide_estcivil)+
		             filaFormulario('ESTADO', '', '<b>'+(data.ide_estado==1?"ACTIVO":"INACTIVO")+' EN EL SISTEMA')+'</b>'+
		             
		             '</form>'+
		             ' </div>  </div>',
		    buttons: {
			    success: {
			      label: "Aceptar",
			      className: "btn-success",
			      callback: function() {
			        waitingDialog.show('Eliminando Empleado', {dialogSize: 'sm', progressType: 'warning'});
					jQuery.ajax({
						url: 'index.php?r=personal/ajaxActualizarEmpleado',
						type: "POST",
						data : {idePersona: codEmpleado, ideEstado:0},
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
// METODO PARA ELIMINAR UNA PERSONA
// ====================================================================================
$(document).on("click", ".sis-eliminar", function(e) {
	var codEmpleado = $(this).attr('href');

	bootbox.dialog({
	  message: "Esta seguro en eliminar el Empleado seleccionado?",
	  title: "Eliminar Empleado",
	  buttons: {
	    success: {
	      label: "Aceptar",
	      className: "btn-success",
	      callback: function() {
	        waitingDialog.show('Eliminando Empleado', {dialogSize: 'sm', progressType: 'warning'});
			jQuery.ajax({
				url: 'index.php?r=personal/ajaxActualizarEmpleado',
				type: "POST",
				data : {idePersona: codEmpleado, ideEstado:0},
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
// METODO PARA REACTIVAR UNA PERSONA
// ====================================================================================
$(document).on("click", ".sis-activar", function(e) {
	var codEmpleado = $(this).attr('href');

	bootbox.dialog({
	  message: "Esta seguro en activar al Empleado seleccionado?",
	  title: "Activar Empleado",
	  buttons: {
	    success: {
	      label: "Aceptar",
	      className: "btn-success",
	      callback: function() {
	        waitingDialog.show('Reactivando Empleado', {dialogSize: 'sm', progressType: 'warning'});
			jQuery.ajax({
				url: 'index.php?r=personal/ajaxActualizarEmpleado',
				type: "POST",
				data : {idePersona: codEmpleado, ideEstado:1},
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

function filaFormulario(label, itype, data){
	var itemSexo = {item:{snom:'MASCULINO',check:false},item:{snom:'FEMENINO',check:false}};
	var txt = "";
	var tpas="";
	var datac = "";

	   txt += '<div class="form-group"><label class="col-md-4 control-label" for="name">'+label+':</label> ';
	   txt += '<div class="col-md-7">';
	   if(itype==="itext"){
	   		txt += '<input id="name" name="name" type="text" ';
	   		txt += 'placeholder="'+label+'" class="form-control input-md" value="'+data+'"/>';
	   }else if(itype==="iradio"){
	   		//txt += '<div class="form-group">';
            txt += '<label><input type="checkbox" class="flat-red" '+(data=='MASCULINO'?'checked':'')+'/></label> MASCULINO';
            txt += '&nbsp;&nbsp;';
            txt += '<label><input type="checkbox" class="flat-red" '+(data=='FEMENINO'?'checked':'')+'/></label> FEMENINO';
            //txt += '</div>';
	   }else if(itype==="isel"){
	   		
	   		txt += '<select ide="selEstadoCivil">';
	   		txt += '</select>';
	   		var tpax = jQuery.ajax({
				url: 'index.php?r=admCatalogo/traeCatalogo',
				type: "POST",
				data : {ideGrupo:7},
				success: function(resp){
					//console.log(resp.output);
					datac = resp.output;
					var tpa="";
					
					for(var i=0;i<datac.length;i++){
						tpa += '<option value="'+datac[i].ide_elemento+'" '+(datac[i].des_nombre==data?'selected':'')+'>'+datac[i].des_nombre+'</option>';
					}

					var tpas=tpa;
					
					return tpas;
				}
			});

			console.log(tpax);

			

	   }else{
	   		txt += '<span class="help-block">'+data+'</span>';	
	   }
	   
	   txt += '</div><div class="col-md-1">&nbsp;</div></div> ';

	   
	return txt;
}

var waitingDialog = (function ($) {

    // Creating modal dialog's DOM
	var $dialog = $(
		'<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
		'<div class="modal-dialog modal-m">' +
		'<div class="modal-content">' +
			'<div class="modal-header"><h3 style="margin:0;"></h3></div>' +
			'<div class="modal-body">' +
				'<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' +
			'</div>' +
		'</div></div></div>');

	return {
		/**
		 * Opens our dialog
		 * @param message Custom message
		 * @param options Custom options:
		 * 				  options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
		 * 				  options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
		 */
		show: function (message, options) {
			// Assigning defaults
			var settings = $.extend({
				dialogSize: 'm',
				progressType: ''
			}, options);
			if (typeof message === 'undefined') {
				message = 'Loading';
			}
			if (typeof options === 'undefined') {
				options = {};
			}
			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
			$dialog.find('.progress-bar').attr('class', 'progress-bar');
			if (settings.progressType) {
				$dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
			}
			$dialog.find('h3').text(message);
			// Opening dialog
			$dialog.modal();
		},
		/**
		 * Closes dialog
		 */
		hide: function () {
			$dialog.modal('hide');
		}
	}

})(jQuery);