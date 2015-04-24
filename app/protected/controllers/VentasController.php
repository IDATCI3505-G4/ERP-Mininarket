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

		$idCliente = $_POST['idCliente'];
		$RazonSocial = $_POST['RazonSocial'];
		$tipoPersona = $_POST['tipoPersona'];
		$ruc = $_POST['ruc'];
		$direccion = $_POST['direccion'];
		$telefono = $_POST['telefono'];
		$email = $_POST['email'];
		$fechaInsc = $_POST['fechaInsc'];
		$stado = $_POST['stado'];


		$respuesta = Cliente::model() -> actualizarCliente($idCliente,$RazonSocial,$tipoPersona,$ruc,$direccion,$telefono,$email,$fechaInsc,$stado);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}

public function actionAjaxAgregarCliente(){


	
		$RazonSocial = $_POST['RazonSocial'];
		$tipoPersona = $_POST['tipoPersona'];
		$ruc = $_POST['ruc'];
		$direccion = $_POST['direccion'];
		$telefono = $_POST['telefono'];
		$email = $_POST['email'];
		$fechaInsc = $_POST['fechaInsc'];
		$stado = $_POST['stado'];


		$respuesta = Cliente::model() -> agregarCliente($RazonSocial,$tipoPersona,$ruc,$direccion,$telefono,$email,$fechaInsc,$stado);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}

}