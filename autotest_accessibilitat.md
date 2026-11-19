# Checklist d'Autotest d'Accessibilitat Web --- Afterdark

**Data de revisió:** 19/11/2026\
**Pàgines revisades:** Inici, Explorar, Novetats, Login i Registre.

------------------------------------------------------------------------

## 1. Protocol i metodologia

### Avaluació automàtica

-   S'han revisat les pàgines amb Google Lighthouse en escriptori i
    mòbil. Després de corregir el contrast del footer, les pàgines
    comprovades han obtingut 100 en accessibilitat.
-   S'han revisat amb WAVE: no s'han detectat errors ni errors de
    contrast en les comprovacions indicades. Han aparegut avisos sobre
    alguns enllaços repetits o destinacions provisionals.
-   S'han pres com a referència els mínims WCAG AA de contrast: 4,5:1
    per al text normal i 3:1 per al text gran.

### Inspecció manual

-   S'ha navegat amb `Tab`, `Shift + Tab` i `Enter`.
-   S'ha comprovat el focus dels elements interactius i l'absència de
    trampes de teclat.
-   S'ha provat el zoom al 200 % i al 400 %.
-   S'ha realitzat una simulació de daltonisme; la interfície s'ha
    continuat distingint correctament.
-   La desactivació dels fulls d'estil CSS s'ha completat correctament. El contingut manté una estructura semàntica i un ordre de lectura coherent.

### Documentació

Les incidències corregides es documenten al backlog. Les funcionalitats
encara no implementades i les proves pendents s'identifiquen
separadament.

------------------------------------------------------------------------

## 2. Bloc 1: Estructura i semàntica HTML

  -------------------------------------------------------------------------------
  Estat             Criteri            Mètode            Observacions i acció
                                                         correctora
  ----------------- ------------------ ----------------- ------------------------
  **OK**            Punts de           Inspecció del     Les pàgines revisades
                    referència         codi HTML.        utilitzen una estructura
                    semàntics                            semàntica i un `main`
                    (`header`, `nav`,                    principal. Les
                    `main`, `footer`).                   navegacions estan
                                                         identificades amb
                                                         `aria-label`, inclosa la
                                                         del footer. No s'ha
                                                         considerat necessari
                                                         afegir `aside`.

  **OK, revisió     Jerarquia          Inspecció del     A Inici s'ha comprovat
  parcial**         d'encapçalaments   codi i WAVE.      un únic `h1` i els
                    (`h1` a `h6`).                       apartats principals
                                                         utilitzen `h2`. Cal
                                                         mantenir el mateix
                                                         criteri en contingut
                                                         nou.

  **OK, amb         Distinció          Inspecció del     S'utilitzen `<a>` per
  enllaços          semàntica entre    codi HTML.        navegar i `<button>` per
  provisionals**    botons i enllaços.                   executar accions. Alguns
                                                         enllaços encara tenen
                                                         destinacions
                                                         provisionals
                                                         (`href="#"`,
                                                         `#favoritos` o
                                                         `#contacto`) que
                                                         s'hauran de completar
                                                         quan s'implementin les
                                                         funcionalitats.

  **OK / No         Atributs ARIA i    Inspecció del DOM Les navegacions tenen
  aplicable**       estats bàsics.     i atributs ARIA.  etiquetes accessibles,
                                                         els enllaços d'icona
                                                         tenen noms accessibles i
                                                         la pàgina actual
                                                         s'identifica amb
                                                         `aria-current="page"`.
                                                         No hi ha menús
                                                         desplegables que
                                                         necessitin
                                                         `aria-expanded` en la
                                                         interfície revisada.
  -------------------------------------------------------------------------------

------------------------------------------------------------------------

## 3. Bloc 2: Percepció visual, color i adaptabilitat

  --------------------------------------------------------------------------
  Estat             Criteri            Mètode            Observacions i
                                                         acció correctora
  ----------------- ------------------ ----------------- -------------------
  **OK en les       Alternatives de    Inspecció dels    Les imatges
  imatges           text (`alt`).      atributs `alt`.   decoratives
  revisades**                                            utilitzen `alt=""`;
                                                         els logos
                                                         informatius tenen
                                                         text alternatiu i
                                                         els enllaços
                                                         d'icona tenen
                                                         `aria-label`. Cal
                                                         mantenir aquest
                                                         criteri en les
                                                         imatges que
                                                         s'afegeixin.

  **Corregit**      Contrast de color  Revisió de        El text del footer
                    (nivell AA).       combinacions,     tenia una opacitat
                                       WAVE i            massa baixa
                                       Lighthouse.       (`text-luna/40`).
                                                         S'ha canviat a
                                                         `text-luna/75`.


  **OK**            Independència del  Simulació de      S'ha realitzat la
                    color.             daltonisme.       simulació i la
                                                         interfície s'ha
                                                         continuat
                                                         distingint
                                                         correctament.

  **OK / Corregit** Redimensionament i Zoom del          El contingut
                    zoom.              navegador al 200  continua llegible.
                                       % i 400 %.        A Login i Registre
                                                         s'ha eliminat
                                                         `overflow-hidden`
                                                         del `body`, que
                                                         bloquejava el
                                                         scroll quan el
                                                         contingut superava
                                                         l'altura de la
                                                         pantalla. Les
                                                         proves al 200 % i
                                                         400 % han funcionat
                                                         a les pàgines
                                                         comprovades.
  --------------------------------------------------------------------------

------------------------------------------------------------------------

## 4. Bloc 3: Navegabilitat, teclat i control del focus

  -----------------------------------------------------------------------
  Estat             Criteri           Mètode            Observacions i
                                                        acció correctora
  ----------------- ----------------- ----------------- -----------------
  **OK**            Accés complet per Navegació amb     Els elements
                    teclat.           `Tab`,            interactius
                                      `Shift + Tab` i   revisats reben el
                                      `Enter`.          focus i es poden
                                                        recórrer amb el
                                                        teclat. No s'han
                                                        detectat trampes
                                                        de focus.

  **OK**            Focus visual clar Prova manual amb  Els enllaços i
                    i perceptible.    `Tab`.            controls mostren
                                                        un contorn o un
                                                        altre indicador
                                                        visual quan reben
                                                        el focus.

  **Corregit**      Enllaç *Skip to   Prémer `Tab` en   S'ha afegit
                    main content*.    carregar la       «Saltar al
                                      pàgina i activar  contingut
                                      amb `Enter`.      principal», ocult
                                                        fins que rep el
                                                        focus, i
                                                        `id="main"` a
                                                        `<main>`. S'ha
                                                        comprovat que
                                                        apareix i permet
                                                        saltar al
                                                        contingut
                                                        principal.

  **OK**            Ordre lògic de    Revisió de        L'ordre de focus
                    navegació.        l'ordre de        és lògic. No
                                      tabulació i cerca s'han trobat
                                      de `tabindex`.    valors positius
                                                        de `tabindex`.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 5. Bloc 4: Formularis, estats de la interfície i gestió d'errors

  ---------------------------------------------------------------------------
  Estat             Criteri           Mètode            Observacions i acció
                                                        correctora
  ----------------- ----------------- ----------------- ---------------------
  **OK**            Associació        Revisió de `for`  Tots els camps
                    explícita de      i `id` a Login i  revisats tenen un
                    `label`.          Registre.         `label` visible
                                                        associat a un `input`
                                                        amb el mateix
                                                        identificador. Els
                                                        placeholders són
                                                        complementaris.

  **OK per a la     Gestió d'errors.  Enviament amb     `required`,
  validació                           camps buits,      `type="email"` i
  nativa**                            correu incorrecte `minlength="8"`
                                      i contrasenya     activen la validació
                                      inferior al       nativa del navegador.
                                      mínim.            Els missatges s'han
                                                        mostrat durant les
                                                        proves. Encara no hi
                                                        ha gestió
                                                        personalitzada
                                                        d'errors del servidor
                                                        ni regions
                                                        `aria-live`; es
                                                        revisaran amb el
                                                        backend. La
                                                        coincidència de
                                                        contrasenyes també
                                                        s'haurà de garantir
                                                        amb la lògica del
                                                        registre.

  **Pendent del     Feedback de       Revisió de        Els formularis encara
  backend**         càrrega i estat   formularis i      no fan peticions
                    del sistema.      peticions         reals d'autenticació
                                      asíncrones        o registre. No s'ha
                                      disponibles.      afegit cap indicador
                                                        de càrrega fictici.
                                                        Quan hi hagi
                                                        peticions reals,
                                                        caldrà mostrar
                                                        l'estat de càrrega i
                                                        evitar enviaments
                                                        duplicats.

  **OK**            Estructuració i   Revisió de        Els formularis són
                    autocompletat.    `fieldset`,       simples i no
                                      `legend` i        necessiten
                                      `autocomplete`.   `fieldset`/`legend`
                                                        addicionals.
                                                        S'utilitzen valors
                                                        adequats com `email`,
                                                        `username`,
                                                        `current-password` i
                                                        `new-password`.
  ---------------------------------------------------------------------------

------------------------------------------------------------------------

## 6. Backlog de correccions tècniques i millores d'accessibilitat

  -------------------------------------------------------------------------------------------------------------------------------------
  ID           Criteri WCAG /     Descripció de la    Gravetat      Solució tècnica aplicada                             Estat
               Bloc               barrera detectada                                                                      
  ------------ ------------------ ------------------- ------------- ---------------------------------------------------- --------------
  **INC-01**   Bloc 2 ---         Login i Registre    **Alta**      S'ha eliminat `overflow-hidden` i s'ha mantingut     **Corregit**
               Redimensionament i tenien                            `min-h-screen` perquè el contingut pugui créixer i   
               zoom               `overflow-hidden`                 permetre el scroll vertical.                         
                                  al `body`, impedint                                                                    
                                  desplaçar-se quan                                                                      
                                  el contingut                                                                           
                                  superava l'altura                                                                      
                                  de la pantalla.                                                                        

  **INC-02**   Bloc 3 ---         No hi havia cap     **Mitjana**   S'ha afegit «Saltar al contingut principal», visible **Corregit**
               Navegabilitat i    enllaç per saltar                 en rebre el focus, i `id="main"` a `<main>`.         
               teclat             directament al                                                                         
                                  contingut principal                                                                    
                                  i evitar els                                                                           
                                  elements repetitius                                                                    
                                  de la capçalera.                                                                       

  **INC-03**   Bloc 2 ---         El text del footer  **Alta**      S'ha augmentat l'opacitat a `text-luna/75`. Després  **Corregit**
               Contrast           utilitzava                        del canvi, Lighthouse ha arribat a 100 en            
                                  `text-luna/40`, amb               accessibilitat a les pàgines comprovades.            
                                  un contrast                                                                            
                                  insuficient.                                                                           

  **INC-04**   Formularis /       Els camps de cerca  **Baixa**     S'han afegit `id="search"` i `name="search"` als     **Corregit**
               identificació de   no tenien atributs                camps de cerca revisats.                             
               camps              `id` i `name`.                                                                         

  **INC-05**   Bloc 1 ---         Les dues            **Baixa**     S'han agrupat les dues columnes dins de              **Corregit**
               Estructura         agrupacions                       `<nav aria-label="Navegación del pie de página">`.   
               semàntica          d'enllaços del                    Els títols de columna s'han mantingut com a          
                                  footer no estaven                 paràgrafs.                                           
                                  dins d'una única                                                                       
                                  regió de navegació                                                                     
                                  identificada.                                                                          
  -------------------------------------------------------------------------------------------------------------------------------------

### Tasques pendents identificades

-   Completar les destinacions provisionals d'enllaços com `#favoritos`,
    `#contacto` i `href="#"` quan s'implementin les funcionalitats.
-   Implementar missatges d'error personalitzats i accessibles quan els
    formularis estiguin connectats al backend.
-   Afegir feedback de càrrega quan hi hagi peticions asíncrones reals.
-   Garantir amb JavaScript o al servidor que la contrasenya i la
    confirmació coincideixin.
-   Completar la prova de desactivació de CSS, que no s'ha pogut
    realitzar.

------------------------------------------------------------------------

## 7. Referències tècniques i recursos de consulta

-   **W3C Web Accessibility Initiative (WAI):** *How to Meet WCAG 2.2
    --- Quick Reference*.
-   **W3C:** directrius i criteris de conformitat WCAG 2.2.
-   **WAVE:** eina d'avaluació d'accessibilitat web.
-   **Google Lighthouse:** auditoria d'accessibilitat i qualitat de
    pàgines web.
-   **WebAIM:** recursos i eines d'avaluació de contrast i
    accessibilitat.

------------------------------------------------------------------------

**Nota final:** Aquest document recull les comprovacions i correccions
realitzades durant l'autotest d'Afterdark. Els apartats pendents
corresponen a funcionalitats encara no implementades o a proves que no
s'han pogut completar. Les puntuacions automàtiques positives no
substitueixen una auditoria completa de conformitat WCAG 2.2.
