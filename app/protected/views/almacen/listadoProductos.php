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
                           'name'=>'Descripación',
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
                           'name'=>'Presentación',
                           'value'=>'$data->presentacion',
                       ),array(
                           'name'=>'Tipo',
                           'value'=>'($data->tipoProd==1)?"Perecible":"No Perecible"',
                       ),array(
                           'name'=>'Stock',
                           'value'=>'$data->stock',
                       ),array(
                           'name'=>'Fecha de Creación',
                           'value'=>'$data->fecha_creacion',
                       ),array(
                           'name'=>'Estado',
                           'value'=>'($data->estadoProd==1)?"VIGENTE":"CADUCADO"',
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