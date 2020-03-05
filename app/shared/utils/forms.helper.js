import { ESCAPE } from 'shared/constants'

export const handleEscapeKeyPressDown = (event, action) => {
  if (event.key === ESCAPE) action()
}
