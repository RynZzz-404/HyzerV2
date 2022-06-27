let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay:082252285143* 
• *Telkomsel:* 6282350496532
• *Telkomsel:* 6282350496532

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *Download Apk Melalui Kode Referal Saya* https://toss.vn/s/rlqSFBzn

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6282252285144', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler
