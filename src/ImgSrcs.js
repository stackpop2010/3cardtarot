const tarotImg = [
  
 {card: '0 - The Fool', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/120px-RWS_Tarot_00_Fool.jpg'},
{card: 'I – The Magician', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/RWS_Tarot_01_Magician.jpg/120px-RWS_Tarot_01_Magician.jpg'},
{card: 'II – The High Priestess', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/120px-RWS_Tarot_02_High_Priestess.jpg'},
{card: 'III – The Empress', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/RWS_Tarot_03_Empress.jpg/120px-RWS_Tarot_03_Empress.jpg'},
{card: 'IV – The Emperor', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/RWS_Tarot_04_Emperor.jpg/120px-RWS_Tarot_04_Emperor.jpg'},
{card: 'V – The Hierophant', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RWS_Tarot_05_Hierophant.jpg/120px-RWS_Tarot_05_Hierophant.jpg'},
{card: 'VI – The Lovers', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_06_Lovers.jpg/120px-RWS_Tarot_06_Lovers.jpg'},
{card: 'VII – The Chariot', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RWS_Tarot_07_Chariot.jpg/120px-RWS_Tarot_07_Chariot.jpg'},
{card: 'VIII – Strength', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/RWS_Tarot_08_Strength.jpg/120px-RWS_Tarot_08_Strength.jpg'},
{card: 'IX – The Hermit', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/120px-RWS_Tarot_09_Hermit.jpg'},
{card: 'X – Wheel of Fortune', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg/120px-RWS_Tarot_10_Wheel_of_Fortune.jpg'},
{card: 'XI – Justice', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/RWS_Tarot_11_Justice.jpg/120px-RWS_Tarot_11_Justice.jpg'},
{card: 'XII – The Hanged Man', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/RWS_Tarot_12_Hanged_Man.jpg/120px-RWS_Tarot_12_Hanged_Man.jpg'},
{card: 'XIII – Death', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/RWS_Tarot_13_Death.jpg/120px-RWS_Tarot_13_Death.jpg'},
{card: 'XIV – Temperance', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/RWS_Tarot_14_Temperance.jpg/120px-RWS_Tarot_14_Temperance.jpg'},
{card: 'XV – The Devil', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/RWS_Tarot_15_Devil.jpg/120px-RWS_Tarot_15_Devil.jpg'},
{card: 'XVI – The Tower', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/RWS_Tarot_16_Tower.jpg/120px-RWS_Tarot_16_Tower.jpg'},
{card: 'XVII – The Star', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_17_Star.jpg/120px-RWS_Tarot_17_Star.jpg'},
{card: 'XVIII – The Moon', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/RWS_Tarot_18_Moon.jpg/120px-RWS_Tarot_18_Moon.jpg'},
{card: 'XIX – The Sun', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/RWS_Tarot_19_Sun.jpg/120px-RWS_Tarot_19_Sun.jpg'},
{card: 'XX – Judgement', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/RWS_Tarot_20_Judgement.jpg/120px-RWS_Tarot_20_Judgement.jpg'},
{card: 'XXI – The World', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/RWS_Tarot_21_World.jpg/120px-RWS_Tarot_21_World.jpg'},
{card: 'Ace of Wands', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Wands01.jpg/120px-Wands01.jpg'},
{card: 'Two of Wands', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Wands02.jpg/120px-Wands02.jpg'},
{card: 'Three of Wands', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wands03.jpg/120px-Wands03.jpg'},
{card: 'Four of Wands', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Wands04.jpg/120px-Wands04.jpg'},
{card: 'Five of Wands', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wands05.jpg/120px-Wands05.jpg'},
{card: 'Six of Wands', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Wands06.jpg/120px-Wands06.jpg'},
{card: 'Seven of Wands', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Wands07.jpg/120px-Wands07.jpg'},
{card: 'Eight of Wands', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Wands08.jpg/120px-Wands08.jpg'},
{card: 'Nine of Wands', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tarot_Nine_of_Wands.jpg/120px-Tarot_Nine_of_Wands.jpg'},
{card: 'Ten of Wands', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wands10.jpg/120px-Wands10.jpg'},
{card: 'Page of Wands', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Wands11.jpg/120px-Wands11.jpg'},
{card: 'Knight of Wands', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wands12.jpg/120px-Wands12.jpg'},
{card: 'Queen of Wands', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Wands13.jpg/120px-Wands13.jpg'},
{card: 'King of Wands', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wands14.jpg/120px-Wands14.jpg'},
{card: 'Ace of Cups', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cups01.jpg/120px-Cups01.jpg'},
{card: 'Two of Cups', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Cups02.jpg/120px-Cups02.jpg'},
{card: 'Three of Cups', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cups03.jpg/120px-Cups03.jpg'},
{card: 'Four of Cups', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cups04.jpg/120px-Cups04.jpg'},
{card: 'Five of Cups', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cups05.jpg/120px-Cups05.jpg'},
{card: 'Six of Cups', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Cups06.jpg/120px-Cups06.jpg'},
{card: 'Seven of Cups', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cups07.jpg/120px-Cups07.jpg'},
{card: 'Eight of Cups', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cups08.jpg/120px-Cups08.jpg'},
{card: 'Nine of Cups', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cups09.jpg/120px-Cups09.jpg'},
{card: 'Ten of Cups', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Cups10.jpg/120px-Cups10.jpg'},
{card: 'Page of Cups', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cups11.jpg/120px-Cups11.jpg'},
{card: 'Knight of Cups', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cups12.jpg/120px-Cups12.jpg'},
{card: 'Queen of Cups', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Cups13.jpg/120px-Cups13.jpg'},
{card: 'King of Cups', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cups14.jpg/120px-Cups14.jpg'},
{card: 'Ace of Swords', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Swords01.jpg/120px-Swords01.jpg'},
{card: 'Two of Swords', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Swords02.jpg/120px-Swords02.jpg'},
{card: 'Three of Swords', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Swords03.jpg/120px-Swords03.jpg'},
{card: 'Four of Swords', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Swords04.jpg/120px-Swords04.jpg'},
{card: 'Five of Swords', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Swords05.jpg/120px-Swords05.jpg'},
{card: 'Six of Swords', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Swords06.jpg/120px-Swords06.jpg'},
{card: 'Seven of Swords', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Swords07.jpg/120px-Swords07.jpg'},
{card: 'Eight of Swords', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Swords08.jpg/120px-Swords08.jpg'},
{card: 'Nine of Swords', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Swords09.jpg/120px-Swords09.jpg'},
{card: 'Ten of Swords', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords10.jpg/120px-Swords10.jpg'},
{card: 'Page of Swords', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Swords11.jpg/120px-Swords11.jpg'},
{card: 'Knight of Swords', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Swords12.jpg/120px-Swords12.jpg'},
{card: 'Queen of Swords', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords13.jpg/120px-Swords13.jpg'},
{card: 'King of Swords', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Swords14.jpg/120px-Swords14.jpg'},
{card: 'Ace of Pentacles', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Pents01.jpg/120px-Pents01.jpg'},
{card: 'Two of Pentacles', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Pents02.jpg/120px-Pents02.jpg'},
{card: 'Three of Pentacles', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents03.jpg/120px-Pents03.jpg'},
{card: 'Four of Pentacles', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pents04.jpg/120px-Pents04.jpg'},
{card: 'Five of Pentacles', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pents05.jpg/120px-Pents05.jpg'},
{card: 'Six of Pentacles', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pents06.jpg/120px-Pents06.jpg'},
{card: 'Seven of Pentacles', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pents07.jpg/120px-Pents07.jpg'},
{card: 'Eight of Pentacles', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pents08.jpg/120px-Pents08.jpg'},
{card: 'Nine of Pentacles', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pents09.jpg/120px-Pents09.jpg'},
{card: 'Ten of Pentacles', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents10.jpg/120px-Pents10.jpg'},
{card: 'Page of Pentacles', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pents11.jpg/120px-Pents11.jpg'},
{card: 'Knight of Pentacles', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Pents12.jpg/120px-Pents12.jpg'},
{card: 'Queen of Pentacles', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pents13.jpg/120px-Pents13.jpg'},
{card: 'King of Pentacles', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pents14.jpg/120px-Pents14.jpg'}

];
export default tarotImg;




