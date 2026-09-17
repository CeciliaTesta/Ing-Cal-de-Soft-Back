# Módulo Presentacion — corregido

Esta carpeta reemplaza completamente a tu carpeta `presentacion/` actual (los 13 archivos, con nombres y contenido ya corregidos, renombrados de Marca a Presentacion).

## Antes de copiarla a tu proyecto, quedan 3 pasos MANUALES afuera de esta carpeta:

### 1. Agregar la relación en `producto.entity.ts`
Hoy `Producto` no tiene ningún campo de presentación. Agregar algo como:

```typescript
import { Presentacion } from '../../../presentacion/domain/entities/presentacion.entity';

// dentro de la clase Producto:
@ManyToOne(() => Presentacion, (presentacion) => presentacion.productos)
@JoinColumn({ name: 'presentacion_id' })
presentacion: Presentacion;

@Column({ type: 'int', nullable: true })
presentacionId?: number;
```

(Mirá cómo está hecho el campo `marca` en el mismo archivo como referencia — debería ser muy similar.)

### 2. Agregar el método que falta en `IProductoRepository`
En `politica-eliminacion-presentacion.service.ts` se llama a:
```typescript
this.productoRepository.existsProductosActivosByPresentacion(presentacionId)
```
Este método todavía NO existe en `producto.repository-interface.ts` ni en su implementación. Tenés que agregarlo ahí, copiando el mismo patrón que ya existe para `existsProductosActivosByMarca`.

### 3. Registrar el módulo nuevo en `app.module.ts`
Agregar `PresentacionModule` al array de `imports` de tu módulo principal, igual que están registrados `MarcaModule`, `LineaModule`, etc.

## Después de estos 3 pasos

Con esto ya deberías poder: crear, listar, buscar, editar y eliminar presentaciones desde el backend, y asociarlas a un producto. Faltaría conectar el frontend (el `PresentacionesSelector` que ya existe) a estos endpoints nuevos — avisame cuando llegues a esa parte y seguimos.
