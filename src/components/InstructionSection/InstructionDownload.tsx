import { isAndroid, isIos, isMobileDevice } from 'helpers/isMobileDevice'
import StoreButtons from 'components/StoreButtons'

export default function InstructionDownloadButtons() {
  return (
    <StoreButtons
      small
      showAndroid={isAndroid || !isMobileDevice}
      showIos={isIos || !isMobileDevice}
    />
  )
}
