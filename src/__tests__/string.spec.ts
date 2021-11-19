/**
 * @Author: Mojie
 * @Date: 2021-11-19 14:52:45
 */

import { getFileExtension, escapeRegExp } from '../string'

describe('String Utils', () => {
  test('getFileExtension', () => {
    expect(getFileExtension('utils.ts')).toEqual('ts')
    expect(getFileExtension('img.PNG')).toEqual('png')
  })
  test('escapeRegExp', () => {
    expect(escapeRegExp('.')).toEqual('\\.')
    expect(escapeRegExp('[')).toEqual('\\[')
    expect(escapeRegExp('123')).toEqual('123')
    expect(escapeRegExp('(*)')).toEqual('\\(\\*\\)')
    expect('[Hello World]'.replace(new RegExp(escapeRegExp('[')), '')).toEqual(
      'Hello World]'
    )
  })
})