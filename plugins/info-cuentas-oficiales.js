let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let str = `
🥀 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝘼𝙎 𝘾𝙐𝙀𝙉𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎
🥀 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙏𝙃𝙀 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘼𝘾𝘾𝙊𝙐𝙉𝙏𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *GITHUB*
*https://github.com/RonBot/GataBot-MD
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *CONTACTO - ASISTENCIA*
*wa.me/573023900508 (NO Bot)*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *DUDAS*
*Cualquier duda solamente sobre el Bot al creador (.creador) NO ayudo a editar Bots.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Si tienen dudas, sugerencias, o preguntas solo escriban en caso de ser necesario *\n
*If you have doubts, suggestions or questions just write on urgent.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/RonBot/GataBot-MD', '𝑲𝑨𝑵 - 𝑩𝑶𝑻', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 🌙', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}

handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
handler.exp = 35
export default handler
