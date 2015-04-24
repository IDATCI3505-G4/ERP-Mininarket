<?php

/**
 * This is the model class for table "producto".
 *
 * The followings are the available columns in table 'producto':
 * @property integer $idProducto
 * @property integer $idProveedor
 * @property string $Descripcion
 * @property string $precioCompra
 * @property string $precioVenta
 * @property integer $stock
 * @property string $fechaVencimiento
 * @property string $stado
 *
 * The followings are the available model relations:
 * @property Proveedor $idProveedor0
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
		
		
		$sql = "SELECT idProducto,idProveedor,Descripcion,precioCompra,precioVenta,stock,fechaVencimiento,
 IF(stado = 'V', 'Vigente','Caducado') AS stado
FROM Producto as  prod  WHERE idProducto=".$idProducto;
	

		return $this->findAllBySql($sql);
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
	public function agregarProducto($idProveedor,$descripcion,$precioCompra,$precioVenta,$stock,$fechaVencimiento,$stado){
		$resultado = array('data'=>1,'message'=>'Su solicitud ha sido procesada correctamente.');

		$producto=new Producto;

		
	
		
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
			array('idProveedor, stock', 'numerical', 'integerOnly'=>true),
			array('Descripcion', 'length', 'max'=>150),
			array('precioCompra, precioVenta', 'length', 'max'=>8),
			array('stado', 'length', 'max'=>1),
			array('fechaVencimiento', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('idProducto, idProveedor, Descripcion, precioCompra, precioVenta, stock, fechaVencimiento, stado', 'safe', 'on'=>'search'),
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
			'idProveedor0' => array(self::BELONGS_TO, 'Proveedor', 'idProveedor'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'idProducto' => 'Id Producto',
			'idProveedor' => 'Id Proveedor',
			'Descripcion' => 'Descripcion',
			'precioCompra' => 'Precio Compra',
			'precioVenta' => 'Precio Venta',
			'stock' => 'Stock',
			'fechaVencimiento' => 'Fecha Vencimiento',
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

		$criteria->compare('idProducto',$this->idProducto);
		$criteria->compare('idProveedor',$this->idProveedor);
		$criteria->compare('Descripcion',$this->Descripcion,true);
		$criteria->compare('precioCompra',$this->precioCompra,true);
		$criteria->compare('precioVenta',$this->precioVenta,true);
		$criteria->compare('stock',$this->stock);
		$criteria->compare('fechaVencimiento',$this->fechaVencimiento,true);
		$criteria->compare('stado',$this->stado,true);

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
