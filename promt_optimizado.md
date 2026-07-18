## Prompt — Landing Pages Mindden (Optimizado para Diversidad Estructural y Efecto WOW)

Actúa como un desarrollador Frontend experto con ojos de Director de Arte y redactor de contenido enfocado en conversión B2B de alta intención para tomadores de decisiones (CEOs, CFOs, Directores de Operaciones). 

Tu objetivo absoluto es crear una experiencia visualmente imponente, cinematográfica y fluida ("Efecto WOW") que cautive a perfiles ejecutivos C-Level.

Tu tarea es crear/rediseñar la landing page de SENTINEL que esta en la ruta /home/franciscoalanzavesromero/WEBS_MINDDEN_PRESENTACIONES/SENTINEL.

---

### 1. INVESTIGACIÓN PREVIA

1. Lee el documento del producto en `/home/franciscoalanzavesromero/SENTINEL/docs/presentacion_sentinel.md` para extraer métricas, ROI, cifras clave y funcionalidades.
2. Lee el CSS base en `css/style.css` de CUALQUIER landing existente para conocer todos los componentes disponibles (NO copies el HTML, solo usa los estilos CSS ya definidos).
3. Revisa AL MENOS 2 landing pages existentes para asegurar que la nueva sea **estructuralmente distinta** a todas ellas.

---

### 2. IDENTIDAD VISUAL (NO MODIFICAR)

Mantén obligatoriamente estos elementos de identidad corporativa Mindden:

- **Paleta**: Fondo `#050a16` / `#0a1628`, cyan `#22d3ee` → `#38bdf8`, teal `#14b8a6`, rojo `#f43f5e` para problemas.
- **Tipografía**: Inter (weights 400-800).
- **Componentes CSS**: `glass-card`, `gradient-text`, `gradient-bar`, `eyebrow`, `icon-tile`, `brand-chip`, `roi-chip`, `big-stat`, `agent-card`, `vs-grid`, `vs-card`, `tco-table`, `arch-flow`, `connector-row`, `whatif-row`, `gauge`, `pipeline-mock`.
- **Logo**: Siempre `img/mindden.png` con clase `hero-logo`.
- **Iconos**: Lucide via CDN.
- **Animaciones**: Clase `reveal` con `--reveal-delay`, `float`, `scroll-hint`.
- **Scroll snap**: Cada sección es un `<section class="slide">`.
- **Botones CTA**: Siempre email `info@mindden.com` y teléfono `+34 965 349 770`.
- **Cierre**: Siempre `<p class="mt-12 text-xs text-slate-600">` con "by <b>Mindden Soft Tech</b>".

---

### 3. SISTEMA DE DIVERSIFICACIÓN ESTRUCTURAL Y RITMO

**REGLA CRÍTICA**: Cada landing page debe ser **estructuralmente distinta** a las demás. No basta con cambiar textos; debes cambiar la **disposición visual**, el **orden de secciones** y los **componentes CSS utilizados**.

#### 3.1 Pool de Layouts de Hero (elige UNO distinto al de las landing existentes)

| Hero | Descripción |
|------|-------------|
| **H1** | Centrado completo: logo → chip → h1 → bar → p → botones centrados (como ACADEMY/AQUA_INT) |
| **H2** | Grid 2 columnas: texto izquierda + 4 roi-chips en grid derecha (como POWER_INT/PEOPLE/FLOW) |
| **H3** | Split asimétrico: 60% texto izquierda + mockup/dashboard real derecha |
| **H4** | Full-width con video de fondo o screenshot de producto como fondo |
| **H5** | Tipo "magazine": h1 a izquierda, 3 bullet points de beneficios a derecha, sin roi-chips |
| **H6** | Interactivo: hero con calculadora inline o slider de datos |

#### 3.2 Pool de Secciones (elige 7-10 de este pool, en orden ALEATORIO)

| Sección | Descripción | Componente CSS principal |
|---------|-------------|--------------------------|
| **S1** | Impacto Financiero / ROI | `roi-chip` o `big-stat` o `gauge` |
| **S2** | Problema vs Solución | `vs-grid` / `vs-card` (tipo AQUA_INT) O `glass-card` 2 cols (tipo POWER_INT) |
| **S3** | Casos de Uso / Sector | `accordion-item` + `result-card` |
| **S4** | Calculadora ROI Interactivo | Formulario + `result-card` + cálculo JS |
| **S5** | Funcionalidades → Beneficios | `agent-card` O `glass-card` con `icon-tile` (grid 2-3 cols) |
| **S6** | Métricas de Rendimiento Técnico | `big-stat` + `glass-card` con listas |
| **S7** | Comparativa Directa | `tco-table` (tabla completa) O `comparison-row` ( PEOPLE) O `vs-grid` |
| **S8** | Proceso de Integración 3 Pasos | Números circulares con `glass-card` O `pipeline-mock` O `arch-flow` |
| **S9** | Seguridad y Cumplimiento | 4 `glass-card` con iconos de escudo |
| **S10** | Arquitectura Técnica | `arch-flow` con nodos y flechas |
| **S11** | Resumen por Audiencia | 3 `glass-card` con audience-card |
| **S12** | Timeline / Cronograma | Línea vertical con `timeline-dot` + `timeline-step` |
| **S13** | Testimonios / Casos de Éxito | Cards con quotes + métricas inline |
| **S14** | FAQ / Preguntas Frecuentes | Acordeón vertical con `glass-card` |
| **S15** | Conectividad / Protocolos | Grid de `connector-row` o chips de protocolos |
| **S16** | Diagrama de Pipeline/Flujo | `pipeline-mock` con pasos animados |

#### 3.3 Restricciones de diversidad y Densidad Visual

- **NO repitas** el mismo patrón de Hero que la landing anterior.
- **NO repitas** más de 3 secciones consecutivas con el mismo layout (ej: no 3 grids de glass-card seguidos).
- **Mezcla** al menos 3 componentes CSS distintos por landing (ej: usa `vs-grid`, `tco-table` Y `pipeline-mock` en la misma página).
- **Incluye al menos 1 elemento interactivo** por landing (calculadora, acordeón, o tooltip).
- El **orden de las secciones** debe ser diferente al de las landing existentes.

---

### 4. ESTRUCTURA ESTRATÉGICA DE LA LANDING

Adapta la landing a las necesidades del producto, seleccionando del pool de secciones:

- **Hero Section (Gancho Principal):** Titular orientado al beneficio máximo del producto. Subtítulo persuasivo y datos de contacto.
- **Sección de Impacto Financiero:** Métricas clave de ahorro/ROI con números grandes y destacados.
- **Dolores del Cliente:** Problemas del sector vs solución que ofrece el producto.
- **Funcionalidades → Beneficios:** Traduce cada funcionalidad en un beneficio de negocio claro.
- **Métricas de Rendimiento:** Datos técnicos de escala mostrados como números grandes con impacto visual.
- **Mitigación de Riesgos:** Facilidad de implementación, seguridad, integración.
- **Proceso de Implementación:** 3 pasos simples para adopción rápida.
- **Ventaja Competitiva:** Diferenciadores clave vs soluciones genéricas.
- **Resumen por Audiencia:** Beneficios para CFO, COO y CEO.
- **Cierre con Contacto:** Email y teléfono directos.

---

### 5. REGLAS DE CONTENIDO

- **Cifras al Máximo:** Si el documento presenta rangos (ej. "8-15%"), usa el valor máximo (ej. "hasta un 15%").
- **Copywriting de respuesta directa:** Sin rodeos, directo al beneficio financiero/operativo.
- **Sin jerga técnica innecesaria:** Si se menciona tecnología, traducirla a beneficio de negocio.
- **Mantén el logotipo** actual (`img/mindden.png`).
- **Tono B2B ejecutivo:** Para CEOs, CFOs y Directores de Operaciones.

---

### 6. PROCESO DE EJECUCIÓN TÉCNICA

1. **Antes de escribir HTML:** Consulta el CSS base para saber qué clases están disponibles. NO inventes clases que no existan en el CSS.
2. **Genera el HTML** aplicando las directrices de contenido y diversidad estructural.
3. **Añade estilos inline** solo si es estrictamente necesario para la diversidad (máximo 50 líneas de `<style>` en el `<head>`).
4. **Incluye el JS** de Lucide icons y cualquier interactividad (calculadora, acordeón).
5. **Verifica** que el HTML esté bien formado y libre de errores de sintaxis.
6. **Diversidad check:** Compara visualmente con al menos 2 landing existentes y verifica que la estructura sea significativamente distinta.

---

### 7. ARCHIVOS A MODIFICAR

- **HTML**: `index.html` en la carpeta del producto
- **CSS**: Solo `css/style.css` si se necesitan nuevos componentes (preferir estilo inline para variaciones únicas)
- **JS**: `js/presentation.js` si se necesita interactividad adicional (calculadora, acordeón)

---

### 8. CHECKLIST DE DIVERSIDAD

Antes de entregar, verifica:

- [ ] El Hero tiene un layout distinto a las otras landing pages.
- [ ] Hay al menos 3 componentes CSS distintos en la página.
- [ ] El orden de secciones no es idéntico a ninguna landing existente.
- [ ] No hay más de 3 secciones consecutivas con el mismo patrón de grid.
- [ ] Hay al menos 1 elemento interactivo (calculadora, acordeón, etc.).
- [ ] La paleta de colores y tipografía son consistentes con Mindden.
- [ ] El contenido está basado en el documento del producto.
- [ ] Los datos de contacto son correctos (email + teléfono).

---

### 9. DIRECTRICES DEL EFECTO "WOW" (REGLAS DE DIRECCIÓN DE ARTE INTERNA)

Para asegurar un acabado gráfico premium de última generación que impresione visualmente, implementa las siguientes pautas de diseño fino sobre los componentes existentes:

#### 9.1 Contraste Lumínico y Efectos de Brillo (Glow Effects)
- **Uso Inteligente de Degradados:** Aplica la clase `gradient-text` combinando el Cyan y el Teal corporativos únicamente en las palabras clave del título principal y en los números masivos de `big-stat`.
- **Efecto Neón Sutil:** En los bordes de las tarjetas que tengan la clase `glass-card`, utiliza estilos inline controlados si es necesario para inyectar un sutil resplandor (`box-shadow: 0 0 25px -5px rgba(34, 211, 238, 0.15)`) únicamente en el elemento destacado o en el plan recomendado. Esto creará una separación de capas tridimensional sobre el fondo oscuro (`#050a16`).

#### 9.2 Sofisticación e Interacciones Premium por JavaScript
- **Calculadoras de ROI Dinámicas:** Si implementas la sección **S4**, no te limites a campos de texto clásicos. Genera controles deslizantes (`<input type="range">`) estilizados para simular volumen de negocio o ahorro de horas. Vincula eventos `input` en JavaScript para que los números cambien fluidamente en tiempo real con una pequeña animación de escalado visual en el `result-card`.
- **Acordeones y Pestañas con Transición Suave:** Los acordeones (en FAQs o Casos de uso) deben calcular dinámicamente el `max-height` en JS para evitar saltos ortopédicos. Al activarse un elemento, difumina ligeramente mediante opacidad los elementos inactivos adyacentes para centrar el foco visual del usuario.
- **Tooltips y Micro-interacciones:** Asegura que cada `icon-tile` o `brand-chip` reaccione al hover con transformaciones suaves (`transform: translateY(-4px) scale(1.02)`) para dar una sensación de interfaz viva y altamente reactiva.

#### 9.3 Ritmo y Espaciado Cinematográfico (White Space Masterclass)
- **Distribución Anti-Fatiga:** Cada sección `<section class="slide">` debe respirar. Agrupa la información en contenedores compactos y deja amplios márgenes alrededor. Evita saturar las columnas de los grids: si una sección usa un grid de 3 columnas, la sección inferior debe romper radicalmente esa estructura usando un formato horizontal (como `pipeline-mock` o `whatif-row`).
- **Líneas de Guía Visual:** Utiliza el componente `connector-row` o `gradient-bar` de manera estratégica entre secciones para forzar al ojo a seguir descendiendo a través del flujo cromático de la landing page.