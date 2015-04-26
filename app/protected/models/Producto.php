<?php

/**
 * This is the model class for table "producto".
 *
 * The followings are the available columns in table 'producto':
 * @property integer $idProducto
 * @property string $desc_Prod
 * @property string $presentacion
 * @property string $tipoProd
 * @property integer $stock
 * @property integer $idMarca
 * @property integer $idCategoria
 * @property string $fecha_creacion
 * @property string $estadoProd
 *
 * The followings are the available model relations:
 * @property Categoria $idCategoria0
 * @property Marca $idMarca0
 */
class Producto extends CActiveRecord
{

	/**
	* Se listan las personas por catalogo
	**/
	public function listadoProductos(){


		$dataProvider=new CActiveDataProvider('Producto', array(
			'criteria' => array(
		       'select'=>'idProducto,idProveedor,Descripcion,precioCompra,precioVenta,stock,fechaVencimiento,stado',
		    ),
			'pagination'=>array('pageSize'=>6),
		));

		return $dataProvider;
	}
/**
*Se muestra los productos por codigo	obtenerProductoxId
**/
public function obtenerProductoxId($idProducto){
		
		
		$sql="select desc_Prod,presentacion,tipoProd,stock,m.nomMarca,c.nomCategoria,fecha_creacion,estadoProd from Producto as p INNER JOIN Marca m ON m.idMarca=p.idMarca INNER JOIN Categoria c ON c.idCategoria=p.idCategoria where idProducto=".$idProducto;
		

		return Yii::app()->db->createCommand($sql)->queryAll();
	}

	/**
	* Se elimina una persona
	**/
	public function actualizarProducto($idProducto,$idProveedor,$descripcion,$precioCompra,$precioVenta,$stock,$fechaVencimiento,$stado){
		$resultado = array('data'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$producto = Producto::model()->findByPk($idProducto);

		if(count($producto)>0){
	
			$producto->idProducto=$idProducto;
			$producto->idProveedor=$idProveedor;
			$producto->Descripcion=$descripcion;
			$producto->precioCompra=$precioCompra;
			$producto->precioVenta=$precioVenta;
			$producto->stock=$stock;
			$producto->fechaVencimiento=$fechaVencimiento;
			$producto->stado=$stado;
		
			if(!$producto->save()){
				$resultado = array('data'=>0, 'message'=>'No hemos podido realizar su solicitud, intentelo nuevamente');
			}
		}else{
			$resultado = array('data'=>0, 'message'=>'No se pudo encontrar a la persona seleccionada. ');
		}

		return $resultado;
	}
	public function agregarProducto($desc_Prod,$presentacion,$tipoProd,$stock,$idMarca,$idCategoria){
		$resultado = array('data'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$producto=new Producto;

		
	
		
			$producto->desc_Prod=$desc_Prod;
			$producto->presentacion=$presentacion;
			$producto->tipoProd=$tipoProd;
			$producto->stock=$stock;
			$producto->idMarca=$idMarca;
			$producto->idCategoria=$idCategoria;

			if(!$producto->save()){
				$resultado = array('data'=>0, 'message'=>'No hemos podido realizar su solicitud, intentelo nuevamente');
			}
		

		return $resultado;
	}
	public function eliminarProducto($idProducto){

		$resultado = 'Producto Eliminado';
		$producto=Producto::model()->findByPk($idProducto); // asumiendo que existe un post cuyo ID es 10
		$producto->delete(); // borra la fila de la tabla de la base de datos

		// borra todas las filas que coincidan con la condición especificada
		//Productos::model()->deleteAll($condition,$params);
		// borra todas las filas que coincidan con la condición especificada y con la(s) clave(s) primaria(s)

		//Productos::model()->deleteByPk($idProducto);
		return $resultado;
	}
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'producto';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('desc_Prod, presentacion, stock', 'required'),
			array('stock, idMarca, idCategoria', 'numerical', 'integerOnly'=>true),
			array('desc_Prod', 'length', 'max'=>100),
			array('presentacion', 'length', 'max'=>20),
			array('tipoProd', 'length', 'max'=>1),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('idProducto, desc_Prod, presentacion, tipoProd, stock, idMarca, idCategoria', 'safe', 'on'=>'search'),
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
			'categoria' => array(self::BELONGS_TO, 'Categoria', 'idCategoria'),
			'marca' => array(self::BELONGS_TO, 'Marca', 'idMarca'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'idProducto' => 'Id Producto',
			'desc_Prod' => 'Desc Prod',
			'presentacion' => 'Presentacion',
			'tipoProd' => 'Tipo Prod',
			'stock' => 'Stock',
			'idMarca' => 'Id Marca',
			'idCategoria' => 'Id Categoria',
			'fecha_creacion' => 'Fecha Creacion',
			'estadoProd' => 'Estado Prod',
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

		$criteria->compare('idProducto',$this->idProducto);
		$criteria->compare('desc_Prod',$this->desc_Prod,true);
		$criteria->compare('presentacion',$this->presentacion,true);
		$criteria->compare('tipoProd',$this->tipoProd,true);
		$criteria->compare('stock',$this->stock);
		$criteria->compare('idMarca',$this->idMarca);
		$criteria->compare('idCategoria',$this->idCategoria);
		$criteria->compare('fecha_creacion',$this->fecha_creacion,true);
		$criteria->compare('estadoProd',$this->estadoProd,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Producto the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
