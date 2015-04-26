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
		             '<div class="col-md-7"><span class="help-block">'+data.desc_Prod+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Presentacion :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.presentacion+'</span></div> ' +
		             '</div> ' +		           
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Tipo de Producto :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.tipoProd+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Stock :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.stock +'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Marca :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.nomMarca+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Categoria :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.nomCategoria+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">fecha_creacion :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.fecha_creacion+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">estadoProd :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.estadoProd+'</span></div> ' +
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
