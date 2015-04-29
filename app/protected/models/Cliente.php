<?php

/**
 * This is the model class for table "cliente".
 *
 * The followings are the available columns in table 'cliente':
 * @property integer $idCliente
 * @property string $RazSoc_Cli
 * @property string $tipoPersona_Cli
 * @property string $ruc_Cli
 * @property string $direccion_Cli
 * @property string $telefono_Cli
 * @property string $email_Cli
 * @property string $fec_reg_Cli
 * @property string $estado_Cli
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
public function actualizarCliente($idCliente,$RazSoc_Cli,$tipoPersona_Cli,$ruc_Cli,$direccion_Cli,$telefono_Cli,$email_Cli,$estado_Cli){
		$resultado = array('valorupd'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$cliente = Cliente::model()->findByPk($idCliente);

		
			

				$cliente->RazSoc_Cli=$RazSoc_Cli;
				$cliente->tipoPersona_Cli=$tipoPersona_Cli;
				$cliente->ruc_Cli=$ruc_Cli;
				$cliente->direccion_Cli=$direccion_Cli;
				$cliente->telefono_Cli=$telefono_Cli;
				$cliente->email_Cli=$email_Cli;
				$cliente->estado_Cli=$estado_Cli;
			if(!$cliente->save()){
				$resultado = array('valorupd'=>0, 'message'=>'No hemos podido realizar su solicitud, intentelo nuevamente');
			}
		

		return $resultado;
	}
	public function agregarCliente($RazSoc_Cli,$tipoPersona_Cli,$ruc_Cli,$direccion_Cli,$telefono_Cli,$email_Cli){
		$resultado = array('valor'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$cliente=new Cliente;

		
		$cliente->RazSoc_Cli=$RazSoc_Cli;
		$cliente->tipoPersona_Cli=$tipoPersona_Cli;
		$cliente->ruc_Cli=$ruc_Cli;
		$cliente->direccion_Cli=$direccion_Cli;
		$cliente->telefono_Cli=$telefono_Cli;
		$cliente->email_Cli=$email_Cli;
		
		
			if(!$cliente->save()){
				$resultado = array('valor'=>0, 'message'=>'No hemos podido realizar su solicitud, intentelo nuevamente');
			}
		

		return $resultado;
	}

public function actualizarEstadoCliente($idCliente, $estado_Cli){
		$resultado = array('data'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$cliente = Cliente::model()->findByPk($idCliente);

	
			$cliente->estado_Cli=$estado_Cli;
		
			if(!$cliente->save()){
				$resultado = array('data'=>0, 'message'=>'No hemos podido realizar su solicitud, intentelo nuevamente');
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
			array('RazSoc_Cli, tipoPersona_Cli, ruc_Cli, direccion_Cli, telefono_Cli, ', 'required'),
			array('RazSoc_Cli', 'length', 'max'=>250),
			array('tipoPersona_Cli, estado_Cli', 'length', 'max'=>1),
			array('ruc_Cli', 'length', 'max'=>11),
			array('direccion_Cli', 'length', 'max'=>150),
			array('telefono_Cli', 'length', 'max'=>9),
			array('email_Cli', 'length', 'max'=>50),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('idCliente, RazSoc_Cli, tipoPersona_Cli, ruc_Cli, direccion_Cli, telefono_Cli, email_Cli, fec_reg_Cli, estado_Cli', 'safe', 'on'=>'search'),
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
			'RazSoc_Cli' => 'Raz Soc Cli',
			'tipoPersona_Cli' => 'Tipo Persona Cli',
			'ruc_Cli' => 'Ruc Cli',
			'direccion_Cli' => 'Direccion Cli',
			'telefono_Cli' => 'Telefono Cli',
			'email_Cli' => 'Email Cli',
			'fec_reg_Cli' => 'Fec Reg Cli',
			'estado_Cli' => 'Estado Cli',
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
		$criteria->compare('RazSoc_Cli',$this->RazSoc_Cli,true);
		$criteria->compare('tipoPersona_Cli',$this->tipoPersona_Cli,true);
		$criteria->compare('ruc_Cli',$this->ruc_Cli,true);
		$criteria->compare('direccion_Cli',$this->direccion_Cli,true);
		$criteria->compare('telefono_Cli',$this->telefono_Cli,true);
		$criteria->compare('email_Cli',$this->email_Cli,true);
		$criteria->compare('fec_reg_Cli',$this->fec_reg_Cli,true);
		$criteria->compare('estado_Cli',$this->estado_Cli,true);

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
