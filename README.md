# Soporte
Este es un ejemplo de un bot de Discord de soporte hecho por Trunks#8257.
Solo hay que descargarlo y cambiar el archivo config.json a vuestra elección (`npm install` antes que nada).
## Funcionamiento
- El usuario que quiera contactar con el equipo de soporte del servidor deberá enviar un mensaje directo al bot con su pregunta o problema.
- Se creará un canal en la categoría especificada en `config.json` con el nombre del usuario y su tag (muy importante, no cambiar el tema del canal).
- El equipo de soporte (solo las personas con el rol especificado en `config.json`, da igual si tienen permisos superiores) podrán usar el comando reply para responder a la pregunta del usuario
- Usuario y equipo podrán seguir comunicándose de la misma manera hasta que se cierre el ticket con el comando close.
## Importante
- Si vas a hostear el bot en algún sitio como repl.it, será mejor que no pongas el token en el archivo config.json ya que todo el mundo podría verlo. En su lugar, en el token del config.json pon dotenv (quedaría `"token": "dotenv"`) y crea un archivo llamado .env en el que introducirás lo siguiente: TOKEN=tu-token
- Si encuentras algún fallo, puedes comunicarlo en la pestaña de Issues. También se aceptan Pull requests.
