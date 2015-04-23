<?php

/**
 * This is the model class for table "admopcion".
 *
 * The followings are the available columns in table 'admopcion':
 * @property string $ide_opcion
 * @property string $ide_modulo
 * @property string $des_nombre
 * @property string $des_ruta
 * @property string $ind_padre
 * @property string $ide_estado
 * @property string $des_usu_registra
 * @property string $fec_registra
 * @property string $des_usu_modifica
 * @property string $fec_modifica
 */
class AdmOpcion extends CActiveRecord
{
	/**
	* Se listan los menus segun catalogo
	**/
	public function listarOpcionesPorCatalogo($ideGrupoCatalogo){
		$sql = "";

		$sql .= "SELECT op.ide_opcion, initcap(LOWER(op.des_nombre)) AS des_nombre, op.des_ruta, op.ind_padre, op.des_icon ";
		$sql .= "FROM admopcion op ";
		$sql .= "INNER JOIN admcatalogo ca ON ca.ide_elemento = op.ide_modulo ";
		$sql .= "WHERE ca.ide_grupo=".$ideGrupoCatalogo." AND ca.ide_estado=1 AND op.ide_estado=1 ";
		$sql .= "ORDER BY op.ind_orden ASC";

		return $this->findAllBySql($sql);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'admopcion';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('ide_modulo, des_nombre, ind_padre, ide_estado', 'required'),
			array('ide_modulo, ind_padre', 'length', 'max'=>10),
			array('des_nombre, des_ruta, des_usu_registra, des_usu_modifica', 'length', 'max'=>250),
			array('ide_estado', 'length', 'max'=>1),
			array('fec_registra, fec_modifica', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('ide_opcion, ide_modulo, des_nombre, des_ruta, ind_padre, ide_estado, des_usu_registra, fec_registra, des_usu_modifica, fec_modifica', 'safe', 'on'=>'search'),
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
			'ide_opcion' => 'Ide Opcion',
			'ide_modulo' => 'Ide Modulo',
			'des_nombre' => 'Des Nombre',
			'des_ruta' => 'Des Ruta',
			'ind_padre' => 'Ind Padre',
			'ide_estado' => 'Ide Estado',
			'des_usu_registra' => 'Des Usu Registra',
			'fec_registra' => 'Fec Registra',
			'des_usu_modifica' => 'Des Usu Modifica',
			'fec_modifica' => 'Fec Modifica',
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

		$criteria->compare('ide_opcion',$this->ide_opcion,true);
		$criteria->compare('ide_modulo',$this->ide_modulo,true);
		$criteria->compare('des_nombre',$this->des_nombre,true);
		$criteria->compare('des_ruta',$this->des_ruta,true);
		$criteria->compare('ind_padre',$this->ind_padre,true);
		$criteria->compare('ide_estado',$this->ide_estado,true);
		$criteria->compare('des_usu_registra',$this->des_usu_registra,true);
		$criteria->compare('fec_registra',$this->fec_registra,true);
		$criteria->compare('des_usu_modifica',$this->des_usu_modifica,true);
		$criteria->compare('fec_modifica',$this->fec_modifica,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return AdmOpcion the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
