import PropTypes from "prop-types";

function Button({children}) {

     return (
         <div>
             <button className="p-2 bg-blue-600 text-sm text-white rounded-md hover:bg-blue-700 hover:cursor-pointer " type="submit">{children}</button>
         </div>
     )

}

Button.propTypes = {
    children: PropTypes.node,
}
export default Button;