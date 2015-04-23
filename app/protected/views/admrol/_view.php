<?php
/* @var $this AdmrolController */
/* @var $data Admrol */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('ide_rol')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->ide_rol), array('view', 'id'=>$data->ide_rol)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('des_nombre')); ?>:</b>
	<?php echo CHtml::encode($data->des_nombre); ?>
	<br />


</div>