# Clase 2 : Implementacion de Test Cases con Node JS y JavaScripts


Comandos de Instalacion

1. crear archivo package.json donde estan las dependencias

```
npm init -y
```

2. Crea carpeta de dependencias node_modules

```
npm i -D @playwright/test
```

3. Instalar variables de entorno

```
npx playwright install
```

4. Ejecutar todos los casos de prueba 

```
npx playwright test
```

5. Ejecutar por nombre de caso de prueba

```
npx playwright test test.cases.normal
npx playwright test test.cases.refactorizado
npx playwright test title.multi
npx playwright test title

```

6. Ejecuta test cases modo palpable  en distintos navegadores

```
npx playwright test --headed
```
