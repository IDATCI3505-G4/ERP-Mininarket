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
      <button type="button" class="btn btn-default" id="btnNewProducto" data-toggle="modal" data-target="#ModalnewProducto" ><i class="fa fa-plus "></i> Agregar Producto</button>
      
    	<?php
                  $this->widget('zii.widgets.grid.CGridView', array(
                    'id'=>'item-grid',
                    //'ajaxUpdate'=>true,
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
                           'name'=>'Descripci&oacute;n',
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
                           'value'=>'($data->estadoProd==1)?"En cátalogo":"Suspendido"',
                       ),
                      array(
                        'class'=>'CButtonColumn',
                        //'template'=>'{visualizar}&nbsp;&nbsp;&nbsp;{editar}&nbsp;&nbsp;&nbsp;{eliminar}',
                        'template'=>'{visualizar}&nbsp;&nbsp;&nbsp;{editar}&nbsp;&nbsp;&nbsp;{eliminar}{activar}',
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
                                'options'=>array('class'=>'editarProducto','data-target'=>'#ModalActualizarProducto'),
                                'url'=>'$data->idProducto',
                                //'visible'=>'$data->ide_persona > 0',
                                //'click'=>'function(){alert("Going down!");}',
                            ),
                            'eliminar' => array(
                                'label'=>'Suspender Producto',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/delete_16x16.png',
                                'options'=>array('class'=>'desactivarProducto'),
                                'url'=>'$data->idProducto',
                                'visible'=>'$data->estadoProd == 1',
                                //'click'=>'function(){alert("Going down!");}',
                            ),
                            'activar' => array(
                                'label'=>'Activar Producto',
                                'imageUrl'=>Yii::app()->request->baseUrl.'/images/iconos/ok_16x16.png',
                                'options'=>array('class'=>'activarProducto'),
                                'url'=>'$data->idProducto',
                                'visible'=>'$data->estadoProd == 0',
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

<!-- Modal -->
<div class="modal fade" id="ModalnewMarca" tabindex="-1" role="dialog" aria-labelledby="myModalRegistrarMarca" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Cabecera -->
      <div class="modal-header">
        <button type="button" class="close close_modal" data-dismiss="modal" ><span aria-hidden="true">&times;</span><span class="sr-only ">Close</span></button>
        <h4 class="modal-title" id="modalTitle">Agregar Marca</h4>
      </div>
      <!-- /Cabecera -->
 <div class="alert alert-dismissable " id="message_save_Marca" style="display: none;">
    
</div>
<div class="modal-body">
  <form id="newMarcaForm" method="post"  class="form-horizontal"   target="" >                  
   
    <div class="form-group">
      <label class="col-lg-4 control-label">Nombre de la Categoria:</label>
      <div class="col-lg-7">
        <input type="text" class="form-control" id="add_nomMarca"   name="add_nomMarca" placeholder="Nombre de la Marca"  >
      </div>
    </div>   
 
   

    <div class="form-group">
      <div class="col-md-5 col-md-offset-3">
        <button class="btn btn-primary" id="btnRegistrarMarca">Registrar</button>
        <button   id="cerrarmodal" class="close_modal btn btn-danger"    data-dismiss="modal" rel="tooltip" title="Cerrar"
        >Cerrar</button>
      </div>
    </div>
  </form><!-- /# usuarioForm -->

</div><!-- /.modal-body -->

     

    </div><!-- /. modal-content -->
  </div><!-- /. modal-dialog-->

</div>

<!-- /#myModalEditarEmpleado --><!-- Modal -->
<div class="modal fade" id="ModalnewCategoria" tabindex="-1" role="dialog" aria-labelledby="myModalRegistrarCategoria" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Cabecera -->
      <div class="modal-header">
        <button type="button" class="close close_modal" data-dismiss="modal" ><span aria-hidden="true">&times;</span><span class="sr-only ">Close</span></button>
        <h4 class="modal-title" id="modalTitle">Agregar Categoria</h4>
      </div>
      <!-- /Cabecera -->
 <div class="alert alert-dismissable " id="message_save_Categoria" style="display: none;">
    
</div>
<div class="modal-body">
  <form id="newCategoriaForm" method="post"  class="form-horizontal"   target="" >                  
   
    <div class="form-group">
      <label class="col-lg-4 control-label">Nombre de la Categoria:</label>
      <div class="col-lg-7">
        <input type="text" class="form-control" id="add_nomCategoria"   name="add_nomCategoria" placeholder="Nombre de la Categoria"  >
      </div>
    </div>   
 
   

    <div class="form-group">
      <div class="col-md-5 col-md-offset-3">
        <button class="btn btn-primary" id="btnRegistrarCategoria">Registrar</button>
        <button   id="cerrarmodal" class="close_modal btn btn-danger"    data-dismiss="modal" rel="tooltip" title="Cerrar"
        >Cerrar</button>
      </div>
    </div>
  </form><!-- /# usuarioForm -->

</div><!-- /.modal-body -->

     

    </div><!-- /. modal-content -->
  </div><!-- /. modal-dialog-->

</div><!-- /#myModalEditarEmpleado -->


<!-- Modal -->
<div class="modal fade" id="ModalnewProducto" tabindex="-1" role="dialog" aria-labelledby="myModalRegistrarProducto" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Cabecera -->
      <div class="modal-header">
        <button type="button" class="close close_modal" data-dismiss="modal" ><span aria-hidden="true">&times;</span><span class="sr-only ">Close</span></button>
        <h4 class="modal-title" id="modalTitle">Nuevo Producto</h4>
      </div>
      <!-- /Cabecera -->
 <div class="alert alert-dismissable " id="message_save_Producto" style="display: none;">
    
</div>
<div class="modal-body">
  <form id="newProductoForm" method="post"  class="form-horizontal"   target="" >                  
   
    <div class="form-group">
      <label class="col-lg-4 control-label">Descripción:</label>
      <div class="col-lg-7">
        <input type="text" class="form-control" id="add_desc_Prod"   name="add_desc_Prod" placeholder="Descripción del Producto"  >
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-4 control-label">presentacion:</label>
      <div class="col-lg-7">
        <input type="text" class="form-control" id="add_presentacion"   name="add_presentacion" placeholder="Presentacion del Producto"  >
      </div>
    </div>
     <div class="form-group">
      <label class="col-lg-4 control-label">Tipo de Producto:</label>
       <div class="col-lg-7">

        <select class="form-control" name="add_tipoProd" id="add_tipoProd">
          
          <option value="">Seleccione un tipo de Producto</option>
          <option value="0">Perecible</option>
          <option value="1" >No Perecible</option>
        </select>
      </div>
    </div>
    
    <div class="form-group has-succes">
      <label class="col-lg-4 control-label">Marca:</label>
      <div class="col-lg-5">
        <select class="form-control Lista_Marcas" name="add_Lista_Marcas" id="add_Lista_Marcas"></select>
      </div>
      <div class="col-lg-1">
        <button type="button" class="btn btn-primary" id="new_Marca" data-target="#ModalnewMarca"><i class="fa fa-plus"></i></button>
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-4 control-label">Categoría:</label>
      <div class="col-lg-5">
        <select class="form-control Lista_Caterorias" name="add_Lista_Caterorias" id="add_Lista_Caterorias"></select>
      </div>
      <div class="col-lg-1">
        <button type="button" class="btn btn-primary" id="new_Category" data-target="#ModalnewCategory"><i class="fa fa-plus"></i></button>
      </div>
    </div>
     <div class="form-group">
      <label class="col-lg-4 control-label">Stock:</label>
      <div class="col-lg-7">
        <input type="number" min="1" class="form-control" id="add_stock"   name="add_stock" >
      </div>
    </div> 

   

    <div class="form-group">
      <div class="col-md-5 col-md-offset-3">
        <button class="btn btn-primary" id="btnRegistrarProducto">Registrar</button>
        <button   id="cerrarmodal" class="close_modal btn btn-danger"    data-dismiss="modal" rel="tooltip" title="Cerrar"
        >Cerrar</button>
      </div>
    </div>
  </form><!-- /# usuarioForm -->

</div><!-- /.modal-body -->

     

    </div><!-- /. modal-content -->
  </div><!-- /. modal-dialog-->

</div><!-- /#myModalEditarEmpleado -->



<!-- Modal ACTUALIZAR PRODUCTO-->
<div class="modal fade" id="ModalActualizarProducto" tabindex="-1" role="dialog" aria-labelledby="myModalActualizarProducto" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Cabecera -->
      <div class="modal-header">
        <button type="button" class="close close_modal" data-dismiss="modal" ><span aria-hidden="true">&times;</span><span class="sr-only ">Close</span></button>
        <h4 class="modal-title" id="modalTitle">Actualizar Producto</h4>
      </div>
      <!-- /Cabecera -->
 <div class="alert alert-dismissable " id="message_upd_Producto" style="display: none;">
    
</div>
<div class="modal-body">
  <form id="updProductoForm" method="post"  class="form-horizontal"   target="" >                  
   <input type="hidden" class="form-control" id="upd_cod_Prod"   name="upd_cod_Prod"  >
    <div class="form-group">
      <label class="col-lg-4 control-label">Descripción:</label>
      <div class="col-lg-7">
        <input type="text" class="form-control" id="upd_desc_Prod"   name="upd_desc_Prod" placeholder="Descripción del Producto"  >
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-4 control-label">presentacion:</label>
      <div class="col-lg-7">
        <input type="text" class="form-control" id="upd_presentacion"   name="add_presentacion" placeholder="Presentacion del Producto"  >
      </div>
    </div>
     <div class="form-group">
      <label class="col-lg-4 control-label">Tipo de Producto:</label>
       <div class="col-lg-7">

        <select class="form-control" name="upd_tipoProd" id="upd_tipoProd">
          
          <option value="">Seleccione un tipo de Producto</option>
          <option value="0">Perecible</option>
          <option value="1" >No Perecible</option>
        </select>
      </div>
    </div>
    
    <div class="form-group has-succes">
      <label class="col-lg-4 control-label">Marca:</label>
      <div class="col-lg-7">
        <select class="form-control Lista_Marcas_upd" name="upd_Lista_Marcas" id="upd_Lista_Marcas"></select>
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-4 control-label">Categoría:</label>
      <div class="col-lg-7">
        <select class="form-control Lista_Caterorias_upd" name="upd_Lista_Caterorias" id="upd_Lista_Caterorias"></select>
      </div>
    </div>
     <div class="form-group">
      <label class="col-lg-4 control-label">Stock:</label>
      <div class="col-lg-7">
        <input type="number" min="1" class="form-control" id="upd_stock"   name="upd_stock" >
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-4 control-label">Estado:</label>
      <div class="col-lg-7">
      <div class="checkbox">
      <label>
        <input type="checkbox" name="upd_stado" id="upd_stado"><span id="upd_txtEstado"></span>
      </label>
      </div>
    </div>
    </div> 


   

    <div class="form-group">
      <div class="col-md-5 col-md-offset-3">
        <button class="btn btn-primary" id="btnActualizarProducto">Registrar</button>
        <button   id="cerrarmodal_upd" class="close_modal btn btn-danger"    data-dismiss="modal" rel="tooltip" title="Cerrar"
        >Cerrar</button>
      </div>
    </div>
  </form><!-- /# usuarioForm -->

</div><!-- /.modal-body -->

     

    </div><!-- /. modal-content -->
  </div><!-- /. modal-dialog-->

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
        <style>
      .no_selected{
         border-color: #a94442;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      }
        </style>