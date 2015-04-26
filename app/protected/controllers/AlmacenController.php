<?php
class AlmacenController extends Controller{

	public function actionListadoProductos(){

		// $productos = Producto::model()->listadoProductos();
		$dataProvider=new CActiveDataProvider('Producto');
		$this->render("listadoProductos",array(
			'dataProvider'=>$dataProvider,
			));
	}
	public function actionAjaxObtenerProducto(){
		$idProducto = $_POST['idProducto'];
		$sql="select desc_Prod,presentacion,tipoProd,stock,m.nomMarca,c.nomCategoria,fecha_creacion,estadoProd from Producto as p INNER JOIN Marca m ON m.idMarca=p.idMarca INNER JOIN Categoria c ON c.idCategoria=p.idCategoria where idProducto=".$idProducto;
		$productos=Yii::app()->db->createCommand($sql)->queryAll();
		//$categorias=$productos->categoria->nomCategoria;
		//$productos = Producto::model()->obtenerProductoxId($idProducto);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$productos[0]));
	}

	public function actionAjaxActualizarProducto(){


		$idProducto = $_POST['idProducto'];
		$idProveedor = $_POST['idProveedor'];
		$descripcion = $_POST['descripcion'];
		$precioCompra = $_POST['precioCompra'];
		$precioVenta = $_POST['precioVenta'];
		$stock = $_POST['stock'];
		$fechaVencimiento = $_POST['fechaVencimiento'];
		$stado = $_POST['stado'];


		$respuesta = Producto::model()->actualizarProducto($idProducto,$idProveedor,$descripcion,$precioCompra,$precioVenta,$stock,$fechaVencimiento,$stado);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}
	public function actionAjaxAgregarProducto(){


		
		$idProveedor = $_POST['idProveedor'];
		$descripcion = $_POST['descripcion'];
		$precioCompra = $_POST['precioCompra'];
		$precioVenta = $_POST['precioVenta'];
		$stock = $_POST['stock'];
		$fechaVencimiento = $_POST['fechaVencimiento'];
		$stado = $_POST['stado'];


		$respuesta = Producto::model()->agregarProducto($idProveedor,$descripcion,$precioCompra,$precioVenta,$stock,$fechaVencimiento,$stado);

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