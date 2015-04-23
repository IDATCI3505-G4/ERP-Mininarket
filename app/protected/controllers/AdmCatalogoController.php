<?php
class AdmCatalogoController extends Controller{

	public function actionTraeCatalogo(){
		$ideGrupo = $_POST['ideGrupo'];

		$Criteria = new CDbCriteria();
		$Criteria->condition = "ide_grupo = ".$ideGrupo;

		$catalogo = AdmCatalogo::model()->findAll($Criteria);

		header('Content-Type: application/json; charset="UTF-8"');
    	echo CJSON::encode(array('output'=>$catalogo));
	}
}