<?php
//=================================================================================
// CONFIGURACIONES DEL MODULO
//=================================================================================
//Titulo de la pagina
$this->pageTitle=Yii::app()->name . ' - Modulo de Ventas';
// Titulo del modulo
$this->moduleTitle="Modulo de Ventas";
// Subtitulo del modulo
$this->moduleSubTitle="Clientes";
// Breadcrumbs
$this->breadcrumbs=array(
	'Clientes',
);?>

<div class='box box-default'>
	<div class='box-header with-border'>
    	<h3 class='box-title'><i class="fa fa-users"></i> Listado de Clientes</h3>
    </div>
    <div class='box-body'>
     <button type="button" class="btn btn-default" id="btnNewCliente" data-toggle="modal" data-target="#ModalnewCliente" ><i class="fa fa-plus "></i> Agregar Cliente</button>
      
    	<?php
                  $this->widget('zii.widgets.grid.CGridView', array(
                    'id'=>'tablareporte',
                    //'filter'=>true,
                    'htmlOptions'=>array('class'=>'table-responsive'),
                    'itemsCssClass' => 'table table-bordered table-hover',
                    'dataProvider'=>$clientes,
                    'summaryText'=>'Mostrando {start}-{end} de {page} Resultado(s)',
                    'emptyText'=>'No se encontraron registros para esta consulta...',
                    'columns'=>array(
                      array(
                           'name'=>'Nombre o RasonSocial',
                           'value'=>'$data->RazSoc_Cli',
                       ),
                      array(
                           'name'=>'tipoPersona',
                           'value'=>'($data->tipoPersona_Cli==1)?"JURIDICA":"NATURAL"',
                       ),
                      array(
                           'name'=>'RUC',
                           'value'=>'$data->ruc_Cli',
                       ),array(
                           'name'=>'direccion',
                           'value'=>'$data->direccion_Cli',
                       ),array(
                           'name'=>'telefono',
                           'value'=>'$data->telefono_Cli',
                       ),array(
                           'name'=>'email',
                           'value'=>'$data->email_Cli',
                       ),array(
                           'name'=>'fechaInsc',
                           'value'=>'$data->fec_reg_Cli',
                       ),
                       array(
                           'name'=>'stado',
                           'value'=>'($data->estado_Cli==1)?"Activo":"Inactivo"',
                       ),
                      array(
                        'class'=>'CButtonColumn',
                        'template'=>'{visualizar}&nbsp;&nbsp;&nbsp;{editar}&nbsp;&nbsp;&nbsp;{eliminar}{activar}',
                        'buttons'=>array(
                            'visualizar' => array(
                                'label'=>'Ver más información',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/ver_16x16.png',
                                'options'=>array('class'=>'verCliente'),
                                //'url'=>'Yii::app()->createUrl("users/email", array("id"=>$data->ide_persona))',
                                'url'=>'$data->idCliente',
                                //'click'=>"function(){levantaModal('$data->ide_persona');}",
                            ),
                            'editar' => array(
                                'label'=>'Editar Cliente',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/edit_16x16.png',
                                'options'=>array('class'=>'editarCliente','id'=>'editarCliente','data-target'=>'#ModalActualizarCliente'),
                                'url'=>'$data->idCliente',
                                //'visible'=>'$data->ide_persona > 0',
                                //'click'=>'function(){alert("Going down!");}',
                            ),
                            'eliminar' => array(
                                'label'=>'Eliminar Cliente',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/delete_16x16.png',
                                'options'=>array('class'=>'desactivarCliente'),
                                'url'=>'$data->idCliente',
                                'visible'=>'$data->estado_Cli == 1',
                                //'click'=>'function(){alert("Going down!");}',
                            ),
                            'activar' => array(
                                'label'=>'Activar Cliente',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/ok_16x16.png',
                                'options'=>array('class'=>'activarCliente'),
                                'url'=>'$data->idCliente',
                                'visible'=>'$data->estado_Cli == 0',
                                //'click'=>'function(){alert("Going down!");}',
                            ),
                        ),
                        'htmlOptions'=>array('style'=>'white-space:nowrap;text-align:center;'),
                      ),
                    ),
                    'pager'=>array(
                        'header'         => '',
                        'firstPageLabel' => '&lt;&lt;',
                        'prevPageLabel'  => 'Anterior',
                        'nextPageLabel'  => 'Siguiente',
                        'lastPageLabel'  => '&gt;&gt;',
                        // css class         
                        'firstPageCssClass'=>'pager_first',//default "first"
                        'lastPageCssClass'=>'pager_last',//default "last"
                        'previousPageCssClass'=>'pager_previous',//default "previours"
                        'nextPageCssClass'=>'pager_next',//default "next"
                        'internalPageCssClass'=>'pager_li',//default "page"
                        'selectedPageCssClass'=>'pager_selected_li',//default "selected"
                        'hiddenPageCssClass'=>'pager_hidden_li',//default "hidden" 
                        'htmlOptions'=>array(
                          'class'=>'pagination',
                          'style'=>'',
                          'id'=>'mypager_id'
                        ),
                    ),
                   ));
                   ?>
	</div>
</div>

<!-- MODAL -->
<!-- Modal -->
<div class="modal fade" id="ModalnewCliente" tabindex="-1" role="dialog" aria-labelledby="myModalRegistrarcliente" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Cabecera -->
      <div class="modal-header">
        <button type="button" class="close close_modal" data-dismiss="modal" ><span aria-hidden="true">&times;</span><span class="sr-only ">Close</span></button>
        <h4 class="modal-title" id="modalTitle">Nuevo Cliente</h4>
      </div>
      <!-- /Cabecera -->
 <div class="alert alert-dismissable " id="message_save_Cliente" style="display: none;">
    
</div>
<div class="modal-body">
<form id="newClienteForm" method="post"  class="form-horizontal"   target="" >                  
<div class="form-group">
<label class="col-md-4 control-label" for="RazSoc_Cli">Nombre o Razón Social:</label>
<div class="col-lg-7">
<input id="add_RazSoc_Cli" name="add_RazSoc_Cli" type="text" placeholder="" class="form-control input-md" value="">
        
      </div>
</div>
<div class="form-group">
<label class="col-md-4 control-label" for="tipoPersona">Tipo de Persona:</label>
<div class="col-md-7">
<select class="form-control" name="add_tipoPersona_Cli" id="add_tipoPersona_Cli">
          
          <option value="">Seleccione un tipo de Persona</option>
          <option value="0">Natural</option>
          <option value="1" >Juridica</option>
</select>
</div>
</div>
<div class="form-group">
<label class="col-md-4 control-label" for="RUC">RUC:</label>
<div class="col-md-7">
<input id="add_ruc_Cli" name="add_ruc_Cli" type="text" placeholder="RUC" class="form-control input-md" value="" onkeydown="return validarNumeros(event)">
</div>
</div>
<div class="form-group">
<label class="col-md-4 control-label" for="direccion">direccion:</label>
<div class="col-md-7">
<input id="add_direccion_Cli" name="add_direccion_Cli" type="text" placeholder="direccion" class="form-control input-md" value="">
</div>
</div>
<div class="form-group">
<label class="col-md-4 control-label" for="telefono_Cli">telefono:</label>
<div class="col-md-7">
<input id="add_telefono_Cli" name="add_telefono_Cli" type="text" placeholder="telefono" class="form-control input-md" value=""  onkeydown="return validarNumeros(event)">
</div>
</div>
<div class="form-group">
<label class="col-md-4 control-label" for="email">email:</label>
<div class="col-md-7">
<input id="add_email_Cli" name="add_email_Cli" type="text" placeholder="email" class="form-control input-md" value="">
</div>
</div>
  
   

    <div class="form-group">
      <div class="col-md-5 col-md-offset-3">
        <button class="btn btn-primary" id="btnRegistrarCliente">Registrar</button>
        <button   id="cerrarmodal" class="close_modal btn btn-danger"    data-dismiss="modal" rel="tooltip" title="Cerrar"
        >Cerrar</button>
      </div>
    </div>
  </form><!-- /# usuarioForm -->

</div><!-- /.modal-body -->

     

    </div><!-- /. modal-content -->
  </div><!-- /. modal-dialog-->

</div><!-- /#myModalEditarEmpleado -->





<!-- ACTUALIZAR CLIENTE -->
<!-- MODAL -->
<!-- Modal -->
<div class="modal fade" id="ModalActualizarCliente" tabindex="-1" role="dialog" aria-labelledby="myModalActualizarcliente" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Cabecera -->
      <div class="modal-header">
        <button type="button" class="close close_modal" data-dismiss="modal" ><span aria-hidden="true">&times;</span><span class="sr-only ">Close</span></button>
        <h4 class="modal-title" id="modalTitle">Actualizar Cliente</h4>
      </div>
      <!-- /Cabecera -->
 <div class="alert alert-dismissable " id="message_upd_Cliente" style="display: none;">
    
</div>
<div class="modal-body">
<form id="newProductoForm" method="post"  class="form-horizontal"   target="" > 
 <input type="hidden" class="form-control" id="upd_idCliente"   name="upd_idCliente"  >                 
<div class="form-group">
<label class="col-md-4 control-label" for="RazSoc_Cli">Nombre o Razón Social:</label>
<div class="col-lg-7">
<input id="upd_RazSoc_Cli" name="upd_RazSoc_Cli" type="text" placeholder="" class="form-control input-md" value="">
        
      </div>
</div>
<div class="form-group">
<label class="col-md-4 control-label" for="tipoPersona">Tipo de Persona:</label>
<div class="col-md-7">
<select class="form-control" name="upd_tipoPersona_Cli" id="upd_tipoPersona_Cli">
          
          <option value="">Seleccione un tipo de Persona</option>
          <option value="0">Natural</option>
          <option value="1" >Juridica</option>
</select>
</div>
</div>
<div class="form-group">
<label class="col-md-4 control-label" for="RUC">RUC:</label>
<div class="col-md-7">
<input id="upd_ruc_Cli" name="upd_ruc_Cli" type="text" placeholder="RUC" class="form-control input-md" value="" onkeydown="return validarNumeros(event)">
</div>
</div>
<div class="form-group">
<label class="col-md-4 control-label" for="direccion">direccion:</label>
<div class="col-md-7">
<input id="upd_direccion_Cli" name="upd_direccion_Cli" type="text" placeholder="direccion" class="form-control input-md" value="">
</div>
</div>
<div class="form-group">
<label class="col-md-4 control-label" for="telefono_Cli">telefono:</label>
<div class="col-md-7">
<input id="upd_telefono_Cli" name="upd_telefono_Cli" type="text" placeholder="telefono" class="form-control input-md" value="" onkeydown="return validarNumeros(event)">
</div>
</div>
<div class="form-group">
<label class="col-md-4 control-label" for="email">email:</label>
<div class="col-md-7">
<input id="upd_email_Cli" name="upd_email_Cli" type="text" placeholder="email" class="form-control input-md" value="">
</div>
</div>
<div class="form-group">
<label class="col-lg-4 control-label">Estado:</label>
<div class="col-lg-7">
<div class="checkbox">
<label>
<input type="checkbox" name="upd_estado_Cli" id="upd_estado_Cli"><span id="upd_txtestado_Cli"></span>
</label>
</div>
</div>
</div>   
   

    <div class="form-group">
      <div class="col-md-5 col-md-offset-3">
        <button class="btn btn-primary" id="btnActualizarCliente">Registrar</button>
        <button   id="cerrarmodal" class="close_modal btn btn-danger"    data-dismiss="modal" rel="tooltip" title="Cerrar"
        >Cerrar</button>
      </div>
    </div>
  </form><!-- /# usuarioForm -->

</div><!-- /.modal-body -->

     

    </div><!-- /. modal-content -->
  </div><!-- /. modal-dialog-->

</div><!-- /#myModalEditarEmpleado -->
    <style>
      .no_selected{
         border-color: #a94442;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      }
        </style>