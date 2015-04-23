<?php

/**
 * This is the model class for table "admcatalogo".
 *
 * The followings are the available columns in table 'admcatalogo':
 * @property string $ide_elemento
 * @property string $ide_grupo
 * @property string $des_nombre
 * @property string $ide_estado
 * @property string $des_usu_registra
 * @property string $fec_registra
 * @property string $des_usu_modifica
 * @property string $fec_modifica
 * @property string $cod_sunat
 */
class Admcatalogo extends CActiveRecord
{

	


	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'admcatalogo';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('ide_grupo, des_nombre, ide_estado', 'required'),
			array('ide_grupo, cod_sunat', 'length', 'max'=>10),
			array('des_nombre, des_usu_registra, des_usu_modifica', 'length', 'max'=>250),
			array('ide_estado', 'length', 'max'=>1),
			array('fec_registra, fec_modifica', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('ide_elemento, ide_grupo, des_nombre, ide_estado, des_usu_registra, fec_registra, des_usu_modifica, fec_modifica, cod_sunat', 'safe', 'on'=>'search'),
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
			'ide_elemento' => 'Ide Elemento',
			'ide_grupo' => 'Ide Grupo',
			'des_nombre' => 'Des Nombre',
			'ide_estado' => 'Ide Estado',
			'des_usu_registra' => 'Des Usu Registra',
			'fec_registra' => 'Fec Registra',
			'des_usu_modifica' => 'Des Usu Modifica',
			'fec_modifica' => 'Fec Modifica',
			'cod_sunat' => 'Cod Sunat',
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

		$criteria->compare('ide_elemento',$this->ide_elemento,true);
		$criteria->compare('ide_grupo',$this->ide_grupo,true);
		$criteria->compare('des_nombre',$this->des_nombre,true);
		$criteria->compare('ide_estado',$this->ide_estado,true);
		$criteria->compare('des_usu_registra',$this->des_usu_registra,true);
		$criteria->compare('fec_registra',$this->fec_registra,true);
		$criteria->compare('des_usu_modifica',$this->des_usu_modifica,true);
		$criteria->compare('fec_modifica',$this->fec_modifica,true);
		$criteria->compare('cod_sunat',$this->cod_sunat,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Admcatalogo the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
