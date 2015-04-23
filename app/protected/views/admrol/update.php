<?php
/* @var $this AdmrolController */
/* @var $model Admrol */

$this->breadcrumbs=array(
	'Admrols'=>array('index'),
	$model->ide_rol=>array('view','id'=>$model->ide_rol),
	'Update',
);

$this->menu=array(
	array('label'=>'List Admrol', 'url'=>array('index')),
	array('label'=>'Create Admrol', 'url'=>array('create')),
	array('label'=>'View Admrol', 'url'=>array('view', 'id'=>$model->ide_rol)),
	array('label'=>'Manage Admrol', 'url'=>array('admin')),
);
?>

<h1>Update Admrol <?php echo $model->ide_rol; ?></h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>