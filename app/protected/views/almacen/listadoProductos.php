<?php
//=================================================================================
// CONFIGURACIONES DEL MODULO
//=================================================================================
//Titulo de la pagina
$this->pageTitle=Yii::app()->name . ' - Modulo de Almacen';
// Titulo del modulo
$this->moduleTitle="Modulo de Almacen";
// Subtitulo del modulo
$this->moduleSubTitle="Productos";
// Breadcrumbs
$this->breadcrumbs=array(
	'Productos',
);?>

<div class='box box-default'>
	<div class='box-header with-border'>
    	<h3 class='box-title'><i class="fa fa-archive"></i> Listado de Productos</h3>
    </div>
    <div class='box-body'>
      <button type="button" class="btn btn-default" id="AgregarProducto"> <i class="fa fa-plus "></i> Agregar Productos</button>
    	<?php
                  $this->widget('zii.widgets.grid.CGridView', array(
                    'id'=>'tablareporte',
                    //'filter'=>true,
                    'htmlOptions'=>array('class'=>'table-responsive'),
                    'itemsCssClass' => 'table table-bordered table-hover',
                    'dataProvider'=>$dataProvider,
                    'summaryText'=>'Mostrando {start}-{end} de {page} Resultado(s)',
                    'emptyText'=>'No se encontraron registros para esta consulta...',
                    'columns'=>array(
                     /* array(
                           'name'=>'IdProducto',
                           'value'=>'$data->idProducto',
                       ),*/
                      array(
                           'name'=>'Descripaci&oacute;n',
                           'value'=>'$data->desc_Prod',
                       ),
                        array(
                           'name'=>'Marca',
                           'value'=>'$data->marca->nomMarca',
                       ),
                        array(
                           'name'=>'Categoria',
                           'value'=>'$data->categoria->nomCategoria',
                       ),                      
                        array(
                           'name'=>'Presentaci&oacute;n',
                           'value'=>'$data->presentacion',
                       ),array(
                           'name'=>'Tipo',
                           'value'=>'($data->tipoProd==1)?"No Perecible":"Perecible"',
                       ),array(
                           'name'=>'Stock',
                           'value'=>'$data->stock',
                       ),array(
                           'name'=>'Fecha de Creaci&oacute;n',
                           'value'=>'$data->fecha_creacion',
                       ),array(
                           'name'=>'Estado',
                           'value'=>'($data->estadoProd==1)?"Vigente":"Caducado"',
                       ),
                      array(
                        'class'=>'CButtonColumn',
                        'template'=>'{visualizar}&nbsp;&nbsp;&nbsp;{editar}&nbsp;&nbsp;&nbsp;{eliminar}',
                        //'template'=>'{visualizar}&nbsp;&nbsp;&nbsp;{editar}&nbsp;&nbsp;&nbsp;{eliminar}{activar}',
                        'buttons'=>array(
                            'visualizar' => array(
                                'label'=>'Ver más información',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/ver_16x16.png',
                                'options'=>array('class'=>'verProducto'),
                                //'url'=>'Yii::app()->createUrl("users/email", array("id"=>$data->ide_persona))',
                                'url'=>'$data->idProducto',
                                //'click'=>"function(){levantaModal('$data->ide_persona');}",
                            ),
                            'editar' => array(
                                'label'=>'Editar Producto',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/edit_16x16.png',
                                'options'=>array('class'=>'editarProducto'),
                                'url'=>'$data->idProducto',
                                //'visible'=>'$data->ide_persona > 0',
                                //'click'=>'function(){alert("Going down!");}',
                            ),
                            'eliminar' => array(
                                'label'=>'Eliminar Producto',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/delete_16x16.png',
                                'options'=>array('class'=>'eliminarProducto'),
                                'url'=>'$data->idProducto',
                                //'visible'=>'$data->stado == V',
                                //'click'=>'function(){alert("Going down!");}',
                            ),/*
                            'activar' => array(
                                'label'=>'Activar Producto',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/ok_16x16.png',
                                'options'=>array('class'=>'sis-activar'),
                                'url'=>'$data->idProducto',
                                //'visible'=>'$data->stado == C',
                                //'click'=>'function(){alert("Going down!");}',
                            ),*/
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
<button type="button" class="btn btn-primary" id="btnNewProducto" data-toggle="modal" data-target="#ModalnewProducto" >Open modal for @mdo</button>
<!-- Modal -->
        <div class="modal fade" id="ModalnewProducto" tabindex="-1" role="dialog" aria-labelledby="myModalEditarEmpleadoLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <!-- Cabecera -->
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" onclick="$('#myModalEditarEmpleado').modal('hide');" ><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title" id="myModalEditarEmpleadoLabel">Nuevo Producto<img class="loading-small-precarga" style="display: none;" src="<?php echo Yii::app()->theme->baseUrl;?>/dist/img/loading.gif" /></h4>
              </div>
              <!-- /Cabecera -->
              <div class="modal-body">
                <form id="empleadoForm" method="post"  class="form-horizontal"   target="empleadoPG" >                  
                 

                  <div class="form-group">
                    <label class="col-lg-4 control-label">Marca:</label>
                    <div class="col-lg-7">
                      <select class="form-control" name="selEstadoCivil" id="Lista_Marcas"></select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-lg-4 control-label">Categoría:</label>
                    <div class="col-lg-7">
                      <select class="form-control" name="selEstadoCivil" id="Lista_Caterorias"></select>
                    </div>
                  </div>

                  <input type="hidden" id="idSegusuario" name="idSegusuario" >
                  <div role="alert" hidden="false" id="mensaje-succes-usuario-div">
                    <span id="mensaje-succes-usuario"></span>
                  </div>

                  <div class="form-group">
                    <div class="col-md-5 col-md-offset-3">
                      <button type="submit" class="btn btn-primary">Registrar</button>
                      <button   id="cerrarmodal" class="btn btn-primary"    data-dismiss="modal" rel="tooltip" title="Cerrar"
                      >Cerrar</button>
                    </div>
                  </div>
                </form><!-- /# usuarioForm -->

                <iframe name="empleadoPG" style="display: none;"></iframe>

              </div><!-- /.modal-body -->

              <div class="alert alert-dismissable alert-danger" id="message_save_usuario" style="display: none;">
                <button type="button" class="close" data-dismiss="alert" >x</button>
                <strong></strong>
              </div>

            </div><!-- /. modal-content -->
          </div><!-- /. modal-dialog-->

          <iframe name="saveGp" style="display: none;"></iframe>
        </div><!-- /#myModalEditarEmpleado -->


        <div class="modal fade" id="dialogUsuarioModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                </button>
                <h4 class="modal-title">Eliminar Usuario</h4>
              </div>
              <div class="modal-body">
                <p>Estas seguro de eliminar el usuario?</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
                <button type="button" class="btn btn-primary btnEliminar" id="btneliminar" value="" lang=""
                onclick="javascript:coreFn.confirmEliminarUsuario(this);">Si</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->