/**
 * 🍒 Boobs Plugin - Baileys WhatsApp Bot
 * رومن اردو: بوبز کمانڈ
 * "ماموں کا شاندار کمانڈ!" 🎉
 */

const axios = require('axios');

module.exports = {
  name: 'boobs',
  aliases: ['boobs', 'ببز', 'mamo', 'sena', 'sexy'],
  description: 'Boobs کمانڈ - خوبصورت GIF بھیجتا ہے 😍',
  category: 'Fun',
  
  async execute(client, message, args) {
    try {
      const chat = await message.getChat();
      
      // رومن اردو میں خوبصورت جوابات - اپڈیٹ شدہ
      const responses = [
        '🍒 آئیے دیکھتے ہیں کیا خوبصورتی ہے! 😍',
        '🎀 ماموں! یہ ہے آپ کے لیے! 💋',
        '✨ وہ! شاندار خوبصورتی! 🔥',
        '💝 بھابھی کو سلام! یہ لیں 😘',
        '🌹 دیکھو بھیا! کیا لگتا ہے؟ 😏',
        '👀 ماموں! یہ ہے اصل نظارہ! 🍒',
        '💦 بھیا! خوبصورتی کی بارش! ✨',
        '🔥 وہ! کتنا حسین منظر! 😍',
        '😘 یہ لیں آپ کے لیے خصوصی! 💕',
        '🎊 شاندار ماموں! دیکھو یہ! 🌟',
        '💃 بھیا کا پسندیدہ نظارہ! 🎉',
        '🌸 خوبصورتی کا سفر شروع! 😊'
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      // Updated GIF URLs for boobs command
      const gifUrls = [
        'https://media.giphy.com/media/l3q2K5jinAlZ37mPm/giphy.gif',
        'https://media.giphy.com/media/26uf1EUQzrxI5bh0A/giphy.gif',
        'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
        'https://media.giphy.com/media/l3q2jJlYFwmhsIuWQ/giphy.gif',
        'https://media.giphy.com/media/l0HlNaQ0v8BYo1aFG/giphy.gif',
        'https://media.giphy.com/media/l0HlDtKPoKLj5ZfYs/giphy.gif',
        'https://media.giphy.com/media/3o85xIO33l7RlmLRIY/giphy.gif',
        'https://media.giphy.com/media/l0HlFZ3c4X0r9ZSw0/giphy.gif',
        'https://media.giphy.com/media/xT9IgEx8SbQ0teblYQ/giphy.gif',
        'https://media.giphy.com/media/l0MYt2jP3NkqJK1pK/giphy.gif'
      ];
      
      const randomGif = gifUrls[Math.floor(Math.random() * gifUrls.length)];
      
      await message.reply({
        text: randomResponse,
        media: await axios.get(randomGif, { responseType: 'arraybuffer' }).then(r => r.data),
        mimetype: 'image/gif',
        caption: '🍒 بوبز کمانڈ - ماموں کا خصوصی! 😍\n\n✨ مزے لو اور لطف اٹھاؤ!'
      });
      
    } catch (error) {
      console.error('Boobs command error:', error);
      await message.reply('❌ ماموں! کمانڈ میں خرابی آگی! 😅');
    }
  }
};
