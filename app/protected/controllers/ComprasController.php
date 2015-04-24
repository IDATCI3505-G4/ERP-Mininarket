<?php
class ComprasController extends Controller{

	public function actionListadoProveedores(){

		$proveedores = Proveedor::model()->listadoProveedores();
		$this->render("listadoProveedores",array(
			'proveedores'=>$proveedores,
			));
		
	}

	public function actionAjaxObtenerProveedor(){
		$idProveedor = $_POST['idProveedor'];
		$proveedores = Proveedor::model()->obtenerProveedorxId($idProveedor);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$proveedores[0]));
	}

		public function actionAjaxActualizarProveedor(){

		$idProveedor = $_POST['idProveedor'];
		$RasonSocial = $_POST['RasonSocial'];
		$tipoPersona = $_POST['tipoPersona'];
		$RUC = $_POST['RUC'];
		$direccion = $_POST['direccion'];
		$telefono = $_POST['telefono'];
		$email = $_POST['email'];
		$stado = $_POST['stado'];


		$respuesta = Proveedor::model() -> actualizarProveedor($idProveedor,$RasonSocial,$tipoPersona,$RUC,$direccion,$telefono,$email,$stado);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}

		public function actionAjaxAgregarProveedor(){


		

		$RasonSocial = $_POST['RasonSocial'];
		$tipoPersona = $_POST['tipoPersona'];
		$RUC = $_POST['RUC'];
		$direccion = $_POST['direccion'];
		$telefono = $_POST['telefono'];
		$email = $_POST['email'];
		$stado = $_POST['stado'];


		$respuesta = Proveedor::model() -> agregarProveedor($RasonSocial,$tipoPersona,$RUC,$direccion,$telefono,$email,$stado);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}

	public function actionAjaxActualizarEstadoProveedor(){
		$idProveedor = $_POST['idProveedor'];
		$stado = $_POST['stado'];

		$respuesta = Proveedor::model()->actualizarEstadoProveedor($idProveedor, $stado);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}
	
}