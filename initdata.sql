use TenantExpress;
insert into TipoEntidad (id, descripcion, cantdigitos) values(1, "DNI", 8);
insert into TipoEntidad (id, descripcion, cantdigitos) values(6, "RUC", 11);
insert into TipoEntidad (id, descripcion, cantdigitos) values(7, "PASAPORTE", 12);
insert into TipoEntidad (id, descripcion, cantdigitos) values(4, "CARNET EXTRANJERIA", 12);
insert into TipoComprobante (prefijo, descripcion) values ('F', 'FACTURA');
insert into TipoComprobante (prefijo, descripcion)values ('B', 'BOLETA');
insert into TipoComprobante (prefijo, descripcion)values ('FC', 'NOTA DE CREDITO');
insert into TipoComprobante (prefijo, descripcion)values ('BC', 'NOTA DE DEBITO');
insert into TipoCondicion (nombre, diascredito, descripcion) values ('VENTA', 0, 'VENTA AL MOMENTO PAGO INSTANTANEO');
insert into TipoCondicion (nombre, diascredito, descripcion) values ('CREDITO 1', 1, 'SE OTORGA 1 DIAS DE CREDITO PARA PAGAR');
insert into TipoCondicion (nombre, diascredito, descripcion) values ('CREDITO 2', 2, 'SE OTORGA 2 DIAS DE CREDITO PARA PAGAR');
insert into TipoCondicion (nombre, diascredito, descripcion) values ('CREDITO 5', 5, 'SE OTORGA 5 DIAS DE CREDITO PARA PAGAR');
insert into TipoCondicion (nombre, diascredito, descripcion) values ('CREDITO 7', 7, 'SE OTORGA 7 DIAS DE CREDITO PARA PAGAR');
insert into TipoCondicion (nombre, diascredito, descripcion) values ('CREDITO 10', 10, 'SE OTORGA 10 DIAS DE CREDITO PARA PAGAR');
insert into TipoCondicion (nombre, diascredito, descripcion) values ('CREDITO 15', 15, 'SE OTORGA 15 DIAS DE CREDITO PARA PAGAR');
insert into TipoCondicion (nombre, diascredito, descripcion) values ('CREDITO 30', 30, 'SE OTORGA 30 DIAS DE CREDITO PARA PAGAR');
insert into TipoCondicion (nombre, diascredito, descripcion) values ('CONSIGNACION', 60, 'VENTA AL MOMENTO PAGO INSTANTANE');
insert into TipoPago (nombre, descripcion) values ('EFECTIVO [CONTADO]','SE OTORGA 1 DIAS DE CREDITO PARA PAGAR');
insert into TipoPago (nombre, descripcion) values ('TARJETA DÉBITO [CONTADO]','SE OTORGA 1 DIAS DE CREDITO PARA PAGAR');
insert into TipoPago (nombre, descripcion) values ('TARJETA CRÉDITO [CONTADO]','SE OTORGA 1 DIAS DE CREDITO PARA PAGAR');
insert into TipoPago (nombre, descripcion) values ('TRANSFERENCIA [CONTADO]','SE OTORGA 1 DIAS DE CREDITO PARA PAGAR');
insert into TipoPago (nombre, descripcion) values ('GIRO [CONTADO]','SE OTORGA 1 DIAS DE CREDITO PARA PAGAR');
insert into TipoPago (nombre, descripcion) values ('CHEQUE [CONTADO]','SE OTORGA 1 DIAS DE CREDITO PARA PAGAR');
insert into TipoPago (nombre, descripcion) values ('POR PAGAR [CRÉDITO]','SE OTORGA 1 DIAS DE CREDITO PARA PAGAR');
insert into TipoMoneda (nombre) values('SOLES');
insert into TipoMoneda (nombre) values('DOLARES');
insert into TipoMoneda (nombre) values('EUROS');
insert into Rol (id, descripcion, nombre) values (1,'Acceso total a funciones del tenant','administrador');
insert into Rol (id, descripcion, nombre) values (2,'Acceso total a funciones del facturacion','vendedor');
insert into Rol (id, descripcion, nombre) values (3,'Acceso','almacenero');
insert into Rol (id, descripcion, nombre) values (4,'Acceso','cliente');
insert into Privilegio (id, descripcion, nombre) values (1,'Acceso total a funciones de facturacion','facturas');
insert into Privilegio (id, descripcion, nombre) values (2,'Acceso total a funciones de boletas','boletas');
insert into Privilegio (id, descripcion, nombre) values (3,'Acceso total a funciones de administracion de usuarios','usuarios');
insert into Privilegio (id, descripcion, nombre) values (4,'Acceso reportes','reportes');
insert into Privilegio (id, descripcion, nombre) values (5,'Acceso almacenes','almacenes');
insert into Privilegio (id, descripcion, nombre) values (6,'Acceso ecomerce','eccomerce');

insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(1,1, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(1,2, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(1,3, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(1,4, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(1,5, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(2,1, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(2,2, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(4,6, now(),now());

insert into EstadoProducto (id, nombre) values (1,'stock');
insert into EstadoProducto (id, nombre) values (2,'vendido');
insert into EstadoProducto (id, nombre) values (3,'rma');
