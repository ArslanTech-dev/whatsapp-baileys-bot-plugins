/**
 * 🎭 Antiya Plugin - Baileys WhatsApp Bot
 * رومن اردو: انتیا کمانڈ
 * "مزاحیہ حرکتیں اور شرارت!" 😂
 */

const axios = require('axios');

module.exports = {
  name: 'antiya',
  aliases: ['antiya', 'انتیا', 'masti', 'mazak'],
  description: 'Antiya کمانڈ - مزاحیہ اور شرارت والا جواب 🎭',
  category: 'Fun',
  
  async execute(client, message, args) {
    try {
      const chat = await message.getChat();
      const sender = message.author || message.from;
      
      // رومن اردو میں مزاحیہ جوابات
      const responses = [
        '🎭 آئیے انتیا کریں! شرارت والا وقت! 😂',
        '🤪 یہ! خوبصورت انتیا! مزے کی حرکت! 🎉',
        '😜 ہائے! کیا شرارت ہے! انتیا کا رقص! 💃',
        '🎪 بھیا! دیکھ یہ انتیا! کتنی شاندار! 🔥',
        '✨ وہ! کتنی خوبصورت حرکت! انتیا ہے! 😍',
        '💫 ہپ ہپ! انتیا کی دھن! شاندار اندازہ! 🎊',
        '🎉 شرارت والا وقت آگیا! انتیا دیکھ! 🤣',
        '🎬 یہ تو سنیما جیسی انتیا ہے! واہ! 👏',
        '🌟 بھیا کا پسندیدہ انتیا! دیکھو! 🎯',
        '💃 شرارت میں مزہ! انتیا کا رقص! 🕺',
        '😆 ہہہ! کیا مزہ ہے! خوبصورت انتیا! 🎊',
        '🔥 واہ! شاندار حرکتیں! انتیا کی دنیا! ✨'
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      // Funny/Playful Antics GIF URLs
      const gifUrls = [
        'https://media.giphy.com/media/l0HlFZ3c4X0r9ZSw0/giphy.gif',
        'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
        'https://media.giphy.com/media/26uf1EUQzrxI5bh0A/giphy.gif',
        'https://media.giphy.com/media/3o85xIO33l7RlmLRIY/giphy.gif',
        'https://media.giphy.com/media/xT9IgEx8SbQ0teblYQ/giphy.gif',
        'https://media.giphy.com/media/l0HlNaQ0v8BYo1aFG/giphy.gif',
        'https://media.giphy.com/media/l3q2K5jinAlZ37mPm/giphy.gif',
        'https://media.giphy.com/media/l0HlDtDZoXpBYeulo/giphy.gif',
        'https://media.giphy.com/media/3o7TKqf0Qv3w0QVQg8/giphy.gif',
        'https://media.giphy.com/media/l0MYt2jP3NkqJK1pK/giphy.gif'
      ];
      
      const randomGif = gifUrls[Math.floor(Math.random() * gifUrls.length)];
      
      await message.reply({
        text: randomResponse,
        media: await axios.get(randomGif, { responseType: 'arraybuffer' }).then(r => r.data),
        mimetype: 'image/gif',
        caption: '🎭 انتیا کمانڈ - شرارت اور مزے کا وقت! 😂\n\n✨ خوبصورت حرکتیں دیکھو!'
      });
      
    } catch (error) {
      console.error('Antiya command error:', error);
      await message.reply('❌ بھیا! کمانڈ میں خرابی آگی! 😅');
    }
  }
};
