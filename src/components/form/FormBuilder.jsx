import PropTypes from "prop-types";
import {useState} from "react";
import InputField from "./InputField.jsx";


function FormBuilder({onSubmit, fields=[]}) {

    const[formFields, setFormFields] = useState(fields)
    const[formData, setFormData] = useState({});

    function handleChange(e){
       const {name, value} = e.target;
       setFormFields(
           formFields.map((field)=>{
               setFormData({
                   ...formData,
                   [name]: value
               });
               return field.name === name ? {...field, value: value} : field
           })
       )
    }

    function handleSubmit(e){
        e.preventDefault();
        onSubmit(formData);
    }

    return(
        <div className="">
            <form onSubmit={handleSubmit} className="grid ">
                <div>
                    {
                        formFields.map((field)=>{
                            switch(field.type){
                                case "text":
                                     return <div key={field.name}>
                                         <InputField
                                             name={field.name}
                                             label={field.label}
                                             placeholder={field.placeholder}
                                             type={field.type}
                                             value={field.value}
                                             onChange={handleChange}
                                             required={field.required}
                                             className=""
                                         />
                                     </div>
                                case "search":
                                    return <div key={field.name}>
                                        <InputField
                                            name={field.name}
                                            label={field.label}
                                            placeholder={field.placeholder}
                                            type={field.type}
                                            value={field.value}
                                            onChange={handleChange}
                                            required={field.required}
                                            className=""
                                        />
                                    </div>
                                case "number":
                                    return <div key={field.name}>
                                        <InputField
                                            name={field.name}
                                            label={field.label}
                                            placeholder={field.placeholder}
                                            type={field.type}
                                            value={field.value}
                                            onChange={handleChange}
                                        />
                                    </div>
                                case "textarea":
                                    return <div key={field.name}>

                                    </div>
                            }
                        })
                    }
                </div>
                <div className="flex justify-end gap-2">
                    <button type={"reset"}>Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

FormBuilder.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    fields: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
    // isLoading: PropTypes.bool.isRequired,
}

export default FormBuilder;