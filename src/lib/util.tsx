/**
 * decodeHtmlEntities
 */



export function decodeHtmlEntities(text: string) {
  const entities: { [key: string]: string } = {
    '&amp;': '\u0026',
    '&quot;': '\u0022',
    '&#039;': '\u0027',
  };

  return text.replace(/&amp;|&quot;|&#039;/g, (char) => entities[char]);
}

/**
 * removeLastTrailingSlash
 */

export function removeLastTrailingSlash(url: string) {
  return url.replace(/\/$/, '');
}

export function removeExtraSpaces(text: string) {
  return text.replace(/\s+/g, ' ').trim();
}
