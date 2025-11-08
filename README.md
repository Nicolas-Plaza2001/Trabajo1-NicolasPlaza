README
1. Descripción del Proyecto

AssetFlow es una aplicación desarrollada con Ionic y Angular, diseñada para la gestión integral de activos tecnológicos y empleados dentro de una organización.
El sistema permite registrar, asignar, devolver, buscar, actualizar y eliminar tanto equipos como empleados, además de mantener un historial de las últimas acciones realizadas.

Su diseño modular y navegación intuitiva permiten un uso eficiente tanto en entornos web como móviles.

2. Características Principales

Gestión completa de activos y empleados.

Simulación de lectura de códigos QR (sin necesidad de cámara real).

Registro y consulta de historial de movimientos.

Navegación tipo tab-bar entre las secciones principales.

Interfaz coherente y unificada gracias al uso de estilos globales.

3. Requisitos del Sistema

Antes de ejecutar la aplicación, asegúrese de tener instaladas las siguientes herramientas:

Herramienta	Versión mínima recomendada	Instalación
Node.js	18.x o superior	https://nodejs.org

npm	9.x o superior	Incluido con Node.js
Ionic CLI	7.x o superior	npm install -g @ionic/cli
Angular CLI	17.x o superior	npm install -g @angular/cli
4. Instalación

Clonar o descargar el proyecto en su equipo local.

Abrir una terminal dentro del directorio raíz del proyecto.

Instalar las dependencias necesarias ejecutando:

npm install


No se requiere la instalación de ningún componente adicional fuera de los mencionados anteriormente.

5. Ejecución del Proyecto

Para ejecutar la aplicación en modo desarrollo:

ionic serve


Luego, acceder desde el navegador a la dirección:

http://localhost:8100


6. Estructura del Proyecto
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

7. Principales Problemas y Soluciones

EDurante el desarrollo del proyecto surgieron distintos desafíos técnicos que aportaron una comprensión más profunda del entorno Ionic Angular y de las buenas prácticas de desarrollo frontend.

Gestión de Componentes Standalone:
Inicialmente se intentó declarar los componentes dentro de módulos convencionales, lo que generó errores de compilación.
La solución fue entender que los componentes standalone deben importarse directamente en lugar de declararse, lo que mejoró la comprensión del nuevo enfoque modular de Angular.

Manejo del Router y Acceso Público:
Se presentaron errores por declarar el Router como privado, impidiendo su uso en los archivos HTML.
Esto llevó a identificar la necesidad de marcarlo como public router: Router, reforzando la importancia del acceso a propiedades desde las plantillas.

Consistencia Visual entre Pantallas:
Al principio, cada vista tenía estilos propios, lo que rompía la coherencia visual.
Se decidió consolidar un único archivo global.scss con un estilo base, garantizando uniformidad y una experiencia más profesional.

Integración del Footer y Navegación Dinámica:
El footer requería mantener un comportamiento inteligente:
destacar la pestaña activa y evitar la navegación redundante hacia la misma página.
Esto impulsó el uso de directivas condicionales y una estructura más limpia en HTML, reforzando la comprensión de los flujos de navegación.

Estructura de Carpetas y Escalabilidad:
Organizar cada pantalla con su propio archivo .html, .ts y .scss permitió una arquitectura clara, escalable y mantenible, una práctica esencial en proyectos de mediano a gran tamaño.

Curva de Aprendizaje en Ionic UI Components:
Profundizar en el uso de componentes como ion-grid, ion-row, ion-col, ion-footer y ion-tab-bar fue clave para crear una interfaz adaptable y moderna.
La práctica constante con estos elementos reforzó la comprensión del diseño responsivo dentro del ecosistema Ionic.

8. Flujo de Navegación General
Dashboard → Gestión → (Asignar Activo / Devolver Activo)
Gestión → Buscar → Resultado
Gestión → Inventario → (Agregar / Actualizar / Eliminar)
Inventario → Finalización de acciones

9. Estilos Globales

Paleta de colores basada en tonos azul oscuro y gris claro.

Tipografía moderna sans-serif.

Estructura basada en ion-grid, ion-row, ion-col para diseño responsivo.

Menú inferior fijo con resaltado del tab activo.

Encabezado superior uniforme con logo a la izquierda y botón de cierre de sesión a la derecha.

10. Autor

Desarrollado por: Nicolás Plaza
Frameworks utilizados: Ionic, Angular

11. Estado del Proyecto

Versión estable y completamente funcional.
El proyecto puede ejecutarse directamente con el comando:

ionic serve