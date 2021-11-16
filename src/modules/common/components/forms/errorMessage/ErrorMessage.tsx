
type PropTypes = {
    message?: string|null
}
const ErrorMessage: React.FC<PropTypes> = (props: PropTypes) => (
    <span className={'text-xs text-red-500'}>
        {props.message}
    </span>
);


export default ErrorMessage;