# Ejercicios de direccionamiento IP

## Ejercicio 1

Convierte las siguientes direcciones a binario e indica si se trata de direcciones de tipo A, B o C.

- 10.0.3.2
- 128.45.7.1
- 192.200.5.4
- 151.23.32.50
- 47.50.3.2
- 100.90.80.70
- 124.45.6.1

---

## Ejercicio 2

Dada la dirección de red 192.168.30.0, indica qué máscara de subred deberías escoger para tener 4 subredes. Rellena a continuación la siguiente tabla.

| Número de subred | Dirección de subred | Primer ordenador | Último ordenador |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

---

## Ejercicio 3

Dada la dirección de red 192.168.55.0, indica qué máscara de subred deberías escoger para tener 8 subredes. Rellena a continuación la siguiente tabla.

| Número de subred | Dirección de subred | Primer ordenador | Último ordenador |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

---

## Ejercicio 4

Dada la dirección de clase B 150.40.0.0, indica qué máscara de subred deberías escoger para tener 4 subredes. Rellena a continuación la siguiente tabla.

| Número de subred | Dirección de subred | Primer ordenador | Último ordenador |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

---

## Ejercicio 5

1. ¿Cuál es el intervalo decimal y binario del primer octeto para todas las direcciones IP clase "B" posibles?
2. ¿Qué octeto u octetos representan la parte que corresponde a la red de una dirección IP clase "C"?
3. ¿Qué octeto u octetos representan la parte que corresponde al host de una dirección IP clase "A"?

---

## Ejercicio 6

Completa la siguiente tabla.

| Dirección IP del host | Dirección clase | Dirección de red | Dirección de host | Dirección de broadcast de red | Máscara de subred por defecto |
|---|---|---|---|---|---|
| 216.14.55.137 |  |  |  |  |  |
| 123.1.1.15 |  |  |  |  |  |
| 150.127.221.224 |  |  |  |  |  |
| 194.125.35.199 |  |  |  |  |  |
| 175.12.239.244 |  |  |  |  |  |

Dada una dirección IP 142.226.0.15:

a. ¿Cuál es el equivalente binario del segundo octeto? ___________________

b. ¿Cuál es la Clase de la dirección? _________________________________

c. ¿Cuál es la dirección de red de esta dirección IP? ____________________

d. ¿Es ésta una dirección de host válida (S/N) ?

e. ¿Por qué? o ¿Por qué no?

f. ¿Cuál es la cantidad máxima de hosts que se pueden tener con una dirección de red de clase C? ______

g. ¿Cuántas redes de clase B puede haber? _____________

h. ¿Cuántos hosts puede tener cada red de clase B? ______________

i. ¿Cuántos octetos hay en una dirección IP? ________

j. ¿Cuántos bits puede haber por octeto? ________

---

## Ejercicio 7

Completa la siguiente tabla.

Determinar, para las siguientes direcciones de host IP, cuáles son las direcciones que son válidas para redes comerciales. Válida significa que se puede asignar a una estación de trabajo, servidor, impresora, interfaz de router, etc.

> **Nota:** no basta con mirar la clase de la dirección. Una dirección puede ser inválida porque su clase no sea comercial (p. ej. 127.x, 224.x), porque sea la dirección de red o de broadcast de su subred, o incluso porque contenga un octeto con un valor no permitido (cada octeto solo puede ir de 0 a 255).

| Dirección IP | ¿La dirección es válida? | ¿Por qué? |
|---|---|---|
| 150.100.255.255 |  |  |
| 175.100.255.18 |  |  |
| 195.234.253.0 |  |  |
| 100.0.0.23 |  |  |
| 188.258.221.176 |  |  |
| 127.34.25.189 |  |  |
| 224.156.217.73 |  |  |

---

## Ejercicio 8

Completa la siguiente tabla.

| IP | Máscara | Subred | Broadcast |
|---|---|---|---|
| 192.168.1.130 | 255.255.255.128 | 192.168.1.128 | 192.168.1.255 |
| 10.1.1.3 | 255.255.0.0 |  |  |
| 10.1.1.8 |  | 10.1.0.0 | 10.1.255.255 |
| 200.1.1.23 | 255.0.0.0 |  |  |
| 172.16.8.48 | 255.255.248.0 |  |  |
| 172.16.8.48 | 255.255.255.224 |  |  |

---

## Ejercicio 9

Asignar direcciones IP válidas a las interfaces de red (interfaz de red = tarjeta de red) que les falte para conseguir que exista comunicación entre los host A, B, C, D, E y F. La máscara en todos los casos será 255.255.224.0. Justifica la respuesta.

![Red de hosts A, B, C, D, E y F conectados en bus, con la dirección 172.33.43.5 asignada al host A](ejercicio9_red.png)

---

## Ejercicio 10

Tu empresa tiene una dirección de red de Clase C de 200.10.57.0. Desea subdividir la red física en 3 subredes.

a) Indica una máscara que permita dividir la red de clase C (al menos) en tres subredes.

b) ¿Cuántos hosts (ordenadores) puede haber por subred?

c) ¿Cuál es la dirección de red y la dirección de broadcast de cada una de las 3 subredes creadas?

---

## Ejercicio 11

Se desea subdividir la dirección de red de clase C de 200.10.57.0 en **8 subredes**.

Responde a las siguientes preguntas.

1. ¿Cuál es el equivalente en números binarios de la dirección de red de clase C 200.10.57.0 de este ejercicio?
2. ¿Cuál(es) es (son) el (los) octeto(s) que representa(n) la porción de red y cuál(es) es (son) el (los) octeto(s) que representa(n) la porción de host de esta dirección de red de clase C?
3. ¿Cuántos bits se deben pedir prestados a la porción de host de la dirección de red para poder suministrar 8 subredes?
4. ¿Cuál será la máscara de subred (utilizando la notación decimal) basándose en la cantidad de bits que se pidieron prestados en el paso 3?
5. ¿Cuál es el equivalente en números binarios de la máscara de subred a la que se hace referencia anteriormente?

---

## Ejercicio 12

Teniendo en cuenta la dirección IP del ejercicio anterior (200.10.57.0) completa la siguiente tabla para cada una de las posibles subredes que se pueden crear pidiendo prestados 3 bits para subredes al cuarto octeto (octeto de host). Identifica la dirección de red, la máscara de subred, el intervalo de direcciones IP de host posibles para cada subred, la dirección de broadcast para cada subred.

| Subred | Dirección de subred | Primer ordenador | Último ordenador |
|---|---|---|---|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |
| 7 |  |  |  |
| 8 |  |  |  |

---

## Ejercicio 13

Completa la siguiente tabla.

| IP | Máscara | Subred | Broadcast | Número hosts |
|---|---|---|---|---|
| 192.168.1.130 | 255.255.255.128 | 192.168.1.128 | 192.168.1.255 | 128-2 |
| 200.1.17.15 | 255.255.255.0 | 200.1.17.0 | 200.1.17.255 |  |
| 133.32.4.61 | 255.255.255.224 |  |  | 32-2 |
| 132.4.60.99 | 255.255.0.0 |  |  |  |
| 222.43.15.41 |  | 222.43.15.0 | 222.43.15.255 |  |
|  | 255.255.255.192 | 192.168.0.0 |  |  |

---

## Ejercicio 14

a) Si tenemos una red 147.84.32.0 con máscara de red 255.255.255.252, indica la dirección de broadcast, la de red y la de los posibles nodos de la red.

b) La red 192.168.0.0, ¿de qué clase es?

c) Escribe el rango de direcciones IP que pertenecen a la subred definida por la dirección IP 140.220.15.245 con máscara 255.255.255.240.

d) Una red de clase B en Internet tiene una máscara de subred igual a 255.255.240.0. ¿Cuál es el máximo de nodos por subred?

---

## Ejercicio 15

Calcular la dirección de red y la dirección de broadcast (difusión) de las máquinas con las siguientes direcciones IP y máscaras de subred (si no se especifica, se utiliza la máscara por defecto).

a) 18.120.16.250

b) 18.120.16.255/255.255.0.0

c) 155.4.220.39

d) 194.209.14.33

e) 190.33.109.133/255.255.255.0

f) 190.33.109.133 / 255.255.255.128

g) 192.168.20.25 / 255.255.255.240

h) 192.168.20.25 / 255.255.255.192

---

## Ejercicio 16

1. ¿Cuántos ordenadores como máximo se pueden tener en una red de clase A?
2. ¿Cuántos ordenadores como máximo se pueden tener en una red de clase B?
3. ¿Cuántos ordenadores como máximo se pueden tener en una red de clase C?
4. En una red de clase C con máscara 255.255.255.128, ¿cuántos ordenadores se pueden tener en cada subred?
5. En una red de clase C con máscara 255.255.255.192, ¿cuántos ordenadores se pueden tener en cada subred?

---

## Ejercicio 17

Tu empresa tiene una dirección de red de Clase B de 150.10.0.0. Desea subdividir la red física en 3 subredes.

1. Indica una máscara que permita dividir la red de clase B (al menos) en tres subredes.
2. ¿Cuántos hosts (ordenadores) puede haber por subred?
3. ¿Cuál es la dirección de red y la dirección de broadcast de cada una de las 3 subredes creadas?

---

## Ejercicio 18

Dada la dirección de red 120.32.0.0 (clase A: el primer octeto 120 está en el rango 1–126), indica qué máscara de subred deberías escoger para tener 4 subredes. Rellena a continuación la siguiente tabla.

| Número de subred | Dirección de subred | Primer ordenador | Último ordenador |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

---

## Ejercicio 19

Completa la siguiente tabla.

| IP | Máscara | Subred | Broadcast | Número hosts |
|---|---|---|---|---|
| 192.168.1.130 | 255.255.255.128 | 192.168.1.128 | 192.168.1.255 | 128-2 |
| 190.50.27.1 | 255.255.255.0 | 190.50.27.0 | 190.50.27.255 |  |
| 123.40.50.145 | 255.255.255.224 |  |  | 32-2 |
| 150.40.50.25 | 255.255.0.0 |  |  |  |
| 222.43.15.41 |  | 222.43.15.0 | 222.43.15.255 |  |
|  | 255.255.255.192 | 192.168.0.0 |  |  |

---

## Ejercicio 20

a) Si tenemos una red 150.84.32.0 con máscara de red 255.255.255.224, indica la dirección de broadcast, la de red y la de los posibles nodos de la red.

b) La red 192.168.0.0, ¿de qué clase es?

c) Escribe el rango de direcciones IP que pertenecen a la subred definida por la dirección IP 150.84.32.245 con máscara 255.255.255.240.

d) Una red de clase B en Internet tiene una máscara de subred igual a 255.255.240.0. ¿Cuál es el máximo de nodos por subred?
