<?php

/**
 * This is the model class for table "cliente".
 *
 * The followings are the available columns in table 'cliente':
 * @property integer $idCliente
 * @property string $RazonSocial
 * @property string $tipoPersona
 * @property string $ruc
 * @property string $direccion
 * @property string $telefono
 * @property string $email
 * @property string $fechaInsc
 * @property string $stado
 */
class Cliente extends CActiveRecord
{	
/**
	* Se listan las personas por catalogo
	**/
	public function listadoClientes(){


		$dataProvider=new CActiveDataProvider('Cliente', array(
			'pagination'=>array('pageSize'=>6),
		));

		return $dataProvider;
	}

public function obtenerClientexId($idCliente){		
		$sql = "SELECT * FROM Cliente  WHERE idCLiente=".$idCliente;
	

		return $this->findAllBySql($sql);
	}
public function actualizarCliente($idCliente,$RazonSocial,$tipoPersona,$ruc,$direccion,$telefono,$email,$fechaInsc,$stado){
		$resultado = array('data'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$cliente = Cliente::model()->findByPk($idCliente);

		if(count($cliente)>0){
			
			$cliente->RazonSocial=$RazonSocial;
			$cliente->tipoPersona=$tipoPersona;
			$cliente->ruc=$ruc;
			$cliente->direccion=$direccion;
			$cliente->telefono=$telefono;
			$cliente->email=$email;
			$cliente->fechaInsc=$fechaInsc;
			$cliente->stado=$stado;
		
			if(!$cliente->save()){
				$resultado = array('data'=>0, 'message'=>'No hemos podido realizar su solicitud, intentelo nuevamente');
			}
		}else{
			$resultado = array('data'=>0, 'message'=>'No se pudo encontrar a la persona seleccionada. ');
		}

		return $resultado;
	}
	public function agregarCliente($RazonSocial,$tipoPersona,$ruc,$direccion,$telefono,$email,$fechaInsc,$stado){
		$resultado = array('data'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$cliente=new Cliente;

		
	
		
			$cliente->RazonSocial=$RazonSocial;
			$cliente->tipoPersona=$tipoPersona;
			$cliente->ruc=$ruc;
			$cliente->direccion=$direccion;
			$cliente->telefono=$telefono;
			$cliente->email=$email;
			$cliente->fechaInsc=$fechaInsc;
			$cliente->stado=$stado;
			if(!$cliente->save()){
				$resultado = array('data'=>0, 'message'=>'No hemos podido realizar su solicitud, intentelo nuevamente');
			}
		

		return $resultado;
	}

public function actualizarEstadoCliente($idCliente, $stado){
		$resultado = array('data'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$cliente = Cliente::model()->findByPk($idCliente);

		if(count($cliente)>0){
			$cliente->stado=$stado;
		
			if(!$cliente->save()){
				$resultado = array('data'=>0, 'message'=>'No hemos podido realizar su solicitud, intentelo nuevamente');
			}
		}else{
			$resultado = array('data'=>0, 'message'=>'No se pudo encontrar a la persona seleccionada. ');
		}

		return $resultado;
	}
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'cliente';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('RazonSocial, direccion', 'length', 'max'=>150),
			array('tipoPersona, stado', 'length', 'max'=>1),
			array('ruc', 'length', 'max'=>11),
			array('telefono', 'length', 'max'=>9),
			array('email', 'length', 'max'=>30),
			array('fechaInsc', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('idCliente, RazonSocial, tipoPersona, ruc, direccion, telefono, email, fechaInsc, stado', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'idCliente' => 'Id Cliente',
			'RazonSocial' => 'Razon Social',
			'tipoPersona' => 'Tipo Persona',
			'ruc' => 'Ruc',
			'direccion' => 'Direccion',
			'telefono' => 'Telefono',
			'email' => 'Email',
			'fechaInsc' => 'Fecha Insc',
			'stado' => 'Stado',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 *
	 * Typical usecase:
	 * - Initialize the model fields with values from filter form.
	 * - Execute this method to get CActiveDataProvider instance which will filter
	 * models according to data in model fields.
	 * - Pass data provider to CGridView, CListView or any similar widget.
	 *
	 * @return CActiveDataProvider the data provider that can return the models
	 * based on the search/filter conditions.
	 */
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('idCliente',$this->idCliente);
		$criteria->compare('RazonSocial',$this->RazonSocial,true);
		$criteria->compare('tipoPersona',$this->tipoPersona,true);
		$criteria->compare('ruc',$this->ruc,true);
		$criteria->compare('direccion',$this->direccion,true);
		$criteria->compare('telefono',$this->telefono,true);
		$criteria->compare('email',$this->email,true);
		$criteria->compare('fechaInsc',$this->fechaInsc,true);
		$criteria->compare('stado',$this->stado,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Cliente the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
