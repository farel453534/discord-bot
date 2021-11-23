const { Client, Intents } = require('discord.js')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.on('ready', () => {
  console.log('Connecté')
})

client.on('error', console.error)

client.login('ODk0NjI0NzU1NzE2NTg3NTQx.YVsuOw.tdVVB7m0Fw5kuP3EWXBExp4_KC0')

client.on('guildMemberAdd', member => {
  if (member.user.bot) member.ban({ reason: 'Anti-Bot' })

  client.on('channelCreate', async (channel) => {
    if (!channel.guild) return
    const audit = (await channel.guild.fetchAuditLogs()).entries.first()
    if (audit.executor.id === '852876339228180481') return
    channel.delete()
    const rolesStaff = ['911734152389361715']
    channel.guild.member(audit.executor.id).roles.remove(rolesStaff)
  })
})
