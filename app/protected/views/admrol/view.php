<?php
/* @var $this AdmrolController */
/* @var $model Admrol */

$this->breadcrumbs=array(
	'Admrols'=>array('index'),
	$model->ide_rol,
);

$this->menu=array(
	array('label'=>'List Admrol', 'url'=>array('index')),
	array('label'=>'Create Admrol', 'url'=>array('create')),
	array('label'=>'Update Admrol', 'url'=>array('update', 'id'=>$model->ide_rol)),
	array('label'=>'Delete Admrol', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->ide_rol),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Admrol', 'url'=>array('admin')),
);
?>

<h1>View Admrol #<?php echo $model->ide_rol; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'ide_rol',
		'des_nombre',
	),
)); ?>
