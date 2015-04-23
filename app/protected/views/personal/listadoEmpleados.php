<?php
//=================================================================================
// CONFIGURACIONES DEL MODULO
//=================================================================================
//Titulo de la pagina
$this->pageTitle=Yii::app()->name . ' - Modulo de Personal';
// Titulo del modulo
$this->moduleTitle="Modulo de Personal";
// Subtitulo del modulo
$this->moduleSubTitle="Personal";
// Breadcrumbs
$this->breadcrumbs=array(
	'Personal',
);?>

<!-- Main content -->
        <section class="content">
          <div class="row">
            <div class="col-xs-12">
              <div class="box">
                <div class='box-header with-border'>
                  <h3 class='box-title'><i class="fa fa-user"></i> Listado de Empleados</h3>
                </div>
                <div class="box-body">
                  <?php
                  $this->widget('zii.widgets.grid.CGridView', array(
                    'id'=>'tablareporte',
                    //'filter'=>true,
                    'htmlOptions'=>array('class'=>'table-responsive'),
                    'itemsCssClass' => 'table table-bordered table-hover',
                    'dataProvider'=>$empleados,
                    'summaryText'=>'Mostrando {start}-{end} de {page} Resultado(s)',
                    'emptyText'=>'No se encontraron registros para esta consulta...',
                    'columns'=>array(
                      array(
                           'name'=>'Nombres y Apellidos',
                           'value'=>'$data->des_nombres.\', \'.$data->des_apepat.\' \'.$data->des_apemat',
                       ),
                      array(
                           'name'=>'Fecha de Nacimiento',
                           //'value'=>Yii::app()->utiles->calculaEdad('$data->fec_nacimiento'),
                           'value'=>'date("d/m/Y", strtotime($data->fec_nacimiento))',
                       ),
                      array(
                           'name'=>'Nro. Documento',
                           'value'=>'$data->nro_documento',
                       ),
                      array(
                           'name'=>'Nro. Telefono',
                           'value'=>'$data->des_telefono',
                       ),
                      array(
                           'name'=>'Correo Electronico',
                           'value'=>'$data->des_correo',
                       ),
                      array(
                        'class'=>'CButtonColumn',
                        'template'=>'{visualizar}&nbsp;&nbsp;&nbsp;{editar}&nbsp;&nbsp;&nbsp;{eliminar}{activar}',
                        'buttons'=>array(
                            'visualizar' => array(
                                'label'=>'Ver más información',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/ver_16x16.png',
                                'options'=>array('class'=>'verMas'),
                                //'url'=>'Yii::app()->createUrl("users/email", array("id"=>$data->ide_persona))',
                                'url'=>'$data->ide_persona',
                                //'click'=>"function(){levantaModal('$data->ide_persona');}",
                            ),
                            'editar' => array(
                                'label'=>'Editar Empleado',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/edit_16x16.png',
                                'options'=>array('class'=>'sis-editar'),
                                'url'=>'$data->ide_persona',
                                //'visible'=>'$data->ide_persona > 0',
                                //'click'=>'function(){alert("Going down!");}',
                            ),
                            'eliminar' => array(
                                'label'=>'Eliminar Empleado',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/delete_16x16.png',
                                'options'=>array('class'=>'sis-eliminar'),
                                'url'=>'$data->ide_persona',
                                'visible'=>'$data->ide_estado == 1',
                                //'click'=>'function(){alert("Going down!");}',
                            ),
                            'activar' => array(
                                'label'=>'Activar Empleado',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/ok_16x16.png',
                                'options'=>array('class'=>'sis-activar'),
                                'url'=>'$data->ide_persona',
                                'visible'=>'$data->ide_estado == 0',
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
                </div><!-- /.box-body -->
              </div><!-- /.box -->
            </div><!-- /.col -->
          </div><!-- /.row -->
        </section><!-- /.content -->
