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

}