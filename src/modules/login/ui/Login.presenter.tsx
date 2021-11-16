import classNames from "classnames"
import { PropsWithChildren } from "react"
import ErrorMessage from "../../common/components/forms/errorMessage/ErrorMessage"

import UseFormHandleSubmit from "../../common/domain/UseFormHandleSubmit.type"
import UseFormRegister from "../../common/domain/UseFormRegister.type"
import useTranslation from "../../common/hooks/useTranslation"
import Credential from "../domain/credential/credential.type"

type PropTypes = {
    register: UseFormRegister<Credential>
    handleSubmit: UseFormHandleSubmit<Credential>
    errors: any
}

export const _LoginPresenter: React.FC<PropTypes> = (props: PropsWithChildren<PropTypes>) => {
    
    const { errors } = props;
    const { t } = useTranslation();

    return (
        <div className={'flex w-screen h-screen justify-center items-center'}>
            <form className={'w-2/12 flex flex-col gap-2'} onSubmit={props.handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label htmlFor={'code'} className={'text-sm'}>
                        {t('code')}
                    </label>
                    <input
                        className={classNames('shadow rounded text-gray-700  border border-gray-300 leading-tight', {
                            'border-red-400': !!errors?.code?.message
                        })}
                        type="text"
                        {...props.register('code')}
                        autoComplete="off"

                    />
                    <ErrorMessage message={errors?.code?.message}/>
                </div>
                <button
                    className={'shadow bg-blue-400 p-2 rounded text-white'}
                >
                    {t('sign.in')}
                </button>
            </form>
        </div>
    )
}


