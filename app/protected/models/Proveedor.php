<?php

/**
 * This is the model class for table "proveedor".
 *
 * The followings are the available columns in table 'proveedor':
 * @property integer $idProveedor
 * @property string $RasonSocial
 * @property string $tipoPersona
 * @property string $RUC
 * @property string $direccion
 * @property string $telefono
 * @property string $email
 * @property string $stado
 *
 * The followings are the available model relations:
 * @property Producto[] $productos
 */
class Proveedor extends CActiveRecord
{

		/**
	* Se listan las personas por catalogo
	**/
	public function listadoProveedores(){


		$dataProvider=new CActiveDataProvider('Proveedor', array(
			'pagination'=>array('pageSize'=>6),
		));

		return $dataProvider;
	}
public function obtenerProveedorxId($idProveedor){		
		$sql = "SELECT * FROM Proveedor  WHERE idProveedor=".$idProveedor;
	

		return $this->findAllBySql($sql);
	}

	public function actualizarProveedor($idProveedor,$RasonSocial,$tipoPersona,$RUC,$direccion,$telefono,$email,$stado){
		$resultado = array('data'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$proveedor = Proveedor::model()->findByPk($idProveedor);

		if(count($proveedor)>0){
			
			$proveedor->RasonSocial=$RasonSocial;
			$proveedor->tipoPersona=$tipoPersona;
			$proveedor->RUC=$RUC;
			$proveedor->direccion=$direccion;
			$proveedor->telefono=$telefono;
			$proveedor->email=$email;
			$proveedor->stado=$stado;
		
			if(!$proveedor->save()){
				$resultado = array('data'=>0, 'message'=>'No hemos podido realizar su solicitud, intentelo nuevamente');
			}
		}else{
			$resultado = array('data'=>0, 'message'=>'No se pudo encontrar a la persona seleccionada. ');
		}

		return $resultado;
	}

	public function agregarProveedor($RasonSocial,$tipoPersona,$RUC,$direccion,$telefono,$email,$stado){
		$resultado = array('data'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$proveedor=new Proveedor;

		
	
		
			$proveedor->RasonSocial=$RasonSocial;
			$proveedor->tipoPersona=$tipoPersona;
			$proveedor->RUC=$RUC;
			$proveedor->direccion=$direccion;
			$proveedor->telefono=$telefono;
			$proveedor->email=$email;
			$proveedor->stado=$stado;
		
			if(!$proveedor->save()){
				$resultado = array('data'=>0, 'message'=>'No hemos podido realizar su solicitud, intentelo nuevamente');
			}
		

		return $resultado;
	}

	
	public function actualizarEstadoProveedor($idProveedor, $stado){
		$resultado = array('data'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$proveedor = Proveedor::model()->findByPk($idProveedor);

		if(count($proveedor)>0){
			$proveedor->stado=$stado;
		
			if(!$proveedor->save()){
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
		return 'proveedor';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('RasonSocial', 'length', 'max'=>200),
			array('tipoPersona, stado', 'length', 'max'=>1),
			array('RUC', 'length', 'max'=>11),
			array('direccion', 'length', 'max'=>100),
			array('telefono', 'length', 'max'=>9),
			array('email', 'length', 'max'=>255),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('idProveedor, RasonSocial, tipoPersona, RUC, direccion, telefono, email, stado', 'safe', 'on'=>'search'),
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
			'productos' => array(self::HAS_MANY, 'Producto', 'idProveedor'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'idProveedor' => 'Id Proveedor',
			'RasonSocial' => 'Rason Social',
			'tipoPersona' => 'Tipo Persona',
			'RUC' => 'Ruc',
			'direccion' => 'Direccion',
			'telefono' => 'Telefono',
			'email' => 'Email',
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

		$criteria->compare('idProveedor',$this->idProveedor);
		$criteria->compare('RasonSocial',$this->RasonSocial,true);
		$criteria->compare('tipoPersona',$this->tipoPersona,true);
		$criteria->compare('RUC',$this->RUC,true);
		$criteria->compare('direccion',$this->direccion,true);
		$criteria->compare('telefono',$this->telefono,true);
		$criteria->compare('email',$this->email,true);
		$criteria->compare('stado',$this->stado,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Proveedor the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
