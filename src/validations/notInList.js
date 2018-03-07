import skippable from '../core/skippable'
import toPromise from '../../lib/toPromise'
import inArray from '../raw/inArray'

/**
 * Makes sure that the value of field under validation is not
 * from one of the defined values.
 *
 * [source, js]
 * ----
 * const rules = {
 *   username: 'notInList:root,admin,super'
 * }
 *
 * // or
 * const rules = {
 *   username: [
 *     rule('notInList', ['root', 'admin', 'super'])
 *   ]
 * }
 * ----
 */
export default (data, field, message, args, get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (!skippable(fieldValue) && inArray(fieldValue, args)) {
      return message
    }
  })
}
