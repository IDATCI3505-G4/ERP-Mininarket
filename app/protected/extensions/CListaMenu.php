<?php
class CListaMenu extends CApplicationComponent{
	
	public $ideGrupoCatalogo;

	public function init(){}

	public function listadoPrincipal(){

		$lista = array(array('label'=>'NAVEGACIÓN PRINCIPAL', 'itemOptions'=>array('class'=>'header treeview')));
		//array_push($lista, array('label'=>'Inicio', 'url'=>array('#'), 'itemOptions'=>array('class'=>'active')));

		$dataOpciones = AdmOpcion::model()->listarOpcionesPorCatalogo(2);
        foreach ($dataOpciones as $opcion) {
        	$subOpciones = array();
        	$numSubItems = 0;
        	$vinetaLista="";

        	if($opcion->ind_padre=="0"){
        		$padre = $opcion->ide_opcion;

        		foreach ($dataOpciones as $subOpcion) {
        			if($subOpcion->ind_padre==$padre){
	        			array_push(
	        				$subOpciones,
	        				array(
	        					'label'=>' <i class="fa fa-circle-o"></i> '.$subOpcion->des_nombre,
	        					'url'=>array($subOpcion->des_ruta)
	        				)
	        			);
	        			$numSubItems++;
	        		}
        		}

        		$vinetaLista = $numSubItems>0 ? '<i class="fa fa-angle-left pull-right"></i>' : '';

	        	$opciones = array(
					'label'=>'<i class="fa fa-'.$opcion->des_icon.'"></i> <span>'.$opcion->des_nombre.'</span> '.$vinetaLista, 
					'url'=>array($opcion->des_ruta),
					'itemOptions'=>array('class'=>'treeview'),
					'items'=>$subOpciones
				);

				array_push($lista, $opciones);
        	}
		}

        return $lista;
	}
}