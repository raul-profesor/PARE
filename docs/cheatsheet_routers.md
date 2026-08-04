## 1. 🚀 **Cheatsheet: Configuración Básica Router Cisco**

### 1.1. **Modos de Operación**
```bash
User EXEC Mode        > 
Privileged EXEC Mode  # enable
Global Config Mode    # configure terminal
Interface Config Mode (config-if)# interface <tipo> <núm>
Line Config Mode      (config-line)# line <tipo> <núm>
```

---

### 1.2. **Comandos Básicos de Navegación**
```bash
# Entrar a modo privilegiado
> enable

# Entrar a configuración global
# configure terminal

# Salir de un modo o guardar config
(config)# exit
(config)# end
# write memory       # Guardar configuración
# copy running-config startup-config
```

---

### 1.3. **Configuración de Passwords**

#### 1.3.1. **Password para Modo Privilegiado (Enable)**
```bash
(config)# enable secret miPasswordSeguro
```

#### 1.3.2. **Password para Consola**
```bash
(config)# line console 0
(config-line)# password consolePass
(config-line)# login
(config-line)# exit
```

#### 1.3.3. **Password para Líneas VTY (Telnet/SSH)**
```bash
(config)# line vty 0 4
(config-line)# password vtyPass
(config-line)# login
(config-line)# exit
```

---

### 1.4. **Cifrado de Passwords**
```bash
# Cifrar todas las passwords en texto claro
(config)# service password-encryption

# Ver passwords cifradas
# show running-config
```

---

### 1.5. **Configuración de Banners**
```bash
# Banner de aviso (MOTD)
(config)# banner motd #
 ¡Acceso Autorizado Solo a Personal Autorizado! 
#

# Banner de login
(config)# banner login #
 Bienvenido. Introduzca sus credenciales.
#
```

---

### 1.6. **Configuración de Interfaces**

#### 1.6.1. **Interfaz FastEthernet**
```bash
(config)# interface fastethernet 0/0
(config-if)# ip address 192.168.1.1 255.255.255.0
(config-if)# no shutdown
(config-if)# description LAN-Office
(config-if)# exit
```

#### 1.6.2. **Interfaz Serial (WAN)**
```bash
(config)# interface serial 0/0/0
(config-if)# ip address 10.0.0.1 255.255.255.252
(config-if)# clock rate 64000    # Solo en lado DCE
(config-if)# no shutdown
(config-if)# exit
```

---

### 1.7. **Configuración Básica de Seguridad**

#### 1.7.1. **Deshabilitar DNS Lookup**
```bash
(config)# no ip domain-lookup
```

#### 1.7.2. **Configurar Nombre de Host**
```bash
(config)# hostname R1-Madrid
```

#### 1.7.3. **Configurar Domain Name**
```bash
(config)# ip domain-name empresa.com
```

---

### 1.8. **Configuración SSH (Recomendado sobre Telnet)**
```bash
# Generar claves RSA
(config)# crypto key generate rsa modulus 2048

# Configurar SSH
(config)# ip ssh version 2
(config)# username admin secret admin123

# Configurar líneas VTY para SSH
(config)# line vty 0 4
(config-line)# transport input ssh
(config-line)# login local
(config-line)# exit
```

---

### 1.9. **Comandos de Verificación Útiles**
```bash
# Ver configuración actual
# show running-config

# Ver interfaces y estado
# show ip interface brief

# Ver tabla de routing
# show ip route

# Ver resumen de interfaces
# show interfaces description

# Ver conexiones SSH
# show ssh
```

---

### 1.10. **Configuración Básica de Routing Estático**
```bash
# Ruta estática hacia red remota
(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2

# Ruta por defecto
(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.2
```

---

### 1.11. **Comandos de Administración**
```bash
# Guardar configuración
# copy running-config startup-config

# Recargar router
# reload

# Ver versión del IOS
# show version

# Ver tiempo de actividad
# show uptime
```

---

### 1.12. **🌐 Ejemplo de Configuración Completa Básica**

```bash
enable
configure terminal

! Configuración básica
hostname R1-Oficina
no ip domain-lookup
service password-encryption

! Passwords
enable secret MiSecurePass123
line console 0
 password console123
 login
 exit

line vty 0 4
 password vty123
 login
 transport input ssh
 exit

! Interfaces
interface fastethernet 0
```