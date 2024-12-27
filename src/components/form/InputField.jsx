import PropTypes from "prop-types";

function InputField({label, value, onChange, name, required=false, type="text", placeholder, onKeyUp}) {

    return (
        <div className="flex flex-col gap-2">
             {/*<label htmlFor="email" className="form-label">{label} {required && <span className="text-red-500">*</span>}</label>*/}
             <input type={type} value={value} onChange={onChange} placeholder={placeholder} name={name} id="email"  className="p-2 rounded-md border-2 border-blue-800 text-sm"  required={required} onKeyUp={onKeyUp}/>
             {/*<p className="text-red-600 text-sm mb-2">{ (!value && required) && <span> {name} is required!</span> }</p>*/}
        </div>
    )

}

InputField.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.any,
    type: PropTypes.any,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
}

export default InputField;