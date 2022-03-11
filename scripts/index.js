'use strict';

const authors = [
  {
    name: 'inferno-ibaraki-doji',
    code: 'inferno',
    quote: 'Never underestimate my demonic power.'
  },
  {
    name: 'azurestorm-ichimokuren',
    code: 'azurestorm',
    quote: 'The wind destroys as ruthlessly as a steel blade.'
  },
  {
    name: 'crimson-yoto',
    code: 'crimson',
    quote: 'You have no meaning of living.'
  },
  {
    name: 'onikiri-reforged',
    code: 'reforged',
    quote: 'The blade in my hand is mirrored perfectly in my mind.'
  },
  {
    name: 'monumental-otakemaru',
    code: 'monumental',
    quote: 'I will reduce you to mass of bubbles.'
  }
]; // Store the data to display.

const newQuote = () => {
  const number = Math.floor(Math.random() * authors.length),
  height = $(window).height(),
  size = height > 900
    ? 'large'
    : height > 600
      ? 'medium'
      : 'small';

  $('html').css('--flaming', `var(--flaming-${authors[number].code})`);
  $('html').css('--shadow', `var(--${authors[number].code}-umbra)`);
  $('html').css('--button', `var(--${authors[number].code}-button)`);
  $('html').css('--button-hover', `var(--${authors[number].code}-hover)`);
  $('picture').css('animation', 'showing 0.5s ease-out');
  $('img').css('animation', 'none');
  $('#text').css('animation', 'showing 0.5s ease-out');
  $('#author').css('animation', 'showing 0.5s ease-out');

  setTimeout(() => {
    $('source:first-child').attr('srcset', `images/${authors[number].name}-${size}.avif`);
    $('source:last-child').attr('srcset', `images/${authors[number].name}-${size}.webp`);
    $('img').attr('src', `images/${authors[number].name}-${size}.png`);
    $('#text').text(authors[number].quote);
    $('#author').text(`Onmyoji Game - ${authors[number].name.split('-').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}`);
  }, 250);

  setTimeout(() => {
    $('picture').css('animation', 'none');
    $('img').css('animation', 'change-color 2.5s ease-out infinite');
    $('#text').css('animation', 'showing 0.5s ease-out');
    $('#author').css('animation', 'showing 0.5s ease-out');
  }, 500);
  
  $('#new-quote').blur();
}; // Generate new random quote.

const main = () => {
  newQuote();
  $('#new-quote').on('click', newQuote);
  $('#tweet-quote').on('click', () => $('#tweet-quote').blur());
};

$(document).ready(main);