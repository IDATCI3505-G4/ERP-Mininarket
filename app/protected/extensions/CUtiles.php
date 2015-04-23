<?php
class CUtiles extends CApplicationComponent{

	public $varUtil;

	public function init(){}

	public function calculaEdad(){

		$valInicial = $varUtil != null ? $varUtil : "0000-00-00";
		$dateTime = explode(" ", $varUtil);
		$varUtil = (count($dateTime)>1 ? $dateTime[0] : (count($dateTime)==0 ? $valInicial : $varUtil));

		//fecha actual 
		$dia=date(j);
		$mes=date(n);
		$ano=date(Y);
		 
		//fecha de nacimiento
		$fechaNacimiento = explode("-", $varUtil);
		$dianaz=$fechaNacimiento[2];
		$mesnaz=$fechaNacimiento[1];
		$anonaz=$fechaNacimiento[0];
		 
		//si el mes es el mismo pero el día inferior aun no ha cumplido años, le quitaremos un año al actual
		if (($mesnaz == $mes) && ($dianaz > $dia)) {
		$ano=($ano-1); }
		 
		//si el mes es superior al actual tampoco habrá cumplido años, por eso le quitamos un año al actual
		if ($mesnaz > $mes) {
		$ano=($ano-1);}
		 
		//ya no habría mas condiciones, ahora simplemente restamos los años y mostramos el resultado como su edad
		$edad=($ano-$anonaz);
		 
		return $edad;
	}
}