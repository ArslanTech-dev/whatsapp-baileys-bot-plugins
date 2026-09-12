/**
 * 🍑 Hip Plugin - Baileys WhatsApp Bot
 * رومن اردو: ہپ کمانڈ
 * "کمر کا شاندار رقص! 🎉"
 */

const axios = require('axios');

module.exports = {
  name: 'hip',
  aliases: ['hip', 'ہپ', 'kamar'],
  description: 'Hip کمانڈ - خوبصورت رقص والا جواب 🍑',
  category: 'Dance',
  
  async execute(client, message, args) {
    try {
      const chat = await message.getChat();
      const sender = message.author || message.from;
      
      // رومن اردو میں مزہ دار جوابات
      const responses = [
        '🍑 آئیے ہپ کی شاندار رقص! تھرتھراتی ہوئی کمر! 🎉',
        '💃 یہ! خوبصورت ہپ موومنٹ! شاندار رقص! 🔥',
        '🎵 کمر ہلاؤ! ہپ کی دھن! شاندار اندازہ! 💃',
        '🍑 وہ! کتنی خوبصورت حرکت! ہپ ہپ ہپ! 😍',
        '✨ بھیا! یہ ہے اصل ہپ کا رقص! 🎶',
        '💫 کمر کا شاندار رقص! ہپ موو! 🎊',
        '🔥 دیکھو! کتنا خوبصورت رقص! 🍑',
        '🎭 ہپ ہپ! شاندار اندازے میں رقص! 💃'
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      // Hip/Dance GIF URLs
      const gifUrls = [
        'https://media.giphy.com/media/26uf1EUQzrxI5bh0A/giphy.gif',
        'https://media.giphy.com/media/l0HlDtDZoXpBYeulo/giphy.gif',
        'https://media.giphy.com/media/3o85xIO33l7RlmLRIY/giphy.gif',
        'https://media.giphy.com/media/xT9IgEx8SbQ0teblYQ/giphy.gif',
        'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
        'https://media.giphy.com/media/l3q2K5jinAlZ37mPm/giphy.gif'
      ];
      
      const randomGif = gifUrls[Math.floor(Math.random() * gifUrls.length)];
      
      await message.reply({
        text: randomResponse,
        media: await axios.get(randomGif, { responseType: 'arraybuffer' }).then(r => r.data),
        mimetype: 'image/gif',
        caption: '🍑 ہپ کمانڈ - شاندار رقص! 💃'
      });
      
    } catch (error) {
      console.error('Hip command error:', error);
      await message.reply('❌ بھیا! کمانڈ میں خرابی آگی! 😅');
    }
  }
};
