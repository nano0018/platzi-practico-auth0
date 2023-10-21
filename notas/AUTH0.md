## ¿Qué es Auth0?

Auth0 es una plataforma de autenticación y autorización adaptable y fácil de implementar con más de 7000 usuarios activos al mes. Actualmente pertenece a Okta y existen alternativas como Amazon Cognito, Keycloak, Curity, Firebase authentication entre otros.

## ¿Qué es la autenticación?

La autenticación es un proceso mediante el cual se verifica la identidad de un usuario o entidad, como un usuario de computadora, un dispositivo, una aplicación o un servicio en línea, para asegurarse de que tengan permiso para acceder a ciertos recursos o realizar determinadas acciones. En otras palabras, es el proceso de confirmar que alguien es quien dice ser.

La autenticación generalmente implica el uso de credenciales, como un nombre de usuario y una contraseña, una tarjeta de identificación, una huella digital, una clave de seguridad o cualquier otro tipo de información o método que pueda utilizarse para verificar la identidad de una persona o entidad. El objetivo de la autenticación es proteger la seguridad y la privacidad, evitando el acceso no autorizado a sistemas, datos o servicios.

## ¿Qué es la autorización?

La autorización es el proceso que ocurre después de la autenticación y se refiere a la concesión de permisos o derechos específicos a un usuario, entidad o sistema una vez que se ha verificado su identidad. En otras palabras, la autorización se encarga de determinar qué acciones o recursos específicos tiene permitido acceder o realizar un usuario o entidad autenticada.

La autorización se basa en reglas predefinidas y políticas de acceso que determinan quién puede acceder a qué recursos y bajo qué condiciones. Estas reglas pueden variar según el sistema, la aplicación o el entorno, y suelen estar diseñadas para garantizar la seguridad y la privacidad de los datos, así como para administrar los privilegios de usuario de manera eficiente. Algunos ejemplos comunes de autorización incluyen:

* Control de acceso basado en roles (RBAC): Los usuarios se asignan a roles específicos y los roles tienen permisos asociados. La autorización se basa en la pertenencia del usuario a un rol.

* Listas de control de acceso (ACL): Se definen listas que enumeran los usuarios o grupos específicos y los recursos a los que tienen acceso permitido.

* Políticas de autorización: Establecen reglas y condiciones para determinar quién puede realizar ciertas acciones o acceder a ciertos recursos. Por ejemplo, una política podría permitir que los administradores realicen tareas específicas mientras que los usuarios normales no tienen acceso.

* Autorización basada en atributos: Se toman en cuenta ciertos atributos del usuario, como su ubicación, tiempo de acceso, nivel de autenticación o roles, para determinar si tienen acceso a ciertos recursos.

## ¿Qué el Universal Login?

Universal Login, también conocido como Universal Sign-In, es un término utilizado en el contexto de la autenticación y el inicio de sesión en aplicaciones y servicios en línea. Es un enfoque que busca proporcionar a los usuarios una experiencia de inicio de sesión consistente y sin problemas en múltiples aplicaciones y servicios, generalmente a través de una única identidad o credenciales.

La idea detrás del Universal Login es permitir a los usuarios autenticarse una sola vez y, luego, utilizar esas credenciales para acceder a múltiples aplicaciones o servicios sin necesidad de iniciar sesión nuevamente en cada uno de ellos. Esto mejora la comodidad y la eficiencia para los usuarios, ya que evita la necesidad de recordar múltiples nombres de usuario y contraseñas o de realizar múltiples procesos de inicio de sesión.

Algunas características comunes de un Universal Login incluyen:

* Inicio de sesión único (SSO): Los usuarios inician sesión una vez y se autentican en un sistema central de autenticación. Luego, este sistema proporciona tokens o credenciales que se utilizan para acceder a otras aplicaciones o servicios sin necesidad de volver a ingresar las credenciales.

* Integración con múltiples aplicaciones: El Universal Login se integra con diversas aplicaciones y servicios, lo que permite a los usuarios acceder a todos ellos con una única autenticación.

* Seguridad mejorada: Los sistemas de Universal Login suelen contar con medidas de seguridad avanzadas, como el uso de tokens de seguridad o protocolos de autenticación seguros, para garantizar que los datos de inicio de sesión y la identidad del usuario estén protegidos.

* Gestión de identidades: Los sistemas de Universal Login a menudo incluyen capacidades de administración de identidades, lo que permite a los usuarios actualizar sus perfiles, cambiar contraseñas y gestionar sus preferencias de privacidad.

* Experiencia de usuario unificada: Ofrecen una experiencia de usuario coherente en todas las aplicaciones y servicios que utilizan el Universal Login, lo que simplifica la navegación y la interacción del usuario.

En resumen, es más seguro autenticar en el mismo dominio, ya que elimina las peticiones cross-origin.

## ¿Qué tipo de conexiones tiene Auth0?

### Conexiones sociales

Auth0 brinda la posibilidad de conectar con servicios como Facebook, Google, Twitter (X), GitHub entre otros, que implementan flujos de autenticación por medio de OAuth 2.0. Además de proveer la opción de incluir un servicio que no se encuentra en el dashboard.

### Conexiones sin contraseña o passwordless

Además de incluir conexiones por medio de OAuth 2.0, se puede integrar un sistema passwordless mediante SMS e Email, sin embargo, para ambos casos se requiere tener un proveedor externo para su uso en producción.