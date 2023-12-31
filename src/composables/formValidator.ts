
import {ref} from 'vue'

import { FormErrorMessages, ErrMsgCallback } from '@/types/forms'
import FormValidation from '@/services/forms/validation/FormValidation'

export default function useFormValidator<T extends FormValidation>(validatorClass: new (callback: ErrMsgCallback) => T) {
    //error messages
    let errors = ref<FormErrorMessages>({})

    //make validator object
    let validator = new validatorClass((data) => { errors.value = data })
    let doValidate  = validator.validateInput()

    return { 
        doValidate,
        errors,
        validator
    }
}