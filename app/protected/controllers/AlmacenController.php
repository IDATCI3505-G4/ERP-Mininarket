<?php
class AlmacenController extends Controller{

public function actionAjaxListarMarcas(){
	
		
	
		$marcas = Marca::model()->findAll();

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode($marcas);
}
public function actionAjaxListarCategorias(){
	
		
	
		$marcas = Categoria::model()->findAll();

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode($marcas);
}


	public function actionListadoProductos(){

		// $productos = Producto::model()->listadoProductos();
		$dataProvider=new CActiveDataProvider('Producto');
		$this->render("listadoProductos",array(
			'dataProvider'=>$dataProvider,
			));
	}
	public function actionAjaxObtenerProducto(){
		$idProducto = $_POST['idProducto'];
		
	
		$productos = Producto::model()->obtenerProductoxId($idProducto);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$productos[0]));
	}
	public function actionAjaxObtenerProducto_upd(){
		$idProducto = $_POST['idProducto'];
		
	
		$productos = Producto::model()->obtenerProductoxId_upd($idProducto);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$productos[0]));
	}

	public function actionAjaxActualizarProducto(){

		$idProducto=$_POST['idProducto'];
      	$desc_Prod=$_POST['desc_Prod'];
      	$presentacion=$_POST['presentacion'];
      	$tipoProd=$_POST['tipoProd'];
      	$stock=$_POST['stock'];
      	$idMarca=$_POST['idMarca'];
      	$idCategoria=$_POST['idCategoria'];
      	$estadoProd=$_POST['estadoProd'];




		$respuesta = Producto::model()->actualizarProducto($idProducto,$desc_Prod,$presentacion,$tipoProd,$stock,$idMarca,$idCategoria,$estadoProd);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}
	public function actionAjaxAgregarProducto(){

		$desc_Prod =$_POST['desc_Prod'];
		$presentacion =$_POST['presentacion'];
		$tipoProd =$_POST['tipoProd'];
		$stock =$_POST['stock'];
		$idMarca =$_POST['idMarca'];
		$idCategoria =$_POST['idCategoria'];
		
	
		$respuesta = Producto::model()->agregarProducto($desc_Prod,$presentacion,$tipoProd,$stock,$idMarca,$idCategoria);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}

	public function actionAjaxEliminarProducto(){


		$idProducto = $_POST['idProducto'];
		$respuesta = Producto::model()->eliminarProducto($idProducto);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}

}