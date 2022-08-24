import './form-input.styles.scss';

const FormInput = ({ label, ...prevValue }) => {
    return (
        <div className="group">
            <input className="form-input"
                {...prevValue} />
            {label && (
                <label
                    className={`${prevValue.value.length ? 'shrink' : ''
                        } form-input-label`}
                >
                    {label}
                </label>
            )
            }

        </div>
    );
};

export default FormInput;