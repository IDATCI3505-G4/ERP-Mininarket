<?php

/**
 * This is the model class for table "proveedor".
 *
 * The followings are the available columns in table 'proveedor':
 * @property integer $idProveedor
 * @property string $RazSoc_Prov
 * @property string $tipoPersona_Prov
 * @property string $ruc_Prov
 * @property string $direccion_Prov
 * @property string $telefono_Prov
 * @property string $email_Prov
 * @property string $fec_reg_Prov
 * @property string $estado_Prov
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

	public function actualizarProveedor($idProveedor,$RazSoc_Prov,$tipoPersona_Prov,$ruc_Prov,$direccion_Prov,$telefono_Prov,$email_Prov,$estado_Prov){
		$resultado = array('valorupd'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$proveedor = Proveedor::model()->findByPk($idProveedor);

		
			
				$proveedor->RazSoc_Prov=$RazSoc_Prov;
				$proveedor->tipoPersona_Prov=$tipoPersona_Prov;
				$proveedor->ruc_Prov=$ruc_Prov;
				$proveedor->direccion_Prov=$direccion_Prov;
				$proveedor->telefono_Prov=$telefono_Prov;
				$proveedor->email_Prov=$email_Prov;
				$proveedor->estado_Prov=$estado_Prov;
		
			if(!$proveedor->save()){
				$resultado = array('valorupd'=>0, 'message'=>'No hemos podido realizar su solicitud, intentelo nuevamente');
			}
		

		return $resultado;
	}

	public function agregarProveedor($RazSoc_Prov,$tipoPersona_Prov,$ruc_Prov,$direccion_Prov,$telefono_Prov,$email_Prov){
		$resultado = array('valor'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$proveedor=new Proveedor;

		
	
		
			$proveedor->RazSoc_Prov=$RazSoc_Prov;
			$proveedor->tipoPersona_Prov=$tipoPersona_Prov;
			$proveedor->ruc_Prov=$ruc_Prov;
			$proveedor->direccion_Prov=$direccion_Prov;
			$proveedor->telefono_Prov=$telefono_Prov;
			$proveedor->email_Prov=$email_Prov;
		
			if(!$proveedor->save()){
				$resultado = array('valor'=>0, 'message'=>'No hemos podido realizar su solicitud, intentelo nuevamente');
			}
		

		return $resultado;
	}

	
	public function actualizarEstadoProveedor($idProveedor, $estado_Prov){
		$resultado = array('data'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$proveedor = Proveedor::model()->findByPk($idProveedor);

		
			$proveedor->estado_Prov=$estado_Prov;
		
			if(!$proveedor->save()){
				$resultado = array('data'=>0, 'message'=>'No hemos podido realizar su solicitud, intentelo nuevamente');
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
			array('RazSoc_Prov, tipoPersona_Prov, ruc_Prov, direccion_Prov, telefono_Prov', 'required'),
			array('RazSoc_Prov', 'length', 'max'=>250),
			array('tipoPersona_Prov, estado_Prov', 'length', 'max'=>1),
			array('ruc_Prov', 'length', 'max'=>11),
			array('direccion_Prov', 'length', 'max'=>150),
			array('telefono_Prov', 'length', 'max'=>9),
			array('email_Prov', 'length', 'max'=>50),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('idProveedor, RazSoc_Prov, tipoPersona_Prov, ruc_Prov, direccion_Prov, telefono_Prov, email_Prov, fec_reg_Prov, estado_Prov', 'safe', 'on'=>'search'),
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
			'idProveedor' => 'Id Proveedor',
			'RazSoc_Prov' => 'Raz Soc Prov',
			'tipoPersona_Prov' => 'Tipo Persona Prov',
			'ruc_Prov' => 'Ruc Prov',
			'direccion_Prov' => 'Direccion Prov',
			'telefono_Prov' => 'Telefono Prov',
			'email_Prov' => 'Email Prov',
			'fec_reg_Prov' => 'Fec Reg Prov',
			'estado_Prov' => 'Estado Prov',
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
		$criteria->compare('RazSoc_Prov',$this->RazSoc_Prov,true);
		$criteria->compare('tipoPersona_Prov',$this->tipoPersona_Prov,true);
		$criteria->compare('ruc_Prov',$this->ruc_Prov,true);
		$criteria->compare('direccion_Prov',$this->direccion_Prov,true);
		$criteria->compare('telefono_Prov',$this->telefono_Prov,true);
		$criteria->compare('email_Prov',$this->email_Prov,true);
		$criteria->compare('fec_reg_Prov',$this->fec_reg_Prov,true);
		$criteria->compare('estado_Prov',$this->estado_Prov,true);

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
