
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