import { validateText } from './js/textvalidate'
import { getKey } from './js/keygetter'
import { getMeaning } from './js/apigetter'
import { handleSubmit } from './js/formHandler'
import { polarityGet } from './js/scoreTag'
import { updateUI } from './js/uiHandler'

// Import styles from 'client'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    validateText,
    getKey,
    getMeaning,
    polarityGet,
    updateUI,
    handleSubmit
}