<?php
/* @var $this AdmrolController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Admrols',
);

$this->menu=array(
	array('label'=>'Create Admrol', 'url'=>array('create')),
	array('label'=>'Manage Admrol', 'url'=>array('admin')),
);
?>

<h1>Admrols</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
