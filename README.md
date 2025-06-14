# Registro-y-Ventas-Diarias
# Proyecto: Registro y Ventas Diarias

## 1. Planteamiento del problema

Los negocios pequeños no registran sus ventas diarias de forma digital, lo que dificulta conocer con precisión las ganancias diarias, los productos más vendidos y el control de inventario en tiempo real. Esta situación provoca pérdidas de información, errores en la gestión y dificultades para la toma de decisiones.

---

## 2. Objetivos y restricciones de negocio

**Objetivo general:**  
Desarrollar una aplicación web que permita a los negocios pequeños registrar y consultar sus ventas diarias, controlar inventario y generar estadísticas básicas para facilitar la gestión comercial.

**Objetivos específicos:**  
- Registrar las ventas diarias de manera rápida y sencilla.  
- Mantener actualizado el inventario automáticamente con cada venta.  
- Mostrar estadísticas de productos más vendidos y ganancias totales.  

**Restricciones de negocio:**  
- La solución debe ser fácil de usar para personas sin experiencia técnica.  
- El sistema debe funcionar sin conexión a internet (uso local).  
- Debe asegurar la integridad de los datos durante las operaciones.

---

## 3. Restricción tecnológica

La solución será desarrollada exclusivamente usando **JavaScript** para la lógica del frontend, utilizando almacenamiento local (`localStorage`) para guardar los datos. No se usarán frameworks externos ni backend, dado el alcance del proyecto y la restricción tecnológica.

---

## 4. Historias de usuario con criterios de aceptación

| ID   | Historia de Usuario                                        | Criterios de Aceptación                                           |
|-------|------------------------------------------------------------|------------------------------------------------------------------|
| HU1   | Como usuario, quiero registrar una venta con el nombre del producto, cantidad y precio para saber cuánto he vendido. | - El sistema debe permitir ingresar producto, cantidad y precio. <br> - La venta se debe guardar correctamente. <br> - Registro guardado en localStorage. <br> - Cálculo automático del total (cantidad * precio).|
| HU2   | Como usuario, quiero ver un resumen de las ventas del día para saber cuánto gané. | - El inventario debe restar automáticamente la cantidad vendida.  <br> - Mostrar todas las ventas registradas.  <br> - Mostrar el total sumado del día. |
| HU3   | Como usuario, quiero poder agregar una descripcion o nota a mi producto para llevar un mejor registro. | - El sistema debe mostrar la nota junto con el producto y precio. |
| HU4   | Como usuario quiero eliminar una venta errónea para mantener la información correcta. | - Se debe permitir eliminar ventas y actualizar inventario automáticamente. |

---

## 5. Identificación de ASR’s (Atributos de calidad y restricciones arquitectónicas)

- **Disponibilidad:** La aplicación debe estar disponible siempre que el usuario la abra, sin necesidad de conexión a internet.  
- **Usabilidad:** Interfaz simple y clara, adecuada para usuarios no técnicos.  
- **Rendimiento:** El sistema debe responder rápidamente a las acciones del usuario.  
- **Persistencia:** Uso de `localStorage` para almacenamiento local seguro y persistente.  
- **Modularidad:** Separación clara entre lógica de negocio y presentación para facilitar mantenimiento y escalabilidad.  

---

## 6. Arquitectura de Software propuesta

Se propone una arquitectura **MVC (Modelo-Vista-Controlador)** simple:

- **Modelo:** Gestiona los datos, acceso a `localStorage` y operaciones sobre inventario y ventas.  
- **Vista:** Presenta la interfaz HTML/CSS al usuario y muestra información actualizada.  
- **Controlador:** Gestiona la interacción del usuario, procesa eventos y actualiza modelo y vista.  

![Diagrama MVC](https://user-images.githubusercontent.com/tu_usuario/tu_repo/diagrama-mvc.png)  

---

## 7. MVP (Producto Mínimo Viable)

- Formulario para ingresar ventas (producto, precio y descripcion).

- Lista de ventas registradas.

- Suma total del día.

- Botón para borrar una venta.

---

## 8. Tecnologías, herramientas y conceptos aplicados

- JavaScript Vanilla (sin frameworks).  
- HTML5 y CSS para interfaz.  
- Uso de `localStorage` para almacenamiento persistente local.  
- Arquitectura MVC.  
- Control de versiones con Git y flujo Git Flow.  
- Manejo de ramas y commits siguiendo buenas prácticas.  

---

## 9. Esquema Git Flow

El proyecto usa el esquema Git Flow:  

- `main` para la versión estable.  
- `develop` para integración de nuevas funcionalidades.  
- Ramas `feature/` para desarrollo de funcionalidades específicas.  
- Ramas `release/` para preparar versiones.  
- Ramas `hotfix/` para corrección rápida de errores.  