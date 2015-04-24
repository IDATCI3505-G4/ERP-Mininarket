<?php
class AlmacenController extends Controller{

	public function actionListadoProductos(){

		$productos = Producto::model()->listadoProductos();
		$this->render("listadoProductos",array(
			'productos'=>$productos,
			));
	}
	public function actionAjaxObtenerProducto(){
		$idProducto = $_POST['idProducto'];
		$productos = Producto::model()->obtenerProductoxId($idProducto);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$productos[0]));
	}

	public function actionAjaxActualizarProducto(){
		$ideProducto = $_POST['idProducto'];


		$respuesta = Producto::model()->actualizaEstadoProducto($ideProducto);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}

}