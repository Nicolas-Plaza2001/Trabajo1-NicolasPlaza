<<<<<<< HEAD
=======

>>>>>>> af1bd3c6c43188690d3a1b17b9623bbdfed17489
# README - AssetFlow

## 1\. Descripción del Proyecto

AssetFlow es una aplicación desarrollada con Ionic y Angular, diseñada para la gestión integral de activos tecnológicos y empleados dentro de una organización.
El sistema permite registrar, asignar, devolver, buscar, actualizar y eliminar tanto equipos como empleados, además de mantener un historial de las últimas acciones realizadas.

Su diseño modular y navegación intuitiva permiten un uso eficiente tanto en entornos web como móviles.

## 2\. Características Principales

  * Gestión completa de activos y empleados.
  * Simulación de lectura de códigos QR (sin necesidad de cámara real).
  * Registro y consulta de historial de movimientos.
  * Navegación tipo tab-bar entre las secciones principales.
  * Interfaz coherente y unificada gracias al uso de estilos globales.

## 3\. Requisitos del Sistema

Antes de ejecutar la aplicación, asegúrese de tener instaladas las siguientes herramientas:

| Herramienta | Versión mínima recomendada | Instalación |
| :--- | :--- | :--- |
| Node.js | 18.x o superior | [https://nodejs.org](https://nodejs.org) |
| npm | 9.x o superior | Incluido con Node.js |
| Ionic CLI | 7.x o superior | `npm install -g @ionic/cli` |
| Angular CLI | 17.x o superior | `npm install -g @angular/cli` |

## 4\. Instalación

Siga estos pasos para configurar el proyecto en su entorno local:

1.  Clonar el repositorio desde GitHub:
    ```bash
    git clone https://github.com/Nicolas-Plaza2001/Trabajo1-NicolasPlaza.git
    ```
2.  Abrir una terminal y navegar al directorio raíz del proyecto:
    ```bash
    cd Trabajo1-NicolasPlaza
    ```
3.  Instalar las dependencias necesarias:
    ```bash
    npm install
    ```

No se requiere la instalación de ningún componente adicional fuera de los mencionados anteriormente.

## 5\. Ejecución del Proyecto

Para ejecutar la aplicación en modo desarrollo:

```bash
ionic serve
```

Luego, acceder desde el navegador a la dirección: `http://localhost:8100`

## 6\. Estructura del Proyecto

```
src/
├── app/
│   ├── dashboard/
│   ├── gestion/
│   ├── gestion-asignar/
│   ├── gestion-asignar-finish/
│   ├── gestion-devolver/
│   ├── buscar/
│   ├── resultado/
│   ├── inventario/
│   ├── inventario-agregar-equipo/
│   ├── inventario-agregar-equipo-finish/
│   ├── inventario-actualizar-equipo/
│   ├── inventario-actualizar-empleado/
│   ├── inventario-eliminar-equipo/
│   ├── inventario-eliminar-empleado/
├── assets/
│   ├── logo.png
│   └── icons/
│       ├── buscar.png
│       ├── gestion.png
│       ├── home.png
│       ├── inventario.png
│       └──  perfil.png
└── theme/
    ├── variables.scss
    └── global.scss
```

## 7\. Principales Problemas y Soluciones

<<<<<<< HEAD
Durante el desarrollo de AssetFlow surgieron varios desafíos técnicos que permitieron aprender y aplicar buenas prácticas de Ionic y Angular:

Eliminación del uso de servicios para simplificar la lógica:
Inicialmente se intentó usar un servicio ActualizarEmpleado para manejar actualizaciones de empleados y equipos, pero esto generó errores de inyección y dificultades para los tests. La solución fue mover toda la lógica directamente a los componentes, evitando dependencias externas y simplificando la estructura.

Uso de componentes Standalone:
Al principio se declararon componentes dentro de módulos convencionales (NgModule), lo que provocó errores de compilación y conflictos de importación. La solución fue marcar todos los componentes como standalone: true e importar directamente IonicModule, FormsModule y CommonModule dentro de cada componente. Esto también permitió que cada pantalla funcionara de manera independiente y facilitó la navegación entre ellas.

Problemas con el Router y bindings en templates:
Algunos errores surgieron al declarar el Router como private dentro de los componentes, lo que impedía utilizar router.navigate desde los archivos HTML. Se corrigió declarando public router: Router para permitir el acceso desde la plantilla y garantizar la navegación fluida.

Manejo de formularios y ngModel:
Se detectaron errores al enlazar los inputs de los formularios con las variables de los componentes, especialmente al actualizar empleados y equipos. La solución fue asegurar la correcta importación de FormsModule en cada componente standalone y mantener los bindings consistentes en los archivos HTML.

Consistencia visual y uso de footer:
Al principio, cada pantalla tenía su propio estilo y el footer no reflejaba la pestaña activa correctamente. Se consolidaron los estilos en global.scss y se implementó la lógica para resaltar la pestaña seleccionada, logrando coherencia en toda la aplicación.

Simulación de funcionalidades sin backend:
Como el proyecto no contaba con un backend real, se optó por simular búsquedas y generación de códigos QR directamente en los componentes, usando arrays de ejemplo y redirecciones a pantallas “finish”. Esto permitió probar la navegación y la lógica de forma funcional sin errores.

Errores y aprendizajes recurrentes:

Intentos de usar servicios que no existían (this.activoService.actualizarEmpleado).

Errores en tests unitarios al intentar inyectar servicios inexistentes.

Necesidad de organizar cada pantalla con .html, .ts y .scss propios para evitar conflictos.
Cada uno de estos problemas se solucionó adoptando la estrategia de componentes autónomos, importaciones correctas y lógica directamente en el componente.
## 8\. Flujo de Navegación General

  * Dashboard → Gestión → (Asignar Activo / Devolver Activo)
  * Gestión → Buscar → Resultado
  * Gestión → Inventario → (Agregar / Actualizar / Eliminar)
  * Inventario → Finalización de acciones

## 9\. Estilos Globales

  * Paleta de colores basada en tonos azul oscuro y gris claro.
  * Tipografía moderna sans-serif.
  * Estructura basada en `ion-grid`, `ion-row`, `ion-col` para diseño responsivo.
  * Menú inferior fijo con resaltado del tab activo.
  * Encabezado superior uniforme con logo a la izquierda y botón de cierre de sesión a la derecha.

## 10\. Autor

  * **Desarrollado por:** Nicolás Plaza
  * **Frameworks utilizados:** Ionic, Angular

=======
Durante el desarrollo del proyecto surgieron distintos desafíos técnicos que aportaron una comprensión más profunda del entorno Ionic Angular y de las buenas prácticas de desarrollo frontend.

  * **Gestión de Componentes Standalone:**
    Inicialmente se intentó declarar los componentes dentro de módulos convencionales, lo que generó errores de compilación.
    La solución fue entender que los componentes standalone deben importarse directamente en lugar de declararse, lo que mejoró la comprensión del nuevo enfoque modular de Angular.

  * **Manejo del Router y Acceso Público:**
    Se presentaron errores por declarar el Router como privado, impidiendo su uso en los archivos HTML.
    Esto llevó a identificar la necesidad de marcarlo como `public router: Router`, reforzando la importancia del acceso a propiedades desde las plantillas.

  * **Consistencia Visual entre Pantallas:**
    Al principio, cada vista tenía estilos propios, lo que rompía la coherencia visual.
    Se decidió consolidar un único archivo `global.scss` con un estilo base, garantizando uniformidad y una experiencia más profesional.

  * **Integración del Footer y Navegación Dinámica:**
    El footer requería mantener un comportamiento inteligente: destacar la pestaña activa y evitar la navegación redundante hacia la misma página.
    Esto impulsó el uso de directivas condicionales y una estructura más limpia en HTML, reforzando la comprensión de los flujos de navegación.

  * **Estructura de Carpetas y Escalabilidad:**
    Organizar cada pantalla con su propio archivo `.html`, `.ts` y `.scss` permitió una arquitectura clara, escalable y mantenible, una práctica esencial en proyectos de mediano a gran tamaño.

  * **Curva de Aprendizaje en Ionic UI Components:**
    Profundizar en el uso de componentes como `ion-grid`, `ion-row`, `ion-col`, `ion-footer` y `ion-tab-bar` fue clave para crear una interfaz adaptable y moderna.
    La práctica constante con estos elementos reforzó la comprensión del diseño responsivo dentro del ecosistema Ionic.

## 8\. Flujo de Navegación General

  * Dashboard → Gestión → (Asignar Activo / Devolver Activo)
  * Gestión → Buscar → Resultado
  * Gestión → Inventario → (Agregar / Actualizar / Eliminar)
  * Inventario → Finalización de acciones

## 9\. Estilos Globales

  * Paleta de colores basada en tonos azul oscuro y gris claro.
  * Tipografía moderna sans-serif.
  * Estructura basada en `ion-grid`, `ion-row`, `ion-col` para diseño responsivo.
  * Menú inferior fijo con resaltado del tab activo.
  * Encabezado superior uniforme con logo a la izquierda y botón de cierre de sesión a la derecha.

## 10\. Autor

  * **Desarrollado por:** Nicolás Plaza
  * **Frameworks utilizados:** Ionic, Angular

>>>>>>> af1bd3c6c43188690d3a1b17b9623bbdfed17489
## 11\. Estado del Proyecto

Versión estable y completamente funcional.
El proyecto puede ejecutarse directamente con el comando:

```bash
ionic serve
<<<<<<< HEAD
```
=======
```
>>>>>>> af1bd3c6c43188690d3a1b17b9623bbdfed17489
