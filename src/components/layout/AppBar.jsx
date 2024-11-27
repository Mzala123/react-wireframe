import {PanelLeft} from "lucide-react";
import PropTypes from "prop-types";

function AppBar({onOpen}) {

    return(
        <div className="fixed w-full bg-white z-10 flex justify-between items-center p-3 h-16 border-b border-gray-200">
           <div>
               <PanelLeft className="size-6 hover:cursor-pointer lg:hidden" onClick={onOpen}/>
           </div>
            <div className="mr-4">
                settings
            </div>
        </div>
    )
}

AppBar.propTypes = {
    onOpen: PropTypes.func.isRequired, // onOpen should be a function and it's required
};

export default AppBar;