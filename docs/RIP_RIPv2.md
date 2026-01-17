# RIP (Routing Information Protocol)

## 1. Introducción a RIP

RIP (Routing Information Protocol) es un protocolo de enrutamiento dinámico diseñado para permitir que los routers intercambien información de rutas de forma automática. Pertenece a la categoría de protocolos **IGP (Interior Gateway Protocol)** y se utiliza dentro de un mismo sistema autónomo.

RIP es un protocolo de tipo **vector-distancia**, lo que significa que cada router toma decisiones basándose únicamente en la información recibida de sus vecinos directos, sin conocer la topología completa de la red. Aunque hoy en día está prácticamente obsoleto en entornos profesionales, su estudio es clave para entender los fundamentos del enrutamiento dinámico.



## 2. Funcionamiento general de RIP

El funcionamiento de RIP se basa en la métrica del **número de saltos**. Cada router que atraviesa un paquete cuenta como un salto, y la ruta con menor número de saltos es considerada la mejor. RIP establece un límite máximo de 15 saltos, lo que restringe su uso a redes pequeñas. Cualquier ruta con métrica 16 se considera inalcanzable.

Los routers que ejecutan RIP envían periódicamente su tabla de enrutamiento completa cada 30 segundos. Estas actualizaciones periódicas simplifican el diseño del protocolo, pero hacen que la convergencia sea lenta y que se genere tráfico incluso cuando no hay cambios en la red.



## 3. Protocolos vector-distancia y problemas asociados

En los protocolos vector-distancia, cada router confía en la información que le proporcionan sus vecinos. Cuando un router recibe una ruta anunciada, incrementa la métrica en una unidad y la compara con la que ya tiene en su tabla. Si la nueva ruta es mejor, la sustituye.

Este mecanismo puede provocar problemas como bucles de enrutamiento o rutas inconsistentes cuando se producen fallos. Para mitigar estos problemas, RIP incorpora mecanismos como split horizon, route poisoning y temporizadores de espera.



## 4. RIPv1: visión general

RIPv1 es la primera versión del protocolo y está definida en el RFC 1058. Es un protocolo **classful**, lo que implica que no incluye la máscara de red en sus anuncios. Los routers asumen automáticamente las máscaras por defecto según la clase de la dirección IP, lo que impide el uso de VLSM y CIDR.

Además, RIPv1 no incluye ningún mecanismo de autenticación, por lo que es vulnerable a anuncios de rutas falsos. Las actualizaciones se envían mediante broadcast, lo que provoca que todos los dispositivos de la red reciban estos mensajes, incluso aunque no participen en el protocolo.



## 5. RIPv2: versión moderna de RIP

RIPv2 surge para corregir las limitaciones de RIPv1 y está definido en el RFC 2453. Mantiene la simplicidad del protocolo original, pero introduce mejoras fundamentales que lo hacen mucho más flexible y seguro, especialmente en entornos educativos y de laboratorio.

La mejora más importante es que RIPv2 es un protocolo **classless**. Esto significa que cada ruta anunciada incluye su máscara de red, permitiendo el uso de VLSM y CIDR. Gracias a esto, es posible diseñar esquemas de direccionamiento más eficientes, con subredes de distintos tamaños y sin desperdiciar direcciones IP.

Otra mejora clave es el uso de **multicast** en lugar de broadcast. RIPv2 envía sus actualizaciones a la dirección 224.0.0.9, lo que reduce la carga en los dispositivos que no participan en RIP. Además, RIPv2 permite la **autenticación** de las actualizaciones, lo que evita que routers no autorizados inyecten rutas falsas en la red.



## 6. Temporizadores en RIPv2

El comportamiento de RIPv2 está gobernado por varios temporizadores que determinan cómo y cuándo se intercambia la información de enrutamiento. Cada 30 segundos se envía una actualización periódica con todas las rutas conocidas. Si un router deja de recibir información sobre una ruta durante 180 segundos, la marca como inválida. Tras este periodo, entra en funcionamiento el temporizador de limpieza, que elimina definitivamente la ruta de la tabla.

Estos temporizadores explican por qué RIPv2 tiene una convergencia lenta en comparación con protocolos más modernos como OSPF.



## 7. Configuración básica de RIPv2 en Cisco

En dispositivos Cisco, la configuración de RIPv2 se realiza desde el proceso de enrutamiento RIP. Es fundamental especificar explícitamente la versión 2 y desactivar la sumarización[^1] automática para evitar problemas en redes con VLSM.

[^1]:[Agregación de rutas](https://www.manageengine.com/latam/oputils/tech-topics/que-es-la-agregacion-de-rutas.html)

```bash
Router> enable
Router# configure terminal
Router(config)# router rip
Router(config-router)# version 2
Router(config-router)# no auto-summary
Router(config-router)# network 192.168.1.0
Router(config-router)# network 10.0.0.0
Router(config-router)# end
```

El comando `network` no indica directamente qué rutas se anuncian, sino en qué interfaces se activa RIP. Todas las interfaces cuya dirección IP pertenezca a esa red participarán en el protocolo.



## 8. Control del envío de actualizaciones RIP

En muchos escenarios es recomendable limitar el envío de actualizaciones RIP hacia determinadas interfaces, especialmente hacia redes LAN donde no hay otros routers. Esto se consigue mediante interfaces pasivas.

```bash
Router(config)# router rip
Router(config-router)# passive-interface g0/0
```

Con este comando, la interfaz sigue anunciando su red, pero deja de enviar actualizaciones RIP por ella.



## 9. Redistribución de rutas estáticas en RIPv2

RIPv2 permite redistribuir rutas estáticas dentro del proceso de enrutamiento dinámico. Esto es útil cuando existen redes que no se pueden aprender dinámicamente.

```bash
Router(config)# ip route 192.168.50.0 255.255.255.0 10.0.0.2
Router(config)# router rip
Router(config-router)# redistribute static
```

Las rutas estáticas redistribuidas aparecerán como rutas RIP en los routers vecinos.



## 10. Autenticación en RIPv2

Para proteger las actualizaciones RIP, RIPv2 permite el uso de autenticación. En entornos Cisco, la opción más habitual es la autenticación mediante MD5, que proporciona integridad y autenticación de origen.

Primero se crea una cadena de claves:

```bash
Router(config)# key chain RIP_KEYS
Router(config-keychain)# key 1
Router(config-keychain-key)# key-string cisco123
```

A continuación, se aplica la autenticación a la interfaz correspondiente:

```bash
Router(config)# interface g0/1
Router(config-if)# ip rip authentication mode md5
Router(config-if)# ip rip authentication key-chain RIP_KEYS
```

Ambos extremos del enlace deben tener la misma configuración para que las actualizaciones se acepten correctamente.



## 11. Verificación y diagnóstico en RIPv2

Una parte esencial de la configuración de RIPv2 es la verificación. El comando `show ip route` permite comprobar que las rutas RIP se están aprendiendo correctamente y muestra la métrica y el siguiente salto.

```bash
Router# show ip route
```

El comando `show ip protocols` proporciona información detallada sobre el proceso RIP, incluyendo temporizadores, redes anunciadas y versión del protocolo.

```bash
Router# show ip protocols
```

Para observar el funcionamiento interno del protocolo, se puede utilizar:

```bash
Router# debug ip rip
```

Este comando muestra en tiempo real el intercambio de actualizaciones, aunque debe utilizarse con precaución en redes grandes.



## 12. Conclusión

RIPv2 es un protocolo sencillo pero muy valioso desde el punto de vista formativo. Su estudio permite comprender conceptos esenciales como el enrutamiento dinámico, el uso de métricas, la convergencia, el impacto de los temporizadores y la importancia de la autenticación en protocolos de red. Estos conocimientos sirven como base sólida para abordar posteriormente protocolos más avanzados como OSPF o EIGRP.

Sin embargo, su uso es prácticamente residual en escenarios nicho (redes TO o tecnología operativa p.ej. ), *legacy* o redes muy pequeñas donde la simplicidad es preferible a los beneficios de protocolos más modernos.

## Referencias

+ [RIP: Routing Information Protocol](https://ccnadesdecero.es/routing-information-protocol-rip/)

