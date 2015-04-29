create table Cliente(
idCliente int AUTO_INCREMENT primary key,
RazSoc_Cli varchar(250) not null,
tipoPersona_Cli char(1) not null,
ruc_Cli char(11) not null,
direccion_Cli varchar(150) not null,
telefono_Cli char(9) not null,
email_Cli varchar(50),
fec_reg_Cli TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
estado_Cli char(1) not null DEFAULT '1'
);

create table Producto(
idProducto int AUTO_INCREMENT PRIMARY KEY,
desc_Prod varchar(100) NOT NULL,
presentacion varchar(20) NOT NULL,
tipoProd char(1) NOT  NULL DEFAULT '1',
stock int NOT NULL,
idMarca int ,
idCategoria int,
fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
estadoProd char(1) not null DEFAULT '1'
);

create table Marca(
idMarca int AUTO_INCREMENT PRIMARY KEY,
nomMarca varchar(100) NOT NULL
);
create table Categoria(
idCategoria int AUTO_INCREMENT PRIMARY KEY,
nomCategoria varchar(50) NOT NULL
);

alter table Producto add CONSTRAINT fk_producto_categoria FOREIGN KEY (idCategoria) references Categoria(idCategoria);
alter table Producto add CONSTRAINT fk_producto_marca FOREIGN KEY (idMarca) references Marca(idMarca);



create table Cliente(
idCliente int AUTO_INCREMENT Primary key,
RazonSocial varchar(150),
tipoPersona char(1),
ruc varchar(11),
direccion varchar(150),
telefono char(9),
email varchar(30),
fechaInsc datetime
);

create table Proveedor(
idProveedor int AUTO_INCREMENT Primary Key,
RasonSocial varchar(200),
tipoPersona char(1),
RUC varchar(11),
direccion varchar(100),
telefono char(9),
email varchar(255),
stado char(1)
);

select * from Proveedor
select * from PRODUCTO
alter table Producto add CONSTRAINT fk_producto_proveedor FOREIGN KEY (idProveedor) references Proveedor(idProveedor);

insert into Proveedor values('abc.sac',1,'10234567895','los olivos','12345678')

SELECT * FROM Producto WHERE idProducto=1

select prod.idProducto,prod.descripcion,prov.nombre from Proveedor prov,Producto prod

SELECT idProducto,idProveedor,Descripcion,precioCompra,precioVenta,stock,fechaVencimiento,
 IF(stado = 'V', 'Vigente','Caducado') AS Estado
FROM Producto as  prod  WHERE idProducto=1;

SELECT idProducto,idProveedor,Descripcion,precioCompra,precioVenta,stock,fechaVencimiento,
 IF(stado = 'V', 'Vigente','Caducado') AS stado
FROM Producto

SELECT IF(stado = 'V', 'Vigente','Caducado') AS stado
FROM Producto

SELECT CompanyName, 
    CASE WHEN Country IN ('USA', 'Canada') THEN 'North America'
         WHEN Country = 'Brazil' THEN 'South America'
         ELSE 'Europe' END AS Continent
FROM Suppliers
ORDER BY CompanyName;}


select * from sispersona t
INNER JOIN admcatalogo ac ON ac.ide_elemento=t.ide_condicion
where ac.ide_elemento=18
$dataProvider=new CActiveDataProvider('Sispersona', array(
		    'criteria' => array(
		        'join' => 'INNER JOIN admcatalogo ac ON ac.ide_elemento=t.ide_condicion',
		        'condition' =>'ac.ide_elemento='.$ideCondicion,
                                        

select * from sispersona;


