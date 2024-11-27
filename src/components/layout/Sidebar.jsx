import { PanelRight} from "lucide-react";
import PropTypes from "prop-types";

function Sidebar({onClose, isOpen}){
    return(
        <div className={`fixed z-20 shadow-sm w-72 border-r border-gray-200 h-screen bg-white transition-all ${isOpen ? "left-0" : "-left-72"} lg:left-0 lg:shadow-none`}>
            <div className="flex items-center justify-between h-16 pl-3">
                <div className="">UnCharted UI</div>
                <div>
                    <PanelRight onClick={onClose} className="size-6 hover:cursor-pointer lg:hidden"/>
                </div>
            </div>

        </div>
    )
}

Sidebar.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
}

export default Sidebar;