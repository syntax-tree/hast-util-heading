import {convertElement} from 'hast-util-is-element'

const names = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hgroup'])

/**
 * Check if the given value is a *heading content* element.
 *
 * @param node
 *   Thing to check (typically `Node`).
 * @returns
 *   Whether value is a heading content element.
 *
 *   The elements `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, and `hgroup` are
 *   heading content.
 */
export const heading = convertElement(
  /**
   * @param element
   * @returns {element is {tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hgroup'}}
   */
  function (element) {
    return names.has(element.tagName)
  }
)
