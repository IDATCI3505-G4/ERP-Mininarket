<?php
//=================================================================================
// CONFIGURACIONES DEL MODULO
//=================================================================================
//Titulo de la pagina
$this->pageTitle=Yii::app()->name . ' - Error';
// Titulo del modulo
$this->moduleTitle="Error 404";
// Breadcrumbs
$this->breadcrumbs=array(
	'Error',
);?>

<div class="error-page">
	<h2 class="headline text-yellow"> 404</h2>
    <div class="error-content"><br>
    	<h3><i class="fa fa-warning text-yellow"></i> Oops! Página no encontrada.</h3>
        <p>
            No pudimos encontrar la página que estabas buscando. 
            Mientras tanto, usted puede regresar al <a href='index.php'>inicio</a> o seleccione
            cualquier opción del menu.
        </p>
        <!--form class='search-form'>
        	<div class='input-group'>
            	<input type="text" name="search" class='form-control' placeholder="Search"/>
            	<div class="input-group-btn">
                    <button type="submit" name="submit" class="btn btn-warning btn-flat"><i class="fa fa-search"></i></button>
                </div>
            </div><!-- /.input-group --
        </form-->
    </div><!-- /.error-content -->
</div><!-- /.error-page -->