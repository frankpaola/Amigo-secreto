# Amigo Secreto

Una aplicación web interactiva para organizar sorteos de amigo secreto de manera fácil y divertida.

## Demo en Vivo

**Prueba la aplicación aquí:** [https://frankpaola.github.io/Amigo-secreto/](https://frankpaola.github.io/Amigo-secreto/)

## Descripción

**Amigo Secreto** es una aplicación web que permite a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto". La aplicación cuenta con una interfaz intuitiva y funcionalidades completas para gestionar el proceso de sorteo.

## Funcionalidades

### Funcionalidades Implementadas
- **Agregar nombres**: Los usuarios pueden escribir nombres y agregarlos a la lista
- **Validar entrada**: El sistema valida que no se ingresen campos vacíos
- **Visualizar lista**: Los nombres ingresados se muestran dinámicamente en pantalla
- **Sorteo aleatorio**: Selección aleatoria de un amigo secreto
- **Manejo de errores**: Alertas informativas para guiar al usuario
- **Interfaz responsive**: Diseño adaptable a diferentes dispositivos

### Casos de Uso
- Organizar intercambios de regalos en oficinas
- Sorteos para eventos familiares
- Actividades recreativas en grupos de amigos
- Dinámicas de team building

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos y diseño responsive
- **JavaScript ES6+**: Lógica de aplicación y manipulación del DOM
- **Git**: Control de versiones
- **GitHub**: Repositorio y documentación
- **GitHub Pages**: Hosting y publicación

## Instalación y Uso

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (opcional, para modificaciones)

### Instrucciones

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/frankpaola/Amigo-secreto.git
   ```

2. **Navegar al directorio del proyecto**
   ```bash
   cd Amigo-secreto
   ```

3. **Abrir la aplicación**
   - Opción 1: Hacer doble clic en `index.html`
   - Opción 2: Con VS Code y Live Server
   ```bash
   code .
   # Luego usar la extensión Live Server
   ```
   - Opción 3: Servidor local
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (si tienes http-server instalado)
   npx http-server
   ```

4. **Resultado**: La aplicación estará disponible en tu navegador

## Estructura del Proyecto

```
Amigo-secreto/
│
├── assets/                      # Recursos multimedia
│   ├── amigo-secreto.png       # Imagen principal
│   └── play_circle_outline.png # Ícono de sortear
│
├── index.html                  # Estructura HTML principal
├── style.css                   # Estilos y diseño
├── app.js                      # Lógica JavaScript
├── README.md                   # Documentación del proyecto
└── .gitignore                  # Archivos ignorados por Git
```

## Guía de Uso

### Paso a Paso

1. **Agregar Participantes**
   - Escribe un nombre en el campo de texto
   - Haz clic en el botón "Añadir" o presiona Enter
   - El nombre aparecerá en la lista de participantes

2. **Gestionar Lista**
   - Los nombres se muestran dinámicamente
   - No se permiten nombres duplicados o vacíos
   - La lista se actualiza automáticamente

3. **Realizar Sorteo**
   - Haz clic en "Sortear amigo" 
   - El sistema seleccionará aleatoriamente un participante
   - El resultado se mostrará destacado en pantalla

4. **Repetir Sorteos**
   - Puedes realizar múltiples sorteos
   - Cada sorteo es completamente aleatorio e independiente

### Funciones JavaScript Principales

```javascript
// Agregar un amigo a la lista
agregarAmigo()

// Actualizar la visualización de la lista
actualizarListaAmigos()

// Realizar el sorteo aleatorio
sortearAmigo()
```

## Personalización

### Modificar Estilos
Edita `style.css` para personalizar:
- Colores del tema
- Tipografías
- Efectos de animación
- Diseño responsive

### Extender Funcionalidades
Algunas ideas para mejorar:
- Historial de sorteos
- Exclusión temporal de ganadores
- Exportar resultados
- Temas de colores alternativos

## Desarrollo

### Roadmap Completado
- [x] **Paso 1**: Crear array para almacenar nombres
- [x] **Paso 2**: Implementar función para agregar amigos
- [x] **Paso 3**: Mostrar nombres en la interfaz
- [x] **Paso 4**: Implementar sorteo aleatorio
- [x] **Paso 5**: Documentación completa
- [x] **Paso 6**: Publicación en GitHub Pages

### Proceso de Desarrollo
Este proyecto fue desarrollado siguiendo una metodología paso a paso:
1. Estructuración del HTML base
2. Implementación progresiva de funcionalidades JavaScript
3. Validaciones y manejo de errores
4. Documentación y testing
5. Publicación y deployment

## Testing

### Casos de Prueba Manuales

**Agregar nombres válidos**
- Resultado esperado: El nombre se agrega a la lista

**Intentar agregar nombre vacío**  
- Resultado esperado: Mensaje de alerta

**Sortear con lista vacía**
- Resultado esperado: Mensaje de validación

**Sortear con múltiples nombres**
- Resultado esperado: Selección aleatoria

**Múltiples sorteos consecutivos**
- Resultado esperado: Resultados aleatorios diferentes

## Contribución

Las contribuciones son bienvenidas. Si quieres mejorar el proyecto:

1. **Fork** el repositorio
2. Crea una **rama** para tu feature (`git checkout -b feature/MejoraNueva`)
3. **Commit** tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/MejoraNueva`)
5. Abre un **Pull Request**

### Ideas para Contribuir
- Agregar animaciones CSS
- Implementar tema oscuro
- Crear version mobile app
- Agregar tests automatizados
- Traducir a otros idiomas

## Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

## Autor

**frankpaola**
- GitHub: [@frankpaola](https://github.com/frankpaola)
- Proyecto: [Amigo-secreto](https://github.com/frankpaola/Amigo-secreto)

## Agradecimientos

- **Formación en Programación**: Challenge desarrollado como parte del programa de aprendizaje
- **Comunidad de Desarrolladores**: Por el apoyo y recursos compartidos
- **Tradición del Amigo Secreto**: Inspiración para digitalizar esta divertida actividad

## Métricas del Proyecto

- **Líneas de código**: ~100 JS, ~50 HTML, ~200 CSS
- **Tiempo de desarrollo**: Implementación paso a paso
- **Compatibilidad**: Navegadores modernos (ES6+)
- **Performance**: Carga instantánea, sin dependencias externas
- **Deployment**: GitHub Pages con actualización automática

---

**Si el proyecto te fue útil, no olvides darle una estrella en GitHub**

[Volver al inicio](#amigo-secreto)

**Amigo Secreto** es una aplicación web que permite a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto". La aplicación cuenta con una interfaz intuitiva y funcionalidades completas para gestionar el proceso de sorteo.

## Funcionalidades

### Funcionalidades Implementadas
- **Agregar nombres**: Los usuarios pueden escribir nombres y agregarlos a la lista
- **Validar entrada**: El sistema valida que no se ingresen campos vacíos
- **Visualizar lista**: Los nombres ingresados se muestran dinámicamente en pantalla
- **Sorteo aleatorio**: Selección aleatoria de un amigo secreto
- **Manejo de errores**: Alertas informativas para guiar al usuario
- **Interfaz responsive**: Diseño adaptable a diferentes dispositivos

### Casos de Uso
- Organizar intercambios de regalos en oficinas
- Sorteos para eventos familiares
- Actividades recreativas en grupos de amigos
- Dinámicas de team building

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos y diseño responsive
- **JavaScript ES6+**: Lógica de aplicación y manipulación del DOM
- **Git**: Control de versiones
- **GitHub**: Repositorio y documentación

## Instalación y Uso

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (opcional, para modificaciones)

### Instrucciones

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/frankpaola/Amigo-secreto.git
   ```

2. **Navegar al directorio del proyecto**
   ```bash
   cd Amigo-secreto
   ```

3. **Abrir la aplicación**
   - Opción 1: Hacer doble clic en `index.html`
   - Opción 2: Con VS Code y Live Server
   ```bash
   code .
   # Luego usar la extensión Live Server
   ```
   - Opción 3: Servidor local
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (si tienes http-server instalado)
   npx http-server
   ```

4. **Resultado**: La aplicación estará disponible en tu navegador

## Estructura del Proyecto

```
Amigo-secreto/
│
├── assets/                      # Recursos multimedia
│   ├── amigo-secreto.png       # Imagen principal
│   └── play_circle_outline.png # Ícono de sortear
│
├── index.html                  # Estructura HTML principal
├── style.css                   # Estilos y diseño
├── app.js                      # Lógica JavaScript
├── README.md                   # Documentación del proyecto
└── .gitignore                  # Archivos ignorados por Git
```

## Guía de Uso

### Paso a Paso

1. **Agregar Participantes**
   - Escribe un nombre en el campo de texto
   - Haz clic en el botón "Añadir" o presiona Enter
   - El nombre aparecerá en la lista de participantes

2. **Gestionar Lista**
   - Los nombres se muestran dinámicamente
   - No se permiten nombres duplicados o vacíos
   - La lista se actualiza automáticamente

3. **Realizar Sorteo**
   - Haz clic en "Sortear amigo" 
   - El sistema seleccionará aleatoriamente un participante
   - El resultado se mostrará destacado en pantalla

4. **Repetir Sorteos**
   - Puedes realizar múltiples sorteos
   - Cada sorteo es completamente aleatorio e independiente

### Funciones JavaScript Principales

```javascript
// Agregar un amigo a la lista
agregarAmigo()

// Actualizar la visualización de la lista
actualizarListaAmigos()

// Realizar el sorteo aleatorio
sortearAmigo()
```

## Personalización

### Modificar Estilos
Edita `style.css` para personalizar:
- Colores del tema
- Tipografías
- Efectos de animación
- Diseño responsive

### Extender Funcionalidades
Algunas ideas para mejorar:
- Historial de sorteos
- Exclusión temporal de ganadores
- Exportar resultados
- Temas de colores alternativos

## Desarrollo

### Roadmap Completado
- [x] **Paso 1**: Crear array para almacenar nombres
- [x] **Paso 2**: Implementar función para agregar amigos
- [x] **Paso 3**: Mostrar nombres en la interfaz
- [x] **Paso 4**: Implementar sorteo aleatorio
- [x] **Paso 5**: Documentación completa

### Proceso de Desarrollo
Este proyecto fue desarrollado siguiendo una metodología paso a paso:
1. Estructuración del HTML base
2. Implementación progresiva de funcionalidades JavaScript
3. Validaciones y manejo de errores
4. Documentación y testing

## Testing

### Casos de Prueba Manuales

**Agregar nombres válidos**
- Resultado esperado: El nombre se agrega a la lista

**Intentar agregar nombre vacío**  
- Resultado esperado: Mensaje de alerta

**Sortear con lista vacía**
- Resultado esperado: Mensaje de validación

**Sortear con múltiples nombres**
- Resultado esperado: Selección aleatoria

**Múltiples sorteos consecutivos**
- Resultado esperado: Resultados aleatorios diferentes

## Contribución

Las contribuciones son bienvenidas. Si quieres mejorar el proyecto:

1. **Fork** el repositorio
2. Crea una **rama** para tu feature (`git checkout -b feature/MejoraNueva`)
3. **Commit** tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/MejoraNueva`)
5. Abre un **Pull Request**

### Ideas para Contribuir
- Agregar animaciones CSS
- Implementar tema oscuro
- Crear version mobile app
- Agregar tests automatizados
- Traducir a otros idiomas

## Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

## Autor

**frankpaola**
- GitHub: [@frankpaola](https://github.com/frankpaola)
- Proyecto: [Amigo-secreto](https://github.com/frankpaola/Amigo-secreto)

## Agradecimientos

- **Formación en Programación**: Challenge desarrollado como parte del programa de aprendizaje
- **Comunidad de Desarrolladores**: Por el apoyo y recursos compartidos
- **Tradición del Amigo Secreto**: Inspiración para digitalizar esta divertida actividad

## Métricas del Proyecto

- **Líneas de código**: ~100 JS, ~50 HTML, ~200 CSS
- **Tiempo de desarrollo**: Implementación paso a paso
- **Compatibilidad**: Navegadores modernos (ES6+)
- **Performance**: Carga instantánea, sin dependencias externas

---

**Si el proyecto te fue útil, no olvides darle una estrella en GitHub**

[Volver al inicio](#amigo-secreto)
