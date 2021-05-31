const db = require('megadb')
const blockdb = new db.crearDB('blocks')
module.exports = {
	name: 'block',
	description: 'Bloquea a un usuario para que no pueda enviar mensajes al bot.',
	execute(client, message, args) {
    let user = args[0] ? client.users.cache.get(args[0]) : client.users.cache.get(message.channel.topic)
	if(!user) return message.channel.send('Usuario incorrecto');
    blockdb.set(user.id, true)
    message.channel.send(`El usuario ${user.tag} ha sido bloqueado.`);
	}
};