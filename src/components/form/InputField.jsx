import PropTypes from "prop-types";

function InputField({label, value, onChange, name, required=false, type="text", onKeyUp}) {

    return (
        <div className="flex flex-col gap-2">
             <label htmlFor="email" className="form-label">{label} {required && <span className="text-red-500">*</span>}</label>
             <input type={type} value={value} onChange={onChange} name={name} id="email"  className="p-2 rounded-md" required={required} onKeyUp={onKeyUp}/>
             {/*<p className="text-red-600 text-sm mb-2">{ (!value && required) && <span> {name} is required!</span> }</p>*/}
        </div>
    )

}

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.any.isRequired,
    type: PropTypes.any.isRequired,
    onKeyUp: PropTypes.func
}

export default InputField;