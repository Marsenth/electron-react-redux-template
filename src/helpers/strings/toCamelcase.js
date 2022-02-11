const toCalmelcase = (str) => str.toLowerCase().split('_').map(
  (ch, i) => i ? ch[0].toUpperCase() + ch.slice(1) : ch
).join('');

export default toCalmelcase;
