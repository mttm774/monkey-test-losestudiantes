## **Descripcion:**

Este repositorio contiene el codigo necesario escrito en node. Se hace uso de cypress para realizar un monkey test de eventos aleatoreos sobre el sitio https://losestudiantes.co.

Previo a ejecutar el monkey debe tener instalado node versión 19.4.0. y Cypress

### **Ejecución del Monkey Test:**
1. Clonar el repositorio
2. Instalar las dependencias con el comando `npm install`
3. Abrir cypress con el comando `cypress open`, esto abrirá una ventana se debe seleccionar la opción `Add proyect`
![Captura de Pantalla 2023-04-30 a la(s) 1 23 48 p m](https://user-images.githubusercontent.com/48004607/235369992-d36c1d79-5154-4a2a-8258-95fea2c84d80.png)
4. Se debe ubicar la carpeta donde fue clonado el repositorio
5. Se selecciona la opción E2E testing
![Captura de Pantalla 2023-04-30 a la(s) 1 25 43 p m](https://user-images.githubusercontent.com/48004607/235370079-8a7d894b-3958-44fb-86ee-f16ece4f9f77.png)
6. Se selecciona Chrome y Start E2E Testing
![Captura de Pantalla 2023-04-30 a la(s) 1 26 39 p m](https://user-images.githubusercontent.com/48004607/235370120-77a99385-7d6e-4241-b0fa-8574e88c60eb.png)
7. Se abrirá una ventana de chrome, se selecciona el archivo monkey_testing.spec.cy para iniciar la prueba.
8. La prueba será ejecutada por Cypress y se pueden conocer sus resultados.
![Captura de Pantalla 2023-04-30 a la(s) 1 28 28 p m](https://user-images.githubusercontent.com/48004607/235370205-8da7a6be-7cdb-457f-9e74-dc468cd90d27.png)



**Happy monkey test!!**



