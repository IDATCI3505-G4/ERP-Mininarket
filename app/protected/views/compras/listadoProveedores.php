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
      <button type="button" class="btn btn-default" id="AgregarProveedor"> <i class="fa fa-plus "></i> Agregar Proveedores</button>
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
                           'name'=>'RasonSocial',
                           'value'=>'$data->RasonSocial',
                       ),
                      array(
                           'name'=>'tipoPersona',
                           'value'=>'$data->tipoPersona',
                       ),
                      array(
                           'name'=>'RUC',
                           'value'=>'$data->RUC',
                       ),array(
                           'name'=>'direccion',
                           'value'=>'$data->direccion',
                       ),array(
                           'name'=>'telefono',
                           'value'=>'$data->telefono',
                       ),array(
                           'name'=>'email',
                           'value'=>'$data->email',
                       ),array(
                           'name'=>'stado',
                           'value'=>'$data->stado',
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
                                'options'=>array('class'=>'editarproveedor','id'=>'editarproveedor'),
                                'url'=>'$data->idProveedor',
                                //'visible'=>'$data->ide_persona > 0',
                                //'click'=>'function(){alert("Going down!");}',
                            ),
                            'eliminar' => array(
                                'label'=>'Eliminar Proveedor',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/delete_16x16.png',
                                'options'=>array('class'=>'desactivarProveedor'),
                                'url'=>'$data->idProveedor',
                                'visible'=>'$data->stado == 1',
                                //'click'=>'function(){alert("Going down!");}',
                            ),
                            'activar' => array(
                                'label'=>'Activar Producto',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/ok_16x16.png',
                                'options'=>array('class'=>'activarProveedor'),
                                'url'=>'$data->idProveedor',
                                'visible'=>'$data->stado == 0',
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