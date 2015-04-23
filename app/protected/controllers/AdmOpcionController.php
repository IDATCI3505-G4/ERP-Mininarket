<?php
class AdmOpcionController extends Controller{
	
	public function actionListarMenu($ideGrupoCatalogo=2){		

		$data = AdmOpcion::model()->listarOpcionesPorCatalogo($ideGrupoCatalogo);

		$this->render("listarMenu",array("dataProvider"=>$data));
	}

}