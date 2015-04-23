<?php
class PersonalController extends Controller{

	public function actionListadoEmpleados(){

		$empleados = Sispersona::model()->listaPersonasPorCondicion(18);

		$this->render("listadoEmpleados", array(
			'empleados'=>$empleados,
		));
	}

	public function actionAjaxObtenerEmpleado(){
		$idePersona = $_POST['idePersona'];
		$empleados = Sispersona::model()->obtenerPersonaPorIde($idePersona);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$empleados[0]));
	}

	public function actionAjaxActualizarEmpleado(){
		$idePersona = $_POST['idePersona'];
		$ideEstado = $_POST['ideEstado'];

		$respuesta = Sispersona::model()->actualizaEstadoPersonaPorIde($idePersona, $ideEstado);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$respuesta));
	}
}