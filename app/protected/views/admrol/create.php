<?php
/* @var $this AdmrolController */
/* @var $model Admrol */

$this->breadcrumbs=array(
	'Admrols'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List Admrol', 'url'=>array('index')),
	array('label'=>'Manage Admrol', 'url'=>array('admin')),
);
?>

<h1>Create Admrol</h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>