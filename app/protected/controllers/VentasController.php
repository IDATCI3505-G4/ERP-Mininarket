<?php
class VentasController extends Controller{
	
	public function actionListadoClientes(){

		
		$clientes = Cliente::model()->listadoClientes();
		$this->render("listadoClientes",array(
			'clientes'=>$clientes,
			));
	}

	public function actionAjaxObtenerCliente(){
		$idCliente = $_POST['idCliente'];
		$clientes = Cliente::model()->obtenerClientexId($idCliente);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$clientes[0]));
	}

	public function actionAjaxActualizarCliente(){
		$idCliente=$_POST['idCliente'];
		$RazSoc_Cli=$_POST['RazSoc_Cli'];
		$tipoPersona_Cli=$_POST['tipoPersona_Cli'];
		$ruc_Cli=$_POST['ruc_Cli'];
		$direccion_Cli=$_POST['direccion_Cli'];
		$telefono_Cli=$_POST['telefono_Cli'];
		$email_Cli=$_POST['email_Cli'];
		$estado_Cli=$_POST['estado_Cli'];

		$respuesta = Cliente::model() -> actualizarCliente($idCliente,$RazSoc_Cli,$tipoPersona_Cli,$ruc_Cli,$direccion_Cli,$telefono_Cli,$email_Cli,$estado_Cli);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}

public function actionAjaxAgregarCliente(){


	
$RazSoc_Cli=$_POST['RazSoc_Cli'];
$tipoPersona_Cli=$_POST['tipoPersona_Cli'];
$ruc_Cli=$_POST['ruc_Cli'];
$direccion_Cli=$_POST['direccion_Cli'];
$telefono_Cli=$_POST['telefono_Cli'];
$email_Cli=$_POST['email_Cli'];


		$respuesta = Cliente::model() -> agregarCliente($RazSoc_Cli,$tipoPersona_Cli,$ruc_Cli,$direccion_Cli,$telefono_Cli,$email_Cli);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}

public function actionAjaxActualizarEstadocliente(){
		$idCliente = $_POST['idCliente'];
		$estado_Cli = $_POST['estado_Cli'];

		$respuesta = Cliente::model()->actualizarEstadoCliente($idCliente, $estado_Cli);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}
}