<?php
//=================================================================================
// CONFIGURACIONES DEL MODULO
//=================================================================================
//Titulo de la pagina
$this->pageTitle=Yii::app()->name . ' - Modulo de Compras';
// Titulo del modulo
$this->moduleTitle="Modulo de Compras";
// Subtitulo del modulo
$this->moduleSubTitle="Proveedores";
// Breadcrumbs
$this->breadcrumbs=array(
	'Proveedores',
);?>

<div class='box box-default'>
	<div class='box-header with-border'>
    	<h3 class='box-title'><i class="fa fa-truck"></i> Listado de Proveedores</h3>
    </div>
    <div class='box-body'>
      
       <button type="button" class="btn btn-default" id="btnNewProveedor" data-toggle="modal" data-target="#ModalnewProveedor" ><i class="fa fa-plus "></i> Agregar Proveedor</button>
      
    	<?php
                  $this->widget('zii.widgets.grid.CGridView', array(
                    'id'=>'tablareporte',
                    //'filter'=>true,
                    'htmlOptions'=>array('class'=>'table-responsive'),
                    'itemsCssClass' => 'table table-bordered table-hover',
                    'dataProvider'=>$proveedores,
                    'summaryText'=>'Mostrando {start}-{end} de {page} Resultado(s)',
                    'emptyText'=>'No se encontraron registros para esta consulta...',
                    'columns'=>array(
                      array(
                           'name'=>'Nombre o RasonSocial',
                           'value'=>'$data->RazSoc_Prov',
                       ),
                      array(
                           'name'=>'tipoPersona',
                           'value'=>'($data->tipoPersona_Prov==1)?"JURIDICA":"NATURAL"',
                       ),
                      array(
                           'name'=>'RUC',
                           'value'=>'$data->ruc_Prov',
                       ),array(
                           'name'=>'direccion',
                           'value'=>'$data->direccion_Prov',
                       ),array(
                           'name'=>'telefono',
                           'value'=>'$data->telefono_Prov',
                       ),array(
                           'name'=>'email',
                           'value'=>'$data->email_Prov',
                       ),array(
                           'name'=>'fechaInsc',
                           'value'=>'$data->fec_reg_Prov',
                       ),
                       array(
                           'name'=>'stado',
                           'value'=>'($data->estado_Prov==1)?"Activo":"Inactivo"',
                       ),
                      array(
                        'class'=>'CButtonColumn',
                        'template'=>'{visualizar}&nbsp;&nbsp;&nbsp;{editar}&nbsp;&nbsp;&nbsp;{eliminar}{activar}',
                        'buttons'=>array(
                            'visualizar' => array(
                                'label'=>'Ver más información',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/ver_16x16.png',
                                'options'=>array('class'=>'verProveedor'),
                                //'url'=>'Yii::app()->createUrl("users/email", array("id"=>$data->ide_persona))',
                                'url'=>'$data->idProveedor',
                                //'click'=>"function(){levantaModal('$data->ide_persona');}",
                            ),
                            'editar' => array(
                                'label'=>'Editar Proveedor',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/edit_16x16.png',
                                'options'=>array('class'=>'editarProveedor','id'=>'editarProveedor','data-target'=>'#ModalActualizarProveedor'),
                                'url'=>'$data->idProveedor',
                                //'visible'=>'$data->ide_persona > 0',
                                //'click'=>'function(){alert("Going down!");}',
                            ),
                            'eliminar' => array(
                                'label'=>'Eliminar Proveedor',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/delete_16x16.png',
                                'options'=>array('class'=>'desactivarProveedor'),
                                'url'=>'$data->idProveedor',
                                'visible'=>'$data->estado_Prov == 1',
                                //'click'=>'function(){alert("Going down!");}',
                            ),
                            'activar' => array(
                                'label'=>'Activar Producto',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/ok_16x16.png',
                                'options'=>array('class'=>'activarProveedor'),
                                'url'=>'$data->idProveedor',
                                'visible'=>'$data->estado_Prov == 0',
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
<div class="modal fade" id="ModalnewProveedor" tabindex="-1" role="dialog" aria-labelledby="myModalRegistrarProveedor" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Cabecera -->
      <div class="modal-header">
        <button type="button" class="close close_modal" data-dismiss="modal" ><span aria-hidden="true">&times;</span><span class="sr-only ">Close</span></button>
        <h4 class="modal-title" id="modalTitle">Nuevo Proveedor</h4>
      </div>
      <!-- /Cabecera -->
 <div class="alert alert-dismissable " id="message_save_Proveedor" style="display: none;">
    
</div>
<div class="modal-body">
<form id="newProveedorForm" method="post"  class="form-horizontal"   target="" >                  
<div class="form-group">
<label class="col-md-4 control-label" for="RazSoc_Prov">Nombre o Razón Social:</label>
<div class="col-lg-7">
<input id="add_RazSoc_Prov" name="add_RazSoc_Prov" type="text" placeholder="" class="form-control input-md" value="">
        
      </div>
</div>
<div class="form-group">
<label class="col-md-4 control-label" for="tipoPersona">Tipo de Persona:</label>
<div class="col-md-7">
<select class="form-control" name="add_tipoPersona_Prov" id="add_tipoPersona_Prov">
          
          <option value="">Seleccione un tipo de Persona</option>
          <option value="0">Natural</option>
          <option value="1" >Juridica</option>
</select>
</div>
</div>
<div class="form-group">
<label class="col-md-4 control-label" for="RUC">RUC:</label>
<div class="col-md-7">
<input id="add_ruc_Prov" name="add_ruc_Prov" type="text" placeholder="RUC" class="form-control input-md" value="">
</div>
</div>


<div class="form-group">
<label class="col-lg-4 control-label">Dirección:</label>
<div class="col-lg-7">
<div class="input-group">
<div class="input-group-addon">
<i class="fa fa-location-arrow"></i>
</div>
<input type="text" name="add_direccion_Prov" id="add_direccion_Prov" class="form-control" placeholder="Dirección"/>
</div>
</div>
</div>


<div class="form-group">
<label class="col-lg-4 control-label">Teléfono:</label>
<div class="col-lg-7">
<div class="input-group">
<div class="input-group-addon">
<i class="fa fa-phone"></i>
</div>
<input type="text" name="add_telefono_Prov" id="add_telefono_Prov" class="form-control" data-inputmask='"mask": "(99) 302-5902"' data-mask/>
</div>
</div>
</div>


<div class="form-group">
<label class="col-lg-4 control-label">Correo electrónico:</label>
<div class="col-lg-7">
<div class="input-group">
<span class="input-group-addon">@</span>
<input type="text" name="add_email_Prov" id="add_email_Prov" class="form-control" placeholder="Correo electronico">
</div>
</div>
</div>
  
   

    <div class="form-group">
      <div class="col-md-5 col-md-offset-3">
        <button class="btn btn-primary" id="btnRegistrarProveedor"><i class="fa fa-floppy-o"></i> Registrar</button>
        <button   id="cerrarmodal" class="close_modal btn btn-danger"    data-dismiss="modal" rel="tooltip" title="Cerrar"
        ><i class="fa fa-times"></i> Cerrar</button>
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
<div class="modal fade" id="ModalActualizarProveedor" tabindex="-1" role="dialog" aria-labelledby="myModalActualizarProveedor" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Cabecera -->
      <div class="modal-header">
        <button type="button" class="close close_modal" data-dismiss="modal" ><span aria-hidden="true">&times;</span><span class="sr-only ">Close</span></button>
        <h4 class="modal-title" id="modalTitle">Actualizar Proveedor</h4>
      </div>
      <!-- /Cabecera -->
 <div class="alert alert-dismissable " id="message_upd_Proveedor" style="display: none;">
    
</div>
<div class="modal-body">
<form id="updProveedorForm" method="post"  class="form-horizontal"   target="" > 
 <input type="hidden" class="form-control" id="upd_idProveedor"   name="upd_idProveedor"  >                 
<div class="form-group">
<label class="col-md-4 control-label" for="RazSoc_Prov">Nombre o Razón Social:</label>
<div class="col-lg-7">
<input id="upd_RazSoc_Prov" name="upd_RazSoc_Prov" type="text" placeholder="" class="form-control input-md" value="">
        
      </div>
</div>
<div class="form-group">
<label class="col-md-4 control-label" for="tipoPersona">Tipo de Persona:</label>
<div class="col-md-7">
<select class="form-control" name="upd_tipoPersona_Prov" id="upd_tipoPersona_Prov">
          
          <option value="">Seleccione un tipo de Persona</option>
          <option value="0">Natural</option>
          <option value="1" >Juridica</option>
</select>
</div>
</div>
<div class="form-group">
<label class="col-md-4 control-label" for="RUC">RUC:</label>
<div class="col-md-7">
<input id="upd_ruc_Prov" name="upd_ruc_Prov" type="text" placeholder="RUC" class="form-control input-md" value="">
</div>
</div>

<div class="form-group">
<label class="col-lg-4 control-label">Dirección:</label>
<div class="col-lg-7">
<div class="input-group">
<div class="input-group-addon">
<i class="fa fa-location-arrow"></i>
</div>
<input type="text" name="upd_direccion_Prov" id="upd_direccion_Prov" class="form-control" placeholder="Dirección"/>
</div>
</div>
</div>



<div class="form-group">
<label class="col-lg-4 control-label">Teléfono:</label>
<div class="col-lg-7">
<div class="input-group">
<div class="input-group-addon">
<i class="fa fa-phone"></i>
</div>
<input type="text" name="upd_telefono_Prov" id="upd_telefono_Prov" class="form-control" data-inputmask='"mask": "(99) 302-5902"' data-mask/>
</div>
</div>
</div>



<div class="form-group">
<label class="col-lg-4 control-label">Correo electrónico:</label>
<div class="col-lg-7">
<div class="input-group">
<span class="input-group-addon">@</span>
<input type="text" name="upd_email_Prov" id="upd_email_Prov" class="form-control" placeholder="Correo electronico">
</div>
</div>
</div>


<div class="form-group">
<label class="col-lg-4 control-label">Estado:</label>
<div class="col-lg-7">
<div class="checkbox">
<label>
<input type="checkbox" name="upd_estado_Prov" id="upd_estado_Prov"><span id="upd_txtestado_Prov"></span>
</label>
</div>
</div>
</div>   
   

    <div class="form-group">
      <div class="col-md-5 col-md-offset-3">
        <button class="btn btn-primary" id="btnActualizarProveedor"><i class="fa fa-floppy-o"></i> Registrar</button>
        <button   id="cerrarmodal" class="close_modal btn btn-danger"    data-dismiss="modal" rel="tooltip" title="Cerrar"
        ><i class="fa fa-times"></i> Cerrar</button>
      </div>
    </div>
  </form><!-- /# usuarioForm -->

</div><!-- /.modal-body -->

     

    </div><!-- /. modal-content -->
  </div><!-- /. modal-dialog-->

</div><!-- /#myModalEditarEmpleado -->