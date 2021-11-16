
import * as yup from "yup";
import { translator as t } from "../../../../config/i18n/i18n.config";

const CredentialSchema = yup.object({
    code: yup.string().required(t('required'))
}).required();

export default CredentialSchema;