
$(document).on("click", "#btnNewProducto", function() {

            $.post("index.php?r=almacen/AjaxListarMarcas", function(marcas) {
                // obtenemos el combo de ciudades
                var $comboMarcas= $(".Lista_Marcas");
                // lo vaciamos
                $comboMarcas.empty();
                //console.log(marcas);
                // iteramos a través del arreglo de ciudades
                $comboMarcas.append("<option value=''>Seleccione Marca</option>");
                $.each(marcas, function(index, marca) {
                    // agregamos opciones al combo
                    $comboMarcas.append("<option value="+marca.idMarca+">" + marca.nomMarca + "</option>");
                });
            }, 'json');     

             $.post("index.php?r=almacen/AjaxListarCategorias", function(categorias) {
                var $comboCategorias= $(".Lista_Caterorias");

                $comboCategorias.empty();
              	$comboCategorias.append("<option value=''>Seleccione Categoría</option>");
                $.each(categorias, function(index, categoria) {
                    // agregamos opciones al combo
                    $comboCategorias.append("<option value="+categoria.idCategoria+">" + categoria.nomCategoria + "</option>");
                });
            }, 'json');    


	

});

jQuery.fn.reset = function () {
  $(this).each (function() { this.reset(); });
}

$('.close_modal').click(function(e) {
	e.preventDefault();
	$("#newProductoForm").reset();
	
});


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

jQuery.fn.no_select = function () {   
 
    if ($(this).val().trim() === '') {
       $(this).addClass('no_selected');
    }

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

$('#add_desc_Prod').no_text();
$('#add_presentacion').no_text();
$('#add_stock').no_text();


$('#add_tipoProd').no_selecteds();
$('#add_Lista_Caterorias').no_selecteds();
$('#add_Lista_Marcas').no_selecteds();

$('#upd_desc_Prod').no_text();
$('#upd_presentacion').no_text();
$('#upd_stock').no_text();


$('#upd_tipoProd').no_selecteds();
$('#upd_Lista_Caterorias').no_selecteds();
$('#upd_Lista_Marcas').no_selecteds();



  $("button#btnRegistrarProducto").click(function(e){

  	if ($('#add_desc_Prod').val().trim()==='') {
  		$('#add_desc_Prod').addClass('no_selected');
  	}else if($('#add_presentacion').val().trim()===''){
  		$('#add_presentacion').addClass('no_selected');
  	}else if($('#add_stock').val().trim()==='' ){
  		$('#add_stock').addClass('no_selected');
  	}else if($('#add_tipoProd').val().trim()===''){
$('#add_tipoProd').addClass('no_selected');
  	}else if($('#add_Lista_Caterorias').val().trim()===''){
$('#add_Lista_Caterorias').addClass('no_selected');
  	}else if($('#add_Lista_Marcas').val().trim()===''){
$('#add_Lista_Marcas').addClass('no_selected');
  	}else{

var desc_Prod =$("#add_desc_Prod").val();
var presentacion =$("#add_presentacion").val();
var tipoProd =$("#add_tipoProd").val();
var stock =$("#add_stock").val();
var idMarca =$("#add_Lista_Marcas").val();
var idCategoria =$("#add_Lista_Caterorias").val();


        $.ajax({
            type: "POST",
      url: "index.php?r=almacen/AjaxAgregarProducto",
      data: {desc_Prod:desc_Prod,presentacion:presentacion,tipoProd:tipoProd,stock:stock,idMarca:idMarca,idCategoria:idCategoria},
            success: function(resp){
            	data = resp.output;
            	console.log(data);
            	if(data.valor==1){
				 $("#message_save_Producto").show('easy', function() {
				 		$(this).addClass('alert-success');
				            	$(this).html('<button type="button" class="close" data-dismiss="alert" >x</button><strong>'+data.message+'</strong>')
				});				 
				 setTimeout(function() {
				 	$("#newProductoForm").reset();
				 	$("#ModalnewProducto").modal('hide');
				 	window.location.reload();
				 }, 1000);
            	}
            	if(data.valor==0){
            		 $("#message_save_Producto").show('easy', function() {
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
    }
e.preventDefault();

  });




// ====================================================================================
// METODO PARA AGREGAR UN PRODUCTO
// ====================================================================================




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


jQuery(document).ready(function() {
   $.post("index.php?r=almacen/AjaxListarMarcas", function(marcas) {
                // obtenemos el combo de ciudades
                var $comboMarcas= $(".Lista_Marcas_upd");
                // lo vaciamos
                $comboMarcas.empty();
                //console.log(marcas);
                // iteramos a través del arreglo de ciudades
                $comboMarcas.append("<option value=''>Seleccione Marca</option>");
                $.each(marcas, function(index, marca) {
                    // agregamos opciones al combo
                    $comboMarcas.append("<option value="+marca.idMarca+">" + marca.nomMarca + "</option>");
                });
            }, 'json');     

             $.post("index.php?r=almacen/AjaxListarCategorias", function(categorias) {
                var $comboCategorias= $(".Lista_Caterorias_upd");

                $comboCategorias.empty();
              	$comboCategorias.append("<option value=''>Seleccione Categoría</option>");
                $.each(categorias, function(index, categoria) {
                    // agregamos opciones al combo
                    $comboCategorias.append("<option value="+categoria.idCategoria+">" + categoria.nomCategoria + "</option>");
                });
            }, 'json');
});

$(document).on("click", ".editarProducto", function(e) {
	var codProducto = $(this).attr('href');
	e.preventDefault();

	$.ajax({
		url: 'index.php?r=almacen/AjaxObtenerProducto_upd',
		type: 'POST',		
		data: {idProducto: codProducto},
		success:function(resp){
			data = resp.output;	

			 setTimeout(function() {
			 	$("#upd_cod_Prod").attr('value',codProducto);
			 	$("#upd_desc_Prod").attr('value',data.desc_Prod);
				$("#upd_presentacion").attr('value',data.presentacion);
				$("#upd_stock").attr('value',data.stock);
				$("#upd_tipoProd option[value='"+data.tipoProd+"']").attr('selected','selected');
				$("#upd_Lista_Marcas option[value='"+data.idMarca+"']").attr('selected','selected');
				$(".Lista_Caterorias_upd option[value='"+data.idCategoria+"']").attr('selected','selected');
				if(data.estadoProd==1){
					$("#upd_stado").prop('checked', true);
					$('#upd_txtEstado').text('en Catálogo');
				}else{
					$("#upd_stado").prop('checked', false);
					$('#upd_txtEstado').text('Suspendido');
				}

				 }, 30);
		}
	})  

	$('#ModalActualizarProducto').modal('show');


	
});
$("button#btnActualizarProducto").click(function(e){

 
var desc_Prod =$("#upd_desc_Prod").val();
var presentacion =$("#upd_presentacion").val();
var tipoProd =$("#upd_tipoProd").val();
var stock =$("#upd_stock").val();
var idMarca =$("#upd_Lista_Marcas").val();
var idCategoria =$("#upd_Lista_Caterorias").val();
var idProducto =$("#upd_cod_Prod").val();
var upd_stado;
if($("#upd_stado").is(':checked')) {
			estadoProd=1;
		} else {
			estadoProd=0;
		}


        $.ajax({
            type: "POST",
      url: "index.php?r=almacen/AjaxActualizarProducto",
      data: {
      	idProducto:idProducto,
      	desc_Prod:desc_Prod,
      	presentacion:presentacion,
      	tipoProd:tipoProd,
      	stock:stock,
      	idMarca:idMarca,
      	idCategoria:idCategoria,
      	estadoProd:estadoProd
      },
       success: function(resp){
            	data = resp.output;
            	console.log(data);
            	if(data.valorupd==1){
				 $("#message_upd_Producto").show('easy', function() {
				 		$(this).addClass('alert-success');
				            	$(this).html('<button type="button" class="close" data-dismiss="alert" >x</button><strong>'+data.message+'</strong>')
				});				 
				 setTimeout(function() {
				 	$("#updProductoForm").reset();
				 	$("#ModalActualizarProducto").modal('hide');
				 	window.location.reload();
				 }, 1000);
            	}
            	if(data.valorupd==0){
            		 $("#message_upd_Producto").show('easy', function() {
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
		             '<div class="col-md-7"><span class="help-block">'+(data.tipoProd==1?"No Perecible":"Perecible")+'</span></div> ' +
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
		             '<div class="col-md-7"><span class="help-block">'+(data.estadoProd==1?"En Cátalogo":"Suspendido")+'</span></div> ' +
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
