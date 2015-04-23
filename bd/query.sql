create table Producto(
idProducto int AUTO_INCREMENT Primary key,
idProveedor int,
Descripcion varchar(150),
precioCompra numeric(8,2),
precioVenta numeric(8,2),
stock int,
fechaVencimiento date,
stado char(1)
);

create table Proveedor(
idProveedor int AUTO_INCREMENT Primary Key,
nombre varchar(200),
tipoPersona BOOL,
RUC varchar(11),
direccion varchar(100),
telefono char(9)
);
select * from Proveedor
alter table Producto add CONSTRAINT fk_producto_proveedor FOREIGN KEY (idProveedor) references Proveedor(idProveedor);

insert into Proveedor values('abc.sac',1,'10234567895','los olivos','12345678')

SELECT * FROM Producto WHERE idProducto=1

select prod.idProducto,prod.descripcion,prov.nombre from Proveedor prov,Producto prod


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
ORDER BY CompanyName;