const db = require('megadb')
const blockdb = new db.crearDB('blocks')
module.exports = {
	name: 'unblock',
	description: 'Desbloquea a un usuario para que pueda volver a enviar mensajes al bot.',
	execute(client, message, args) {
    let user = args[0] ? client.users.cache.get(args[0]) : client.users.cache.get(message.channel.topic)
	if(!user) return message.channel.send('Usuario incorrecto');
    blockdb.eliminar(user.id)
    message.channel.send(`El usuario ${user.tag} ha sido desbloqueado.`);
	}
};