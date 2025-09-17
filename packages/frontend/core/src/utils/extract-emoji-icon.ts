import Graphemer from 'graphemer';

/**
 * @deprecated use ExplorerIconService instead
 */
export function extractEmojiIcon(text: string) {
  const isStartsWithEmoji = /^(\p{Emoji_Presentation})/u.test(text);
  if (isStartsWithEmoji) {
    // emoji like "👨🏻‍❤️‍💋‍👨🏻" are combined. Graphemer can handle these.
    const emojiEnd = Graphemer.nextBreak(text, 0);
    return {
      emoji: text.substring(0, emojiEnd),
      rest: text.substring(emojiEnd),
    };
  }
  return {
    emoji: null,
    rest: text,
  };
}
