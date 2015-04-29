<?php

/**
 * This is the model class for table "marca".
 *
 * The followings are the available columns in table 'marca':
 * @property integer $idMarca
 * @property string $nomMarca
 *
 * The followings are the available model relations:
 * @property Producto[] $productos
 */
class Marca extends CActiveRecord
{
	public function agregarMarca($nomMarca){
		$resultado = array('valor'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$marca=new Marca;	
	
		$marca->nomMarca=$nomMarca;
			
		$sql="select * from Marca where nomMarca='".$nomMarca."'";
		if (count(Yii::app()->db->createCommand($sql)->queryAll())>0 ) {
			$resultado = array('valor'=>0, 'message'=>'La Marca ya Existe');
		}

		if(count(Yii::app()->db->createCommand($sql)->queryAll())<1 ){			
			if(!$marca->save()){
				
				$resultado = array('valor'=>0, 'message'=>'No hemos podido realizar su solicitud, intentelo nuevamente');
			}
		}

			
		

		return $resultado;
	}	
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'marca';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('nomMarca', 'required'),
			array('nomMarca', 'length', 'max'=>100),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('idMarca, nomMarca', 'safe', 'on'=>'search'),
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
			'productos' => array(self::HAS_MANY, 'Producto', 'idMarca'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'idMarca' => 'Id Marca',
			'nomMarca' => 'Nom Marca',
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

		$criteria->compare('idMarca',$this->idMarca);
		$criteria->compare('nomMarca',$this->nomMarca,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Marca the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
