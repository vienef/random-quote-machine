'use strict';

const authors = [
  {
    name: 'inferno_ibaraki_doji',
    code: 'inferno',
    quote: 'Never underestimate my demonic power.'
  },
  {
    name: 'azurestorm_ichimokuren',
    code: 'azurestorm',
    quote: 'The wind destroys as ruthlessly as a steel blade.'
  },
  {
    name: 'crimson_yoto',
    code: 'crimson',
    quote: 'You have no meaning of living.'
  },
  {
    name: 'onikiri_reforged',
    code: 'reforged',
    quote: 'The blade in my hand is mirrored perfectly in my mind.'
  },
  {
    name: 'monumental_otakemaru',
    code: 'monumental',
    quote: 'I will reduce you to mass of bubbles.'
  }
]; // Store the data to display.

const newQuote = () => {
  const number = Math.floor(Math.random() * authors.length);

  $('html').css('--flaming', `var(--flaming-${authors[number].code})`);
  $('html').css('--shadow', `var(--${authors[number].code}-umbra)`);
  $('html').css('--button', `var(--${authors[number].code}-button)`);
  $('html').css('--button-hover', `var(--${authors[number].code}-hover)`);
  $('picture').css('animation', 'changing 1.5s ease-out');
  $('img').css('animation', 'none');
  $('#quote-box > div:last-child').css('animation', 'showing 1.5s ease-out');

  setTimeout(() => {
    $('source:first-child').attr('srcset', `images/${authors[number].name}_av1.avif`);
    $('source:last-child').attr('srcset', `images/${authors[number].name}_web.webp`);
    $('img').attr('src', `images/${authors[number].name}_portable.png`);
    $('#text').text(authors[number].quote);
    $('#author').text(`Onmyoji Game - ${authors[number].name.split('_').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}`);
  }, 750);

  setTimeout(() => {
    $('picture').css('animation', 'none');
    $('img').css('animation', 'change-color 2.5s ease-out infinite');
    $('#quote-box > div:last-child').css('animation', 'none');
  }, 1500);
  
  $('#new-quote').blur();
}; // Generate new random quote.

const main = () => {
  newQuote();
  $('#new-quote').on('click', newQuote);
  $('#tweet-quote').on('click', () => $('#tweet-quote').blur());
};

$(document).ready(main);