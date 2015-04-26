$("#provincias").change(function() {
  
});

$(document).on("click", "#btnNewProducto", function() {

            $.post("index.php?r=almacen/AjaxListarMarcas", function(marcas) {
                // obtenemos el combo de ciudades
                var $comboMarcas= $(".Lista_Marcas");
                // lo vaciamos
                $comboMarcas.empty();
                //console.log(marcas);
                // iteramos a través del arreglo de ciudades
                $comboMarcas.append("<option>Seleccione Marca</option>");
                $.each(marcas, function(index, marca) {
                    // agregamos opciones al combo
                    $comboMarcas.append("<option value="+marca.idMarca+">" + marca.nomMarca + "</option>");
                });
            }, 'json');     

             $.post("index.php?r=almacen/AjaxListarCategorias", function(categorias) {
                var $comboCategorias= $(".Lista_Caterorias");

                $comboCategorias.empty();
              	$comboCategorias.append("<option>Seleccione Categoría</option>");
                $.each(categorias, function(index, categoria) {
                    // agregamos opciones al combo
                    $comboCategorias.append("<option value="+categoria.idCategoria+">" + categoria.nomCategoria + "</option>");
                });
            }, 'json');    


	

});



$('#newProductoForm').submit(function(e) {

var desc_Prod =$("#add_desc_Prod").val();
var presentacion =$("#add_presentacion").val();
var tipoProd =$("#add_tipoProd").val();
var stock =$("#add_stock").val();
var idMarca =$("#add_Lista_Marcas").val();
var idCategoria =$("#add_Lista_Caterorias").val();
	e.preventDefault();
	$.ajax({
		url: 'index.php?r=almacen/AjaxAgregarProducto',
		type: 'POST',		
		data: {desc_Prod:desc_Prod,presentacion:presentacion,tipoProd:tipoProd,stock:stock,idMarca:idMarca,idCategoria:idCategoria},
	})
	.done(function() {
		$("#mensaje_save_Producto").show();
		$("#text_save_Prod").html('Registro agregado Correctamente');
		location.reload();
	})
	.fail(function() {
		$("#mensaje_save_Producto").show();
		$("#text_save_Prod").html('Falla al Agregar Producto');
	})
	.always(function() {
		
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
// METODO PARA VER Llenar Marcas
// ====================================================================================



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
		             '<input id="descripcion" name="descripcion" type="text" placeholder="Descripcion" class="form-control input-md" value="'+data.desc_Prod+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="idProveedor">Presentación:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="idProveedor" name="idProveedor" type="text" placeholder="Proveedor" class="form-control input-md" value="'+data.presentacion+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="precioCompra">Tipo de Producto:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="precioCompra" name="precioCompra" type="text" placeholder="Precio de Compra" class="form-control input-md" value="'+data.tipoProd+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="precioVenta">Stock:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="precioVenta" name="precioVenta" type="number"  class="form-control input-md" value="'+data.stock+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="stock">Marca :</label>'+
		             '<div class="col-md-7">'+
		             '<input id="stock" name="stock" type="text" placeholder="stock" class="form-control input-md" value="'+data.nomMarca+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="fechaVencimiento">Categoría:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="fechaVencimiento" name="fechaVencimiento" type="text" placeholder="fechaVencimiento" class="form-control input-md" value="'+data.nomCategoria+'">'+
		             '</div>'+
		             '</div>'+
		             '<div class="form-group">'+
	                    '<label class="col-lg-4 control-label">Fecha de Creación:</label>'+
	                    '<div class="col-lg-7">'+	                     
	                      '<div class="input-group">'+
	                        '<div class="input-group-addon">'+
	                          '<i class="fa fa-calendar"></i>'+
	                        '</div>'+
	                        '<input name="fecNacimiento" id="fecNacimiento" type="text" class="form-control"  data-mask value="'+data.fecha_creacion+'"/>'+
	                      '</div>'+
	                    '</div>'+
	                '</div>'+	          

		             '<div class="form-group">'+
		             '<label class="col-md-4 control-label" for="stado">Estado:</label>'+
		             '<div class="col-md-7">'+
		             '<input id="stado" name="stado" type="text" placeholder="stado" class="form-control input-md" value="'+data.estadoProd+'">'+
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
		             '<label class="col-md-5 control-label" for="name">Presentaci&oacute;n :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.presentacion+'</span></div> ' +
		             '</div> ' +		           
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Tipo de Producto :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+(data.ide_estado==1?"No Perecible":"Perecible")+'</span></div> ' +
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
		             '<label class="col-md-5 control-label" for="name">Fecha de Creaci&oacute;n :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+data.fecha_creacion+'</span></div> ' +
		             '</div> ' +
		             '<div class="form-group"> ' +
		             '<label class="col-md-5 control-label" for="name">Estado :</label> ' +
		             '<div class="col-md-7"><span class="help-block">'+(data.ide_estado==1?"Vigente":"Caducado")+'</span></div> ' +
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
