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

		$idProveedor=$_POST['idProveedor'];
		$RazSoc_Prov=$_POST['RazSoc_Prov'];
		$tipoPersona_Prov=$_POST['tipoPersona_Prov'];
		$ruc_Prov=$_POST['ruc_Prov'];
		$direccion_Prov=$_POST['direccion_Prov'];
		$telefono_Prov=$_POST['telefono_Prov'];
		$email_Prov=$_POST['email_Prov'];
		$estado_Prov=$_POST['estado_Prov'];


		$respuesta = Proveedor::model() -> actualizarProveedor($idProveedor,$RazSoc_Prov,$tipoPersona_Prov,$ruc_Prov,$direccion_Prov,$telefono_Prov,$email_Prov,$estado_Prov);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}

		public function actionAjaxAgregarProveedor(){


		

		$RazSoc_Prov=$_POST['RazSoc_Prov'];
		$tipoPersona_Prov=$_POST['tipoPersona_Prov'];
		$ruc_Prov=$_POST['ruc_Prov'];
		$direccion_Prov=$_POST['direccion_Prov'];
		$telefono_Prov=$_POST['telefono_Prov'];
		$email_Prov=$_POST['email_Prov'];



		$respuesta = Proveedor::model() -> agregarProveedor($RazSoc_Prov,$tipoPersona_Prov,$ruc_Prov,$direccion_Prov,$telefono_Prov,$email_Prov);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}

	public function actionAjaxActualizarEstadoProveedor(){
		$idProveedor = $_POST['idProveedor'];
		$estado_Prov = $_POST['estado_Prov'];

		$respuesta = Proveedor::model()->actualizarEstadoProveedor($idProveedor, $estado_Prov);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}
	
}