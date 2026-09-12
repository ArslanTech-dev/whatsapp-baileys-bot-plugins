/**
 * 💋 Kiss Plugin - Baileys WhatsApp Bot
 * رومن اردو: کس کمانڈ
 * "پیار بھرا چومہ! 😘"
 */

const axios = require('axios');

module.exports = {
  name: 'kiss',
  aliases: ['kiss', 'کس', 'chumma'],
  description: 'Kiss کمانڈ - پیار بھرا جواب 😘',
  category: 'Love',
  
  async execute(client, message, args) {
    try {
      const chat = await message.getChat();
      const sender = message.author || message.from;
      
      // رومن اردو میں رومانوی جوابات
      const responses = [
        '😘 آئیے ایک خوبصورت چومہ! پیار کو سلام! 💕',
        '💋 یہ! تمہارے لیے ایک میٹھا چومہ! 😍',
        '💝 بھابھی کا خصوصی چومہ! 🌹',
        '😊 آئیے پیار کو اظہار کریں! چوم لو! 💗',
        '✨ وہ! کتنا شیریں چومہ! پیار سے بھرا! 🫶',
        '🌹 تمہاری یاد میں ایک چومہ! 💌',
        '💕 محبت سے بھرا ہوا چومہ تمہیں! 😘',
        '✨ یہ لیں! دل کا ایک ٹکڑا! 💗'
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      // Romantic/Love GIF URLs
      const gifUrls = [
        'https://media.giphy.com/media/l0HlQaQ9ggIDUitch/giphy.gif',
        'https://media.giphy.com/media/G3va3QxJJeNHi/giphy.gif',
        'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
        'https://media.giphy.com/media/3o6ZsYp8eyyI6LzJAA/giphy.gif',
        'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
        'https://media.giphy.com/media/l3q2K5jinAlZ37mPm/giphy.gif'
      ];
      
      const randomGif = gifUrls[Math.floor(Math.random() * gifUrls.length)];
      
      await message.reply({
        text: randomResponse,
        media: await axios.get(randomGif, { responseType: 'arraybuffer' }).then(r => r.data),
        mimetype: 'image/gif',
        caption: '💋 کس کمانڈ - پیار بھرا چومہ! 😘'
      });
      
    } catch (error) {
      console.error('Kiss command error:', error);
      await message.reply('❌ عزیز! کمانڈ میں خرابی آگی! 😅');
    }
  }
};
