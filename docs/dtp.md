# DTP (Dynamic Trunking Protocol)

## ¿Qué es DTP?

**DTP (Dynamic Trunking Protocol)** es un protocolo propietario de Cisco que **negocia automáticamente** la formación de enlaces trunk entre switches Cisco. Opera en la capa 2 del modelo OSI.

## Propósito Principal

DTP elimina la necesidad de configurar manualmente los enlaces trunk, permitiendo que los switches negocien automáticamente si un puerto debe operar como:
- **Access** (puerto de acceso)
- **Trunk** (puerto troncal)

## Modos de Operación DTP

### 1. **Dynamic Auto**
```
Switch(config-if)# switchport mode dynamic auto
```
- Espera a que el otro dispositivo solicite formar trunk
- **No envía** frames DTP, pero **responde** a ellos
- Resultado: Forma trunk solo si el otro lado es "desirable"

**Escenarios típicos:**

  + Enlaces entre switches donde NO quieres ser el iniciador

  + Entornos con política "esperar a ser invitado"

  + Conexiones a dispositivos que pueden cambiar configuración

  + Cuando el otro lado debe decidir si forma trunk

**Por qué usarlo:**

    ✅ Menos agresivo - No inicia trunks no deseados

    ✅ Seguridad moderada - Solo forma trunk si el otro lado lo pide

    ✅ Flexibilidad - Se adapta a la configuración del peer

    ✅ Bajo overhead - No envía DTP activamente

### 2. **Dynamic Desirable**

```
Switch(config-if)# switchport mode dynamic desirable
```
- **Envía activamente** frames DTP para negociar trunk
- Forma trunk si el otro lado es "auto", "desirable" o "trunk"
- **Modo más agresivo**

**Escenarios típicos:**

+ Enlaces troncales entre switches en mismo dominio administrativo

+ Entornos dinámicos donde se añaden/eliminan VLANs frecuentemente

+ Conexiones entre switches de mismo nivel

+ Cuando quieres auto-configuración pero con iniciativa

**Por qué usarlo:**

    ✅ Auto-configuración - Forma trunks automáticamente

    ✅ Flexibilidad - Se adapta a cambios de configuración

    ✅ Conveniencia - Reduce configuración manual

    ✅ Compatibilidad - Funciona con "auto" y "trunk"

### 3. **Trunk**

```
Switch(config-if)# switchport mode trunk
```
- Fuerza el puerto como trunk permanentemente
- **Envía** frames DTP
- Espera que el otro lado sea "auto", "desirable" o "trunk"

**Escenarios típicos:**

+ Enlaces a routers o firewalls

+ Conexiones a servidores con múltiples VLANs

+ Enlaces troncales críticos que NO deben cambiar

+ Entornos de alta seguridad

**Por qué usarlo:**

    ✅ Máxima estabilidad - No cambia de estado

    ✅ Seguridad - No negocia con dispositivos no autorizados

    ✅ Control total - Configuración explícita

    ✅ Rendimiento - Sin overhead de negociación constante

### 4. **Access**
```
Switch(config-if)# switchport mode access
```
- Fuerza el puerto como acceso
- **No envía** frames DTP
- **Rechaza** negociación de trunk

**Escenarios típicos:**

+ Puertos para usuarios finales (PCs, teléfonos, impresoras)

+ Puertos de guest/wifi

+ Conexiones a dispositivos que no soportan trunking

+ Entornos de máxima seguridad

**Por qué usarlo:**

    ✅ Máxima seguridad - Sin negociación de trunk

    ✅ Estabilidad - Comportamiento predecible

    ✅ Prevención de VLAN hopping - Elimina riesgo de ataques

    ✅ Simplicidad - Fácil troubleshooting

### 5. **Nonegotiate**
```
Switch(config-if)# switchport nonegotiate
```
- Configura trunk pero **deshabilita** DTP
- No envía frames de negociación

**Escenarios típicos:**

+ Enlaces a equipos no-Cisco (que no entienden DTP)

+ Conexiones a firewalls, load balancers

+ Enlaces donde DTP causa problemas

+ Entornos multi-vendor

**Por qué usarlo:**

    ✅ Compatibilidad multi-vendor - Sin protocolos propietarios

    ✅ Seguridad - Sin anuncios DTP

    ✅ Estabilidad - Trunk estático sin negociación

    ✅ Control - Configuración manual explícita

## Tabla de Compatibilidad de Modos

| Lado A | Lado B | Resultado |
|--------|--------|-----------|
| Dynamic Auto | Dynamic Auto | **Access** |
| Dynamic Auto | Dynamic Desirable | **Trunk** |
| Dynamic Desirable | Dynamic Desirable | **Trunk** |
| Trunk | Dynamic Auto | **Trunk** |
| Trunk | Dynamic Desirable | **Trunk** |
| Access | Cualquier modo | **Access** |

## Comandos de Configuración

### Configuración Básica:
```bash
# Ver estado DTP
Switch# show dtp interface [interface]

# Configurar modo DTP
Switch(config)# interface gigabitethernet 0/1
Switch(config-if)# switchport mode dynamic auto
Switch(config-if)# switchport mode dynamic desirable
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport mode access

# Deshabilitar DTP
Switch(config-if)# switchport nonegotiate
```

### Configuración de VLAN Nativa:
```bash
Switch(config-if)# switchport trunk native vlan [vlan-id]
```

## Ventajas de DTP

✅ **Configuración automática**  
✅ **Reduce errores manuales**  
✅ **Facilita la administración**  
✅ **Compatibilidad entre dispositivos Cisco**  

## Desventajas y Consideraciones

❌ **Solo funciona entre equipos Cisco**  
❌ **Puede crear problemas de seguridad**  
❌ **Overhead en la red**  
❌ **En entornos seguros, se recomienda deshabilitar**

## Mejores Prácticas

### Para Seguridad:
```bash
# En puertos de acceso
Switch(config-if)# switchport mode access
Switch(config-if)# switchport nonegotiate

# En puertos trunk (configuración manual)
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport nonegotiate
Switch(config-if)# switchport trunk allowed vlan [vlan-list]
```

### Verificación:
```bash
# Ver estado DTP
Switch# show dtp interface gigabitethernet 0/1

# Ver resumen de interfaces
Switch# show interfaces trunk

# Ver configuración de puerto
Switch# show interfaces [interface] switchport
```

## Ejemplo Práctico

### Escenario: Dos switches interconectados
```bash
# Switch 1
Switch1(config)# interface gigabitethernet 0/1
Switch1(config-if)# switchport mode dynamic desirable

# Switch 2  
Switch2(config)# interface gigabitethernet 0/1
Switch2(config-if)# switchport mode dynamic auto
```
**Resultado:** Se formará un enlace trunk automáticamente.

## Seguridad con DTP

En entornos de producción, se recomienda:
- **Deshabilitar DTP** en puertos de acceso
- **Configurar trunks manualmente**
- **Usar `switchport nonegotiate`** en trunks configurados manualmente
