# Primera Clase : Pruebas con Python y Node Js

A continuacion se usaron los siguientes comandos de instalacion y comnados de ejecucion:

1. crear archivo package.json que contiene las dependencias

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

4.  Ejecutar todos los casos de prueba
```
npx playwright test
```

5. Ejecutar por nombre de caso de prueba
```
npx playwright test nombreClasePrueba
```

6. Ejecuta test cases modo palpable  en distintos navegadores
```
npx playwright test --headed
```
